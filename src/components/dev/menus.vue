<template>
  <!-- No need for HTML in this component -->
  <div></div>
</template>

<script>
// Invisible component that reactively handles flyout and context menus.
// All changes and modifications trigger redraw of menu and events.
// Modify either menu with .push() or other array methods and see results instantly

// Access this component anywhere via this.app.menus (this.$root.$children[0].menus)

// To completely mirror CEP-Spy, must first generate a fake and static version. This is best done
// here since context menus can only be invoked within Adobe panels and not on browser
import generateFakeSpy from "src/utils/generateFakeSpy";
const fs = window.__adobe_cep__ ? require("fs") : null;

export default {
  name: "adobe-menus",
  data: () => ({
    // this.app.menus.context
    context: {
      menu: [
        {
          id: "refresh",
          label: "Refresh panel",
          enabled: true,
          checkable: false,
          checked: false
        },
        { label: "---" },
        {
          id: "localhost",
          label: "Launch debug",
          enabled: true,
          checkable: false,
          checked: false
        },
        {
          id: "fakeSpy",
          label: "Generate fakeSpy",
          enabled: true,
          checkable: false,
          checked: false
        }
      ]
    },
    // this.app.menus.flyout
    flyout: {
      menu: [
        {
          id: "refresh",
          label: "Refresh panel",
          enabled: true,
          checkable: false,
          checked: false
        }
      ]
    }
  }),
  computed: {
    app() {
      return this.$root.$children[0];
    },
    contextMenu() {
      return this.context.menu;
    },
    // Flyout menu converts to XML from reactive JSON in data() above
    flyoutMenu() {
      let str = `<Menu>`;
      this.flyout.menu.forEach(item => {
        if (item.id)
          str += `<MenuItem Id="${item.id}" Label="${item.label}" Enabled="${item.enabled}" Checked="${item.checked}" />`;
        else str += `<MenuItem Label="---" />`;
      });
      return (str += `</Menu>`);
    },
    // Retrieve localhost without use of CSInterface
    localhost() {
      return this.app.spy.localhost;
    }
  },
  watch: {
    // Any updates to menu will trigger CEP to reset it and callback events
    contextMenu(menu) {
      this.setContextMenu();
    },
    flyoutMenu(menu) {
      this.setFlyoutMenu();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    contextMenuClicked(id) {
      // Callback to handle any context menu event
      if (id == "refresh") {
        location.reload();
      } else if (id == "localhost") {
        this.app.spy.launchLocalhost();
      } else if (id == "fakeSpy") {
        generateFakeSpy(this.app.spy);
      }
    },
    flyoutMenuClicked(evt) {
      // Callback to handle any flyout menu event
      const id = evt.data.menuId;
      if (id == "refresh") {
        location.reload();
      }
    },
    setContextMenu() {
      if (!this.app.isBrowser)
        window.__adobe_cep__.invokeAsync(
          "setContextMenuByJSON",
          JSON.stringify(this.context),
          this.contextMenuClicked
        );
    },
    setFlyoutMenu() {
      if (!this.app.isBrowser) {
        window.__adobe_cep__.invokeSync("setPanelFlyoutMenu", this.flyoutMenu);
        window.__adobe_cep__.addEventListener(
          "com.adobe.csxs.events.flyoutMenuClicked",
          this.flyoutMenuClicked
        );
      }
    },
    init() {
      this.setContextMenu();
      this.setFlyoutMenu();
      this.app.menus = this;
    }
  }
};
</script>

<style>
/* No need for CSS in this component */
</style>
