import { LocalStorage } from "quasar";
import router from "../router";

const state = {
  settings: {
    autoUpdate: true,
    lastMainRoute: "/",
    isRendering: false,
    count: 0,
    doneCount: 0
  }
};

const mutations = {
  setLastMainRoute(state, value) {
    state.settings.lastMainRoute = value;
  },
  setAutoUpdate(state, value) {
    state.settings.autoUpdate = value;
  },
  setSettings(state, value) {
    Object.assign(state.settings, value);
  }
};

const actions = {
  setLastMainRoute({ commit, dispatch }, value) {
    commit("setLastMainRoute", value);
    dispatch("saveSettings");
  },
  setAutoUpdate({ commit, dispatch }, value) {
    commit("setAutoUpdate", value);
    dispatch("saveSettings");
  },
  deleteSettings({ commit, dispatch }) {
    let settings = LocalStorage.getItem("settings");
    Object.keys(settings).forEach(key => {
      LocalStorage.remove(key);
    });
    // dispatch("saveSettings");
  },
  getSettings({ commit }) {
    let settings = LocalStorage.getItem("settings");
    if (settings) commit("setSettings", settings);
  },
  saveSettings({ state }) {
    LocalStorage.set("settings", state.settings);
  },
  resetSettings({ commit, dispatch }) {
    let defaults = {
      autoUpdate: true,
      lastMainRoute: "/"
    };

    Object.keys(defaults).forEach(key => {
      commit(`set${key.charAt(0).toUpperCase() + key.slice(1)}`, defaults[key]);
    });
    dispatch("saveSettings");
  }
};

const getters = {
  settings: state => {
    return state.settings;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
