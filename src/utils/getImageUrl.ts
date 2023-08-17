export function getImageUrl(dir: string, name: string) {
  return new URL(`../assets/${dir}/image-${name}.webp`, import.meta.url).href;
}
