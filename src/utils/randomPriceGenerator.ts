import config from "../config";

const { MIN_RANDOM_PRICE, MAX_RANDOM_PRICE } = config;

const symbolToNumber = (symbol: string) => {
  // Deterministic function to convert a symbol to a number
  return symbol.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
};

export const randomPriceGenerator = (date: Date, symbol: string) => {
  // Black-box function to generate random prices based on the date and symbol
  const bias = (date.getFullYear() % 100) + date.getMonth() + date.getDate();
  const price =
    (symbolToNumber(symbol) % (MAX_RANDOM_PRICE - MIN_RANDOM_PRICE)) +
    MIN_RANDOM_PRICE;
  const randomPrice = (price * bias) / 100;

  return parseFloat(randomPrice.toFixed(2));
};
