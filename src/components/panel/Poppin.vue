<template>
  <transition
    v-if="!multi && !disabled"
    appear
    :enter-active-class="`animated ${begin}`"
    :leave-active-class="`animated ${end} ${pos}`"
  >
    <slot />
  </transition>
  <transition-group
    v-else-if="!disabled"
    appear
    :enter-active-class="`animated ${begin}`"
    :leave-active-class="`animated ${end} ${pos}`"
  >
    <slot />
  </transition-group>
  <div v-else>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    pos: {
      type: String,
      default: "absolute-top"
    },
    multi: {
      type: Boolean,
      default: false
    },
    begin: {
      type: String,
      default: "zoomIn"
    },
    end: {
      type: String,
      default: "zoomOut"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
