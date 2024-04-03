export default function generateQueryableString(value: string): string {
  const regex = /[-\s?.,$]/g;
  return value
    .split(regex)
    .filter((fragment) => fragment !== "")
    .map((fragment) => fragment.trim().toLocaleLowerCase())
    .join("_");
}
