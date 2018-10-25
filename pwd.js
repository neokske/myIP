#! /usr/bin/env node
const copyPaste = require("copy-paste");

const pwd = process.cwd();

copyPaste.copy(pwd, () => {
  console.log(`Current directory: ${pwd}`);
  console.log("Copied PWD to clipboard");
});
