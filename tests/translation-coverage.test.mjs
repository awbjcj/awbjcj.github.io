import assert from "node:assert/strict";
import test from "node:test";
import { validateTranslationCoverage } from "../scripts/translation-coverage.mjs";

function catalogs() {
  return {
    english: {
      siteConfig: { navigation: [{ label: "Work", href: "#work" }] },
      projects: [{ id: "example", name: "Example App", description: "A useful application." }],
      resume: { publications: [{ title: "Original paper title", authors: "A. Author", href: "https://example.org/paper" }] },
    },
    chinese: {
      siteConfig: { navigation: [{ label: "项目", href: "#work" }] },
      projects: [{ id: "example", name: "Example App", description: "一个实用的应用。" }],
      resume: { publications: [{ title: "论文中文标题", originalTitle: "Original paper title", authors: "A. Author", href: "https://example.org/paper" }] },
    },
  };
}

test("accepts localized copy while preserving names, destinations, and original publication titles", () => {
  const { english, chinese } = catalogs();
  assert.deepEqual(validateTranslationCoverage(english, chinese), []);
});

test("reports missing entries and English fallback in translated copy", () => {
  const { english, chinese } = catalogs();
  chinese.siteConfig.navigation = [];
  chinese.projects[0].description = english.projects[0].description;
  const errors = validateTranslationCoverage(english, chinese).join("\n");
  assert.match(errors, /siteConfig\.navigation: expected 1 entries, found 0/);
  assert.match(errors, /projects\[0\]\.description: expected Simplified Chinese copy/);
});

test("reports changed destinations, damaged text, and missing original titles", () => {
  const { english, chinese } = catalogs();
  chinese.projects[0].id = "wrong";
  chinese.projects[0].description = "翻译\uFFFD";
  chinese.resume.publications[0].originalTitle = "Different title";
  const errors = validateTranslationCoverage(english, chinese).join("\n");
  assert.match(errors, /projects\[0\]\.id: destination or identifier differs/);
  assert.match(errors, /projects\[0\]\.description: contains a replacement character/);
  assert.match(errors, /resume\.publications\[0\]\.originalTitle: must preserve the published title/);
});
