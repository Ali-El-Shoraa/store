export function formatCurrency(
  value,
  mode = "currency",
  currency = "EGP",
  locale = "en-US",
  options = {}
) {
  if (value === null || value === undefined || value === "") {
    return options.fallback || "0";
  }

  let numericValue;

  if (typeof value === "string") {
    const cleanedValue = value
      .trim()
      .replace(/,/g, "")
      .replace(/[^\d.-]/g, "");

    if (cleanedValue === "" || cleanedValue === "-") {
      return options.fallback || "0";
    }

    numericValue = parseFloat(cleanedValue);
  } else if (typeof value === "number") {
    numericValue = value;
  } else {
    numericValue = Number(value);
  }

  if (isNaN(numericValue) || !isFinite(numericValue)) {
    return options.fallback || "0";
  }

  try {
    const formatOptions = {
      style: mode,
      currency: currency,
      ...(options.formatOptions || {}),
    };

    let formatted = numericValue.toLocaleString(locale, formatOptions);

    if (options.addSpaceAfterSymbol) {
      formatted = formatted.replace(/([^\d\s])(\d)/, "$1 $2");
    }

    return formatted;
  } catch (error) {
    console.error("Currency format error:", error);
    return `${currency.toUpperCase()} ${numericValue}`;
  }
}
