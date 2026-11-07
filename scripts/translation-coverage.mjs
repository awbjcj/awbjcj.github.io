// Structural and locale-specific checks complement TypeScript's catalog types.
// Proper names, publication credits, URLs, and technology names can stay in English.
const translatedPaths = [
  /^siteConfig\.profile\.(brandSubtitle|title|location|summary|availability)$/,
  /^siteConfig\.contact\.responseNote$/,
  /^siteConfig\.accessibility\.(?!githubLabel$)/,
  /^siteConfig\.preferences\./,
  /^siteConfig\.navigation\[\]\.label$/,
  /^siteConfig\.hero\.(?!panel\.title$)/,
  /^siteConfig\.sections\.(?!contact\.(?:linkedinLabel|githubLabel)$)/,
  /^siteConfig\.footer\./,
  /^enhancements\./,
  /^casebook\.(?!projects\.requirements\.architecture\.output\.detail$)/,
  /^liveProducts\[\]\.(?:tagline|description|facts\[\]|actionLabel|trial\.(?:heading|note|nameField|namePlaceholder|emailField|submitLabel))$/,
  /^projects\[\]\.(?:kind|signal|description|repo\.label|live\.label)$/,
  /^experience\[\]\.(?:label|title|description)$/,
  /^resume\.roles\[\]\.(?:role|period|location|highlights\[\])$/,
  /^resume\.education\[\]\.(?:school|credential|period)$/,
  /^resume\.publications\[\]\.title$/,
  /^focusAreas\[\]\.(?:title|description)$/,
  /^skillGroups\[\]\.label$/,
];

const isObject = (value) => value !== null && typeof value === "object" && !Array.isArray(value);

export function validateTranslationCoverage(english, chinese) {
  const errors = [];

  function visit(source, translation, path) {
    if (Array.isArray(source)) {
      if (!Array.isArray(translation)) {
        errors.push(`${path}: expected a translated list`);
        return;
      }
      if (source.length !== translation.length) {
        errors.push(`${path}: expected ${source.length} entries, found ${translation.length}`);
      }
      source.forEach((value, index) => visit(value, translation[index], `${path}[${index}]`));
      return;
    }
    if (isObject(source)) {
      if (!isObject(translation)) {
        errors.push(`${path}: expected a translated object`);
        return;
      }
      for (const [key, value] of Object.entries(source)) {
        visit(value, translation[key], path ? `${path}.${key}` : key);
      }
      return;
    }
    if (typeof source !== "string") return;
    if (typeof translation !== "string" || !translation.trim()) {
      errors.push(`${path}: missing text`);
      return;
    }
    if (translation.includes("\uFFFD")) errors.push(`${path}: contains a replacement character`);

    const normalizedPath = path.replace(/\[\d+\]/g, "[]");
    if (translatedPaths.some((pattern) => pattern.test(normalizedPath)) && !/\p{Script=Han}/u.test(translation)) {
      errors.push(`${path}: expected Simplified Chinese copy`);
    }
    const sharedIdentifier = /(?:^|\.)(?:id|href|action)$/.test(path) || /^experience\[\d+\]\.link$/.test(path);
    if (sharedIdentifier && translation !== source) {
      errors.push(`${path}: destination or identifier differs between languages`);
    }
  }

  visit(english, chinese, "");
  if (Array.isArray(english?.resume?.publications) && Array.isArray(chinese?.resume?.publications)) {
    english.resume.publications.forEach((publication, index) => {
      if (chinese.resume.publications[index]?.originalTitle !== publication.title) {
        errors.push(`resume.publications[${index}].originalTitle: must preserve the published title`);
      }
    });
  }
  return errors;
}
