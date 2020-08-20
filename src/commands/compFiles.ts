import fs from "fs";
import { encode } from "../functions/compareFiles";

const firstFile = process.argv[2];
const secondFile = process.argv[3];

const firstFileExists = fs.existsSync(firstFile);
if (!firstFileExists) {
  console.error("First file does not exist");
}

const lastFileExists = fs.existsSync(secondFile);
if (!lastFileExists) {
  console.error("Second file does not exist");
}

if (firstFileExists && lastFileExists) {
  const file1Base = encode(firstFile);
  const file2Base = encode(secondFile);

  if (file1Base === file2Base) {
    console.log("File contents are equal");
  } else {
    console.log("Files contents are not equal");
  }
}
