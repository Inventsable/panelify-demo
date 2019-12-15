<template>
  <q-btn
    dense
    round
    flat
    :to="switchRouteIfActive(path)"
    :icon="icon"
    :color="isActiveRoute(path)"
  >
    <slot />
  </q-btn>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    path: String,
    icon: String
  },
  computed: {
    ...mapGetters("settings", ["settings"])
  },
  methods: {
    switchRouteIfActive(path) {
      return path == this.$route.path ? this.settings.lastMainRoute : path;
    },
    isActiveRoute(path) {
      return path == this.$route.path ? "primary" : "";
    }
  }
};
</script>

<style></style>
