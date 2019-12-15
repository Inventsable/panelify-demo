<template>
  <q-item tag="label" v-ripple dense style="height: 56px; padding-top: 6px;">
    <q-item-section avatar style="margin-left: 56px; padding-bottom: 16px;">
      <span style="user-select: none;">{{ name }}</span>
    </q-item-section>
    <q-item-section>
      <q-item-label>
        <q-input
          debounce="500"
          suffix="px"
          style="width: 60px;"
          dense
          type="number"
          v-model.number="fakeText"
          :rules="[val => !!val || 'What? ', val => val >= 1 || 'Must be greater than 0', ]"
        />
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: {
    text: Number,
    name: String
  },
  computed: {
    fakeText: {
      get() {
        return this.text;
      },
      set(val) {
        if (val == 0 || val < 0) val = 1;
        this.$emit("change", val || 1);
      }
    }
  }
};
</script>

<style>
i.text-negative {
  display: none;
}

.q-field--dense .q-field__after,
.q-field--dense .q-field__append {
  padding-left: 0px;
}
</style>