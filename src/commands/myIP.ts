import commander from "commander";
import inquirer from "inquirer";
import { getConnections } from "../functions/getIPs";
import { copy } from "../functions/copyToClipboard";
import * as packageInfo from "../../package.json"

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
          ...connections.map((connection) =>
            [connection.ifname, connection.address].join(" - ")
          ),
        ],
      },
    ])
    .then((answer) => {
      const chosenIP = answer.IP.split(" - ")[1];
      copy(chosenIP)
        .then(() => {
          console.log("Copied IP address!!");
        })
        .catch((err) => console.error(err));
    });
}
