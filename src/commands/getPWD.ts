import commander from "commander";
import { getPWD } from "../functions/pwd";
import { copy } from "../functions/copyToClipboard";
import * as packageInfo from "../../package.json"

commander
  .version(packageInfo.version)
  .option("-n, --nocopy", "Only prints PWD")
  .parse(process.argv);

const pwd = getPWD();
console.log(`Current directory: ${pwd}`);

if (!commander.nocopy) {
  copy(pwd)
    .then(() => {
      console.log("Copied PWD to clipboard");
    })
    .catch((err) => console.error(err));
}
