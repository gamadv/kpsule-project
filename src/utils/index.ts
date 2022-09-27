export function convertToEUR(number: number) {
  const parsedNumber = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(number);

  return parsedNumber;
}
