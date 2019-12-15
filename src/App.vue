<template>
  <div id="q-app">
    <!-- <render-dialog /> -->
    <menus v-if="!isBrowser" />
    <router-view style />
  </div>
</template>

<script>
// Determine if behavior should adhere to browser or CEP standards (panelify compatibility)
let isBrowser = !window.__adobe_cep__;
// Dynamic CSS variables that automatically handle all app themes and changes:
// https://github.com/Inventsable/starlette
import starlette from "starlette";

// Dynamic identification object that reports all panel and host information:
// https://github.com/Inventsable/CEP-Spy
const spy = !isBrowser
  ? require("cep-spy").default
  : // Unless for panelify, in which case provide fake data
    require("./utils/fakeSpy").default;

import { mapActions, mapGetters } from "vuex";
import { Dialog, Loading, Notify, LoadingBar } from "quasar";
import showErrorMessage from "src/functions/function-show-error-message.js";

export default {
  name: "App",
  components: {
    menus: require("src/components/dev/menus.vue").default,
    "render-dialog": require("src/components/panel/RenderDialog.vue").default
  },
  data: () => ({
    isMounted: false,
    isBrowser: false,
    menus: null,
    loading: false,
    csInterface: null
  }),
  computed: {
    ...mapGetters("settings", ["settings", "config"]),
    routePath() {
      return this.$route.path;
    },
    spy() {
      return spy;
    }
  },
  watch: {
    loading(state) {
      return state ? Loading.show() : Loading.hide();
    },
    routePath(val) {
      this.setLastMainRoute(val);
    }
  },
  async mounted() {
    console.clear();
    this.isBrowser = isBrowser;
    //
    // Selecting the default app and user theme when in browser
    isBrowser ? starlette.initAs("AEFT", "gradient") : starlette.init();
    //
    this.loading = false;
    console.log(
      `${this.spy.extName} ${this.spy.extVersion} : ${
        this.spy.isDev ? "DEV" : "BUILD"
      }`
    );
    //
    this.getSettings();
    // this.deleteSettings();
    //
    if (!isBrowser) {
      console.log("Loading CSInterface");
      this.csInterface = new CSInterface();
      this.csInterface.addEventListener("console", this.consoler);
      this.loadUniversalScripts();
    }

    console.log("SETTINGS:", this.settings);
    this.$q.notify.setDefaults({
      position: "top",
      timeout: 0,
      actions: [{ icon: "close", color: "white" }]
    });
  },
  methods: {
    ...mapActions("settings", [
      "getSettings",
      "resetSettings",
      "deleteSettings",
      "setLastMainRoute"
    ]),
    reset() {
      this.loading = true;
      this.deleteSettings();
      setTimeout(() => {
        this.resetSettings();
        setTimeout(() => {
          this.loading = false;
        }, 200);
      }, 400);
    },
    notify(text) {
      this.$q.notify(text);
    },
    error(text) {
      this.loading = false;
      showErrorMessage(text);
    },
    getCSS(prop) {
      return window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(`${/^\-\-/.test(prop) ? prop : "--" + prop}`);
    },
    setCSS(prop, data) {
      document.documentElement.style.setProperty(
        `${/^\-\-/.test(prop) ? prop : "--" + prop}`,
        data
      );
    },
    loadScript(path) {
      // Correctly loads a script regardless of whether Animate or regular CEP app
      if (!/FLPR/.test(spy.appName))
        this.csInterface.evalScript(`$.evalFile('${path}')`);
      else
        this.csInterface.evalScript(
          `fl.runScript(FLfile.platformPathToURI("${path}"))`
        );
    },
    consoler(msg) {
      // Catches all console.log() usage in .jsx files via CSEvent
      console.log(`${spy.appName}: ${msg.data}`);
    },
    loadUniversalScripts() {
      // Preloads any script located inside ./src/host/universal
      let utilFolder = window.cep.fs.readdir(
        `${spy.path.root}/src/host/universal/`
      );
      if (!utilFolder.err) {
        let valids = utilFolder.data.filter(file => {
          return /\.(jsx|jsfl)$/.test(file);
        });
        valids.forEach(file => {
          this.loadScript(`${spy.path.root}/src/host/universal/${file}`);
        });
      }
      // Preloads any script located in ./src/host/[appName]/
      let hostFolder = window.cep.fs.readdir(
        `${spy.path.root}/src/host/${spy.appName}/`
      );
      if (!hostFolder.err) {
        let valids = hostFolder.data.filter(file => {
          return /\.(jsx|jsfl)$/.test(file);
        });
        valids.forEach(file => {
          this.loadScript(`${spy.path.root}/src/host/${spy.appName}/${file}`);
        });
      } else {
        console.log(
          `${spy.path.root}/src/host/${spy.appName} has no valid files or does not exist`
        );
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
:root {
  --quad: cubic-bezier(0.48, 0.04, 0.52, 0.96);
  --quart: cubic-bezier(0.76, 0, 0.24, 1);
  --quint: cubic-bezier(0.84, 0, 0.16, 1);
  --color-shaded: rgba(0, 0, 0, 0.125);
  --toolbar-height: 48px;
  --bottombar-height: 30px;
  --min-width: 300px;
  --app-scrollbar-width: 16px;

  background-color: var(--color-bg);
  color: var(--color-default);
  font-family: "Open Sans", sans-serif;
  min-width: var(--min-width);
}

body::-webkit-scrollbar {
  width: var(--app-scrollbar-width);
}
#app::-webkit-scrollbar {
  display: block;
  width: var(--app-scrollbar-width);
}
::-webkit-scrollbar {
  background-color: var(--color-scrollbar);
  width: var(--app-scrollbar-width);
}
::-webkit-scrollbar-thumb {
  background: var(--color-scrollbar-thumb);
  border-radius: 20px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-scrollbar-thumb-hover);
}
::-webkit-scrollbar-resizer {
  display: none;
}
::-webkit-scrollbar-button {
  height: 0px;
}

.q-card.q-dialog-plugin {
  background-color: var(--color-bg);
  color: var(--color-icon);
}
.q-drawer {
  background: var(--color-header);
}

.q-item__label--caption {
  color: var(--color-default);
}

.q-item__label--header {
  color: var(--color-text-label);
}

.q-layout__section--marginal {
  color: var(--color-default);
}
.quasar-logo-text {
  fill: var(--color-default);
}
.q-notification {
  background-color: var(--color-header);
}

.q-menu {
  background-color: var(--color-header);
  color: var(--color-default);
}

.q-field__native,
.q-field__prefix,
.q-field__suffix,
.q-field__marginal,
/* .q-field__control, */
.q-field__label,
.q-field__bottom {
  color: var(--color-default);
}

.q-checkbox__inner {
  color: var(--color-default);
}

.q-checkbox__inner--active {
  color: var(--q-color-primary);
}

.q-field__focused {
  border-bottom-color: red;
}

.q-field--standard .q-field__control:before {
  border-bottom: 1px solid var(--color-default);
}
.q-field--standard .q-field__control:hover:before {
  border-bottom: 1px solid var(--color-btn-hover);
}

.q-dark {
  background: var(--color-bg);
}

.q-item__label--header {
  user-select: none;
  cursor: default;
  font-size: 1rem;
}

.q-separator {
  background: var(--color-btn-disabled-text);
}

.q-field__native,
.q-field__prefix,
.q-field__suffix {
  color: var(--color-default);
}

.q-field__marginal {
  color: var(--color-default);
}
</style>
