<template>
  <q-footer style="background: var(--color-bg)">
    <q-bar id="bottombar" style="height: 32px;">
      <q-btn
        dense
        class="q-px-sm"
        flat
        icon="mdi-github-circle"
        @click="launchHomePage"
      >
        <span class="q-pl-sm">source code</span>
      </q-btn>
      <!-- <q-btn dense class="q-px-sm" flat icon="mdi-bug" @click="launchIssue">
        <span class="q-pl-sm">Report a bug</span>
      </q-btn> -->
      <q-space></q-space>
      <q-btn
        color="primary"
        v-if="outdated && !hasDownloaded"
        @click="seeNewestZXP"
        >update</q-btn
      >
      <span v-else class="versionText">{{ `v${extVersion}` }}</span>
    </q-bar>
  </q-footer>
</template>

<script>
export default {
  data: () => ({
    outdated: false,
    webVersion: null,
    hasDownloaded: false
  }),
  computed: {
    app() {
      return this.$root.$children[0];
    },
    extVersion() {
      return this.app.spy.extVersion;
    },
    packageName() {
      return this.app.this.app.spy.package.name;
    }
  },
  methods: {
    launchHomePage() {
      this.app.spy.launchHomepage();
    },
    launchIssue() {
      this.app.spy.launchInNewTab(`${this.app.spy.homepage}/issues/new`);
    },
    async canFetch(repo) {
      try {
        let data = await fetch(
          `https://raw.githubusercontent.com/${repo}/master/package.json`
        ).catch(err => {
          return false;
        });
        return true;
      } catch (e) {
        return false;
      }
    },
    async grabRepoRaw(repo, file) {
      let data = await fetch(
        `https://raw.githubusercontent.com/${repo}/master/package.json`
      ).catch(err => {
        // console.err(err);
      });
      return data.text();
    },
    compareVersions(newest) {
      this.webVersion = newest;
      let web = newest.split("."),
        offline = this.app.spy.extVersion.split("."),
        outdated = false;
      web.forEach((v, i) => {
        if (Number(web[i]) > Number(offline[i])) outdated = true;
      });
      return outdated;
    },
    async seeNewestZXP() {
      if (this.app.isBrowser) {
        let version = JSON.parse(
          await this.grabRepoRaw(`Inventsable/${this.app.spy.package.name}`)
        ).version;
        this.app.spy.launchInNewTab(
          `https://github.com/Inventsable/${this.app.spy.package.name}/raw/master/archive/${this.app.spy.package.name}${version}.zxp`
        );
      } else {
        cep.util.openURLInDefaultBrowser(
          `https://github.com/Inventsable/${this.app.spy.package.name}/raw/master/archive/${this.app.spy.package.name}${this.webVersion}.zxp`
        );
      }
      this.$emit("promptUpdate");
      this.hasDownloaded = true;
    }
  },
  async mounted() {
    if (await this.canFetch(`Inventsable/${this.app.spy.package.name}`)) {
      this.outdated = this.compareVersions(
        JSON.parse(
          await this.grabRepoRaw(`Inventsable/${this.app.spy.package.name}`)
        ).version
      );
    }
  }
};
</script>

<style>
#bottombar {
  min-width: var(--min-width);
}

.versionText {
  cursor: default;
  font-size: 1rem;
  user-select: none;
  padding: 0px 0.5rem;
  color: var(--color-default);
  letter-spacing: 0.5ch;
}
</style>
