#! /usr/bin/env node
const copyPaste = require("copy-paste");
const commander = require("commander");
const packageInfo = require("../package.json");
const getPWD = require("../functions/pwd");

commander
  .version(packageInfo.version)
  .option("-n, --nocopy", "Only prints PWD")
  .parse(process.argv);

const pwd = getPWD();
console.log(`Current directory: ${pwd}`);

if (!commander.nocopy) {
  copyPaste.copy(pwd, () => {
    console.log("Copied PWD to clipboard");
  });
}
