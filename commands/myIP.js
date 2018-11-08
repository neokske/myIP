#! /usr/bin/env node
const copyPaste = require("copy-paste");
const commander = require("commander");
const inquirer = require("inquirer");
const _ = require("lodash");
const packageInfo = require("../package.json");
const getConnections = require("../functions/getIPs");

commander
  .version(packageInfo.version)
  .option("-n, --nocopy", "Get a list without having to choose for copy")
  .parse(process.argv);

const connections = getConnections();

if (!commander.nocopy) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "IP",
        message: "Which ip do you want to copy to your clipboard?",
        choices: [
          ...connections.map(connection =>
            _.join([connection.ifname, connection.address], " - ")
          )
        ]
      }
    ])
    .then(answer => {
      const chosenIP = answer.IP.split(" - ")[1];
      copyPaste.copy(chosenIP, () => {
        console.log("Copied IP address!!");
      });
    });
}
