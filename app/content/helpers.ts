/** Prefix editable values with this marker while they are unfinished. */
export const PLACEHOLDER_PREFIX = "TODO:";

export function isPlaceholder(value: string): boolean {
  return value.trimStart().startsWith(PLACEHOLDER_PREFIX);
}

export function displayValue(value: string): string {
  return isPlaceholder(value)
    ? value.trimStart().slice(PLACEHOLDER_PREFIX.length).trim()
    : value;
}
