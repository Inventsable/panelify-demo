const fs = require("fs");
const path = require("path");

export default function(spy) {
  let original = spy;
  let fakeSpy = {
    getAllExtensions() {
      return null;
    },
    getExtData(id) {
      return null;
    },
    openExtension(ext) {
      return null;
    },
    getVersion(ext) {
      return this.extVersion;
    },
    launchLocalhost(url = null) {
      return null;
    },
    launchInNewTab(url) {
      window.open(url);
    },
    launchHomepage() {
      if (this.homepage) this.launchInNewTab(this.homepage || null);
      else console.log("Panel has no homepage defined in package.json");
    },
    launchGitRepo() {
      if (this.repository)
        this.launchInNewTab("https://github.com/" + this.repository);
      else console.log("Panel has no repo defined in package.json");
    }
  };

  spy.exts = [];
  spy = JSON.stringify(spy, null, 2);
  spy = spy.replace(
    /\}$/,
    `,
  getAllExtensions() {
      return null;
    },
    getExtData(id) {
      return null;
    },
    openExtension(ext) {
      return null;
    },
    getVersion(ext) {
      return this.extVersion;
    },
    launchLocalhost(url = null) {
      return null;
    },
    launchInNewTab(url) {
      window.open(url);
    },
    launchHomepage() {
      if (this.homepage) this.launchInNewTab(this.homepage || null);
      else console.log('Panel has no homepage defined in package.json');
    },
    launchGitRepo() {
      if (this.repository)
        this.launchInNewTab('https://github.com/' + this.repository);
      else console.log('Panel has no repo defined in package.json');
    }
}`
  );
  spy = spy.replace(/\s\,/, ",");

  // Object.assign(fakeSpy, spy.default);
  let file = `export default ${spy}`;
  fs.writeFileSync(`${original.path.root}/src/utils/fakeSpy/index.js`, file, {
    encoding: "utf-8"
  });
}
