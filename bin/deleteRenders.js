#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

async function init() {
  let thispath = path.resolve("./");
  let folders = await readDir(`${thispath}/renders`);
  if (!folders.length) return null;
  for (let folder of folders) fs.removeSync(`${thispath}/renders/${folder}`);
}

async function readDir(thispath) {
  return new Promise((resolve, reject) => {
    fs.readdir(path.resolve(thispath), { encoding: "utf-8" }, (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
}

init();
