export function arrayRange(length: number, offset: number = 0) {
  return Array.from(Array(length + offset).keys());
}
