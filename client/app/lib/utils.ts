export function formatNumber(number: number): string {
  // Ensure the number has exactly two decimal places
  let [integerPart, decimalPart] = number.toFixed(2).split(".");

  // Format the integer part with thousands separators
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Combine the formatted integer part with the decimal part
  return `${integerPart},${decimalPart}`;
}


export function formatPath(path: string): string {
  const word = path.split("/")[1]
  if (!word) return ""

  return word.charAt(0).toUpperCase() + word.slice(1)
}

export function calculateTotalPages(totalProducts: number, numItems: number): number {
  return Math.ceil(totalProducts / numItems)
}