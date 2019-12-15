<template>
  <q-page>
    <q-list>
      <q-item-label header>General</q-item-label>
      <settings-item-checkbox
        :val="autoUpdate"
        name="Auto Update"
        caption="Allow the panel to update automatically"
        @change="autoUpdate = !autoUpdate"
      />
      <!-- <settings-item-input
        v-if="true"
        name="Some label"
        :text="Value of input"
        @change="setValue"
      />-->
    </q-list>
    <div class="q-pa-md row">
      <q-btn flat class="col" color="red-8" @click="reset">Reset all settings and memory</q-btn>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    "settings-item-checkbox": require("src/components/settings/SettingsItemCheckbox.vue")
      .default,
    "settings-item-input": require("src/components/settings/SettingsItemInput.vue")
      .default
  },
  data: () => ({
    text: ""
  }),
  computed: {
    ...mapGetters("settings", ["settings"]),
    app() {
      return this.$root.$children[0];
    },
    autoUpdate: {
      get() {
        return this.settings.autoUpdate;
      },
      set(value) {
        this.setAutoUpdate(value);
      }
    }
  },
  async mounted() {},
  methods: {
    ...mapActions("settings", ["setAutoUpdate"]),
    reset() {
      console.log("Hello?");
      this.app.reset();
    }
  }
};
</script>

<style></style>
