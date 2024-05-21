export function getImageUrl(folder, imageId) {
  return new URL(`../../assests/images/${folder}/${imageId}`, import.meta.url).href
}
