import Portfolio from "./Portfolio";
import { buildPortfolioStocks } from "./utils/buildPorfolioStocks";
import config from "./config";

const { STOCKS, START_DATE, END_DATE } = config;

const main = () => {
  const portfolioStocks = buildPortfolioStocks(STOCKS);
  const portfolio = new Portfolio(portfolioStocks);
  const { periodReturn, annualizedReturn, netProfit } = portfolio.profit(
    START_DATE,
    END_DATE,
  );

  console.log(`Net profit: $${netProfit.toFixed(2)}`);
  console.log(`Period return: ${(periodReturn * 100).toPrecision(2)}%`);
  console.log(`Annualized return: ${(annualizedReturn * 100).toPrecision(2)}%`);
};

main();
