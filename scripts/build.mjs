import { fileURLToPath } from "node:url";

// vinext's build ends with process.exit(0) immediately after prerender fetches.
// On Windows / Node 24, forced exit races with libuv handle cleanup:
// https://github.com/nodejs/node/issues/64322
// Let successful builds drain naturally; retain the original failure exit.
if (process.platform === "win32" && Number(process.versions.node.split(".")[0]) === 24) {
  const exit = process.exit.bind(process);
  process.exit = (code) => {
    if (code === 0) {
      process.exitCode = 0;
      process.exit = exit;
      return;
    }
    return exit(code);
  };
}

const cli = new URL("cli.js", import.meta.resolve("vinext"));
process.argv = [process.execPath, fileURLToPath(cli), "build", ...process.argv.slice(2)];
await import(cli.href);
