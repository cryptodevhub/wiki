// Adaption of https://stackoverflow.com/a/43376967
export function toTitleCase(text: string): string {
  return text
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Adaption of https://stackoverflow.com/a/1054862
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[-]+/g, '-')
    .replace(/[^\w-]+/g, '')
}
