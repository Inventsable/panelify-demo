<template>
  <q-item tag="label" v-ripple @click="$emit('change')">
    <q-item-section side top>
      <q-checkbox :value="val" />
    </q-item-section>
    <q-item-section style="user-select: none;">
      <q-item-label>{{name}}</q-item-label>
      <q-item-label caption>{{caption}}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: {
    val: Boolean,
    name: String,
    caption: String
  }
};
</script>

<style>
</style>