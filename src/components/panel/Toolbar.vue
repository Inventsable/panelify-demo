<template>
  <q-header>
    <q-bar id="toolbar">
      <!-- Only needed to flush all Vuex settings -->
      <!-- <router-btn path="/extra/settings" icon="mdi-settings" /> -->
      <!-- <q-btn dense flat round icon="mdi-incognito" @click="" /> -->
      <q-space />
      <div style="width: 186px; display: flex; flex-wrap: none;">
        <q-tabs v-model="activeTab" shrink stretch>
          <q-route-tab v-for="(tab, i) in tabs" :key="i" :label="tab.label" :to="tab.route"></q-route-tab>
        </q-tabs>
      </div>
    </q-bar>
  </q-header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    mini: {
      type: Boolean,
      default: false
    }
  },
  components: {
    poppin: require("./Poppin.vue").default,
    "router-btn": require("./ToolbarRouteBtn").default
  },
  data: () => ({
    activeTab: "Index",
    tabs: [
      {
        label: "Index",
        route: "/"
      },
      {
        label: "Settings",
        route: "/settings"
      }
    ]
  }),
  mounted() {},
  computed: {
    ...mapGetters("settings", ["settings"]),
    app() {
      return this.$root.$children[0];
    }
  }
};
</script>

<style>
#toolbar {
  min-width: var(--min-width);
}

.q-layout__section--marginal {
  user-select: none;
  cursor: default;
  background-color: var(--color-bg);
}

.q-tab {
  min-height: 32px;
  max-height: 32px;
}

.q-bar {
  background: transparent;
}

@media screen and (max-width: 260px) {
  .toolbar-title {
    display: none;
  }
}
</style>
