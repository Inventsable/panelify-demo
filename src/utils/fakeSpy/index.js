export default {
  "path": {
    "root": "C:/Users/TRSch/AppData/Roaming/Adobe/CEP/extensions/bombino-panelify",
    "userData": "C:/Users/TRSch/AppData/Roaming",
    "commonFiles": "C:/Program Files/Common Files",
    "myDocuments": "C:/Users/TRSch/OneDrive/Documents",
    "hostApplication": "C:/Program Files/Adobe/Adobe After Effects 2020/Support Files/AfterFX.exe"
  },
  "package": {
    "name": "bombino-panelify",
    "version": "1.0.0",
    "description": "Bombino-quasar-panelify template",
    "productName": "Quasar Panelify",
    "cordovaId": "org.cordova.panelify",
    "repository": "Inventsable/bombino-quasar-panelify",
    "author": "Tom Scharstein II <tom@inventsable.cc>",
    "homepage": "https://github.com/Inventsable/bombino-quasar-panelify",
    "capacitorId": "",
    "private": true,
    "scripts": {
      "serve": "quasar dev",
      "build": "quasar build",
      "sign": "bombino-cmd sign",
      "switch": "bombino-cmd switch",
      "update": "bombino-cmd update",
      "register": "bombino-cmd register",
      "help": "bombino-cmd help",
      "convert": "node ./bin/convertToPanelify.js",
      "clear": "node ./bin/deleteRenders.js"
    },
    "dependencies": {
      "@quasar/extras": "^1.0.0",
      "cep-spy": "^1.1.1",
      "cluecumber": "0.0.31",
      "lottie-web": "^5.5.9",
      "quasar": "^1.0.0",
      "starlette": "^0.4.5",
      "vue-drag-drop": "^1.1.4"
    },
    "devDependencies": {
      "@quasar/app": "^1.0.0",
      "@quasar/quasar-app-extension-dotenv": "^1.0.0",
      "bombino-commands": "^1.0.1",
      "chalk": "^3.0.0",
      "fs-extra": "^8.1.0",
      "inquirer": "^7.0.0",
      "types-for-adobe": "^1.5.0",
      "worker-loader": "^2.0.0"
    },
    "engines": {
      "node": ">= 8.9.0",
      "npm": ">= 5.6.0",
      "yarn": ">= 1.6.0"
    },
    "browserslist": [
      "last 1 version, not dead, ie >= 11"
    ]
  },
  "author": "Tom Scharstein II <tom@inventsable.cc>",
  "repository": "Inventsable/bombino-quasar-panelify",
  "homepage": "https://github.com/Inventsable/bombino-quasar-panelify",
  "localhost": "http://localhost:4469",
  "isDev": true,
  "extVersion": "1.0.0",
  "appName": "AEFT",
  "appLocale": "en_US",
  "appVersion": "17.0",
  "userAgent": "Windows",
  "cepVersion": "9.4.0",
  "hostCapabilities": {
    "DISABLE_FLASH_EXTENSIONS": true,
    "EXTENDED_PANEL_ICONS": false,
    "SUPPORT_HTML_EXTENSIONS": true,
    "DELEGATE_APE_ENGINE": false,
    "EXTENDED_PANEL_MENU": true
  },
  "userId": "8167525A54922E990A4C98C6@AdobeID",
  "extID": "com.bombino-panelify.panel",
  "exts": [],
  "ext": {
    "mainPath": "C:\\Users\\TRSch\\AppData\\Roaming\\Adobe\\CEP\\extensions\\bombino-panelify\\src\\index-dev.html",
    "maxHeight": 500,
    "maxWidth": 598,
    "specialExtensionDataXML": "",
    "id": "com.bombino-panelify.panel",
    "name": "bombino-panelify",
    "width": 280,
    "windowType": "Panel",
    "isAutoVisible": true,
    "basePath": "C:\\Users\\TRSch\\AppData\\Roaming\\Adobe\\CEP\\extensions\\bombino-panelify",
    "height": 400,
    "minWidth": 260,
    "requiredRuntimeList": [
      {
        "name": "CSXS",
        "versionRange": {
          "lowerBound": {
            "version": {
              "minor": 0,
              "micro": 0,
              "major": 8
            },
            "inclusive": true
          }
        }
      }
    ],
    "minHeight": 300,
    "isPluginExtension": false,
    "defaultExtensionDataXML": ""
  },
  "activeExt": {
    "mainPath": "C:\\Users\\TRSch\\AppData\\Roaming\\Adobe\\CEP\\extensions\\bombino-panelify\\src\\index-dev.html",
    "maxHeight": 500,
    "maxWidth": 598,
    "specialExtensionDataXML": "",
    "id": "com.bombino-panelify.panel",
    "name": "bombino-panelify",
    "width": 280,
    "windowType": "Panel",
    "isAutoVisible": true,
    "basePath": "C:\\Users\\TRSch\\AppData\\Roaming\\Adobe\\CEP\\extensions\\bombino-panelify",
    "height": 400,
    "minWidth": 260,
    "requiredRuntimeList": [
      {
        "name": "CSXS",
        "versionRange": {
          "lowerBound": {
            "version": {
              "minor": 0,
              "micro": 0,
              "major": 8
            },
            "inclusive": true
          }
        }
      }
    ],
    "minHeight": 300,
    "isPluginExtension": false,
    "defaultExtensionDataXML": ""
  },
  "extName": "bombino-panelify",
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
}