import Stock from "../Stock";

export const buildPortfolioStocks = (stocks: {
  [key: string]: number;
}): Stock[] => {
  const portfolioStocks: Stock[] = [];
  const symbols = Object.keys(stocks);
  symbols.forEach((symbol) => {
    for (let i = 0; i < stocks[symbol]; i++) {
      portfolioStocks.push(new Stock(symbol, String(i)));
    }
  });

  return portfolioStocks;
};
