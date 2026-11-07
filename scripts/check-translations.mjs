import { createServer } from "vite";
import { validateTranslationCoverage } from "./translation-coverage.mjs";

// Load the same TypeScript catalogs that the portfolio renders.
const server = await createServer({
  configFile: false,
  logLevel: "silent",
  server: { middlewareMode: true },
  appType: "custom",
  optimizeDeps: { noDiscovery: true },
});

try {
  const { english } = await server.ssrLoadModule("/app/content/catalog.ts");
  const { chinese } = await server.ssrLoadModule("/app/content/zh-CN.config.ts");
  const errors = validateTranslationCoverage(english, chinese);
  if (errors.length) {
    console.error(`Translation check failed:\n${errors.map((error) => `  ${error}`).join("\n")}`);
    process.exitCode = 1;
  } else {
    console.log("Translation coverage check passed for English and Simplified Chinese.");
  }
} finally {
  await server.close();
}
