export function formatNumber(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function formatPath(path: string): string {
  const word = path.split("/")[1]
  if (!word) return ""

  return word.charAt(0).toUpperCase() + word.slice(1)
}

export function calculateTotalPages(totalProducts: number, numItems: number): number {
  return Math.ceil(totalProducts / numItems)
}