import { fileURLToPath } from "node:url";
import { readFileSync, writeFileSync } from "node:fs";

// Async framework modules can otherwise install history listeners before the
// page's same-document language/anchor handler on a warm cache.
function hoistLocalHistoryInitializer() {
  const htmlPath = new URL("../dist/client/index.html", import.meta.url);
  const html = readFileSync(htmlPath, "utf8");
  const initializer = html.match(/<script\b[^>]*data-local-history-init="true"[^>]*>[\s\S]*?<\/script>/)?.[0];
  if (!initializer || !html.includes("<head>")) throw new Error("Missing local history initializer in the static export");
  writeFileSync(htmlPath, html.replace(initializer, "").replace("<head>", `<head>${initializer}`), "utf8");
}

let historyInitializerHoisted = false;
function finishSuccessfulBuild() {
  if (historyInitializerHoisted) return;
  hoistLocalHistoryInitializer();
  historyInitializerHoisted = true;
}

// vinext's build ends with process.exit(0) immediately after prerender fetches.
// On Windows / Node 24, forced exit races with libuv handle cleanup:
// https://github.com/nodejs/node/issues/64322
// Let successful builds drain naturally; retain the original failure exit.
const exit = process.exit.bind(process);
process.exit = (code) => {
  if (code === 0) {
    try {
      finishSuccessfulBuild();
    } catch (error) {
      console.error("Could not prepare static navigation:", error);
      return exit(1);
    }
    if (process.platform === "win32" && Number(process.versions.node.split(".")[0]) === 24) {
      process.exitCode = 0;
      process.exit = exit;
      return;
    }
  }
  return exit(code);
};

const cli = new URL("cli.js", import.meta.resolve("vinext"));
process.argv = [process.execPath, fileURLToPath(cli), "build", ...process.argv.slice(2)];
await import(cli.href);
