#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const inquirer = require("inquirer");

const cepBlock = `${chalk.black.bgBlue(" CEP ")}`;

async function init() {
  let hasQuasar = await hasQuasarConfig();
  if (!hasQuasar) return null;
  let isWeb = await determineIfWeb();
  let context = isWeb ? "WEB" : "ADOBE";

  console.log(
    `${cepBlock}  This panel is in ${chalk.blue(`${context} context`)}`
  );
  console.log("");
  let answer = await inquirer.prompt([
    {
      type: "confirm",
      name: "shouldSwitch",
      message: `Would you like to switch to ${chalk.blue(
        `${!isWeb ? "WEB" : "ADOBE"}`
      )}?`,
      default: true
    }
  ]);

  if (answer.shouldSwitch) {
    let res = await switchQuasarConfig(isWeb);
    boxLog(`✔  Context switched to ${!isWeb ? "WEB" : "ADOBE"}`);
  } else {
    console.log("");
    console.log(`   All right! No changes have been made.`);
    console.log("");
  }
}

async function getQuasarConfig() {
  return fs.readFileSync(`${path.resolve("./")}/quasar.conf.js`, {
    encoding: "utf-8"
  });
}

async function determineIfWeb() {
  let text = await getQuasarConfig();
  let blockRX = /extendWebpack\(cfg\)\s\{[^\}]*\}/;
  return /\/\/\scfg\.target/.test(text.match(blockRX)[0]);
}

async function switchQuasarConfig(isWeb) {
  let text = await getQuasarConfig();
  let blockRX = /extendWebpack\(cfg\)\s\{[^\}]*\}/gm;
  let adobeText = `extendWebpack(cfg) {
        // COMMENT ONLY WHEN IN PANELIFY
        cfg.target = "node-webkit"; // Set the target to node-webkit (https://webpack.js.org/configuration/target/)
        cfg.node = false; // Don't set certain Node globals/modules to empty objects (https://webpack.js.org/configuration/node/)
      }`;
  let webText = `extendWebpack(cfg) {
        // COMMENT ONLY WHEN IN PANELIFIED
        // cfg.target = "node-webkit"; // Set the target to node-webkit (https://webpack.js.org/configuration/target/)
        // cfg.node = false; // Don't set certain Node globals/modules to empty objects (https://webpack.js.org/configuration/node/)
      }`;
  if (isWeb) {
    text = text.replace(blockRX, adobeText);
    text = text.replace(/open\:\strue/, "open: false");
  } else {
    text = text.replace(blockRX, webText);
    text = text.replace(/open\:\sfalse/, "open: true");
  }

  fs.writeFileSync(`${path.resolve("./")}/quasar.conf.js`, text, {
    encoding: "utf-8"
  });
}

async function hasQuasarConfig() {
  let files = await readDir(path.resolve("./"));
  return files.includes("quasar.conf.js");
}

async function readDir(thispath) {
  return new Promise((resolve, reject) => {
    fs.readdir(path.resolve(thispath), { encoding: "utf-8" }, (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
}

function boxLog(str, color, padded = false) {
  console.log("");
  if (/green/.test(color)) {
    console.log(
      `${padded ? "  " : ""}  ${chalk.black.bgGreen(
        `  ${str.toUpperCase()}  `
      )}`
    );
  } else {
    console.log(
      `${padded ? "  " : ""}  ${chalk.black.bgBlue(`  ${str.toUpperCase()}  `)}`
    );
  }
  console.log("");
}

init();
