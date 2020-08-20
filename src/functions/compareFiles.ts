import fs, { PathLike } from "fs";

export const encode = (file: PathLike) =>
  new Buffer(fs.readFileSync(file)).toString("base64");
