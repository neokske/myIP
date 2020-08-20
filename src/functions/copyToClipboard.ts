import child_process from "child_process";

const WINDOWS = "win32";
const MACOS = "darwin";

const copyToWindowsClip = (
  data: any,
  resolve: (value?: unknown) => void,
  reject: (reason?: any) => void
) => {
  const proc = child_process.spawn("clip");
  proc.stdin.write(data, (err) => reject(err));
  proc.stdin.end();
  resolve();
};

const copyToMacos = (
  data: any,
  resolve: (value?: unknown) => void,
  reject: (reason?: any) => void
) => {
  const proc = child_process.spawn("pbcopy");
  proc.stdin.write(data, (err) => reject(err));
  proc.stdin.end();
  resolve();
};

export const copy = (data: any) => {
  return new Promise((resolve, reject) => {
    switch (process.platform) {
      case WINDOWS:
        copyToWindowsClip(data, resolve, reject);
        break;
      case MACOS:
        copyToMacos(data, resolve, reject);
        break;
      default:
        console.log("Copy isn't yet supported on your OS");
    }
  });
};
