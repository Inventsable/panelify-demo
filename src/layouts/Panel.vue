<template>
  <q-layout view="hHh lpR fFf">
    <update-modal
      :state="updateNotification"
      @close="updateNotification = false"
    />
    <toolbar />
    <toolbar-bottom @promptUpdate="updateNotification = true" />
    <q-pull-to-refresh style="height: 100%;" @refresh="refresh">
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-pull-to-refresh>
  </q-layout>
</template>

<script>
export default {
  name: "Panel",
  components: {
    toolbar: require("components/panel/Toolbar.vue").default,
    tooltipper: require("components/panel/tooltipper.vue").default,
    "toolbar-bottom": require("components/panel/ToolbarBottom.vue").default,
    "update-modal": require("components/panel/UpdateModal.vue").default
  },
  data: () => ({
    updateNotification: false
  }),
  computed: {},
  methods: {
    refresh(done) {
      location.reload();
    }
  },
  mounted() {
    console.log(this.hasFakeSpy);
  }
};
</script>

<style>
.q-layout__section--marginal {
  user-select: none;
  cursor: default;
  background-color: var(--color-bg);
}

@media screen and (max-width: 260px) {
  .toolbar-title {
    display: none;
  }
}

.dialog-contents {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
</style>
