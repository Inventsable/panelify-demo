<template>
  <q-dialog
    v-model="isRendering"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card class="" style="width: 300px">
      <q-card-section>
        <div class="flex flex-center text-h6">
          {{ `Rendering ${count} files...` }}
        </div>
      </q-card-section>
      <q-card-section>
        <div v-if="!circular" class="progress-wrap">
          <q-linear-progress
            :value="progress"
            style="width: 200px;"
            color="primary"
            class="q-mt-sm"
          />
          <span class="text-primary text-h6">{{ percentage }}</span>
        </div>
        <div v-else class="circular-wrap">
          <q-circular-progress
            show-value
            class="text-primary q-ma-md"
            :value="circularValue"
            size="50px"
            color="primary"
          >
            {{ circularValue }}%
          </q-circular-progress>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("settings", ["settings"]),
    app() {
      return this.$root.$children[0];
    },
    isRendering() {
      return this.settings.isRendering;
    },
    count() {
      return this.settings.count
    },
    progress() {
      let count = this.doneCount;
      let total = this.count;
      return count <= total ? count / total : 1;
    },
    percentage() {
      return `${Math.floor(this.progress * 100)}%`;
    },
    circularValue() {
      return Math.floor(this.progress * 100);
    },
    circular() {
      return false;
    }
  },
  data: () => ({}),
  mounted() {}
};
</script>

<style>
.progress-wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}

.circular-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
}
</style>
