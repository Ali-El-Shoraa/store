export function formatCurrency(value, locale = "en-US", currency = "EGP") {
  return value.toLocaleString(locale, {
    style: "currency",
    currency,
  });
}
