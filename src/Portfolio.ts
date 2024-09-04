import Stock from "./Stock";

type Returns = {
  periodReturn: number;
  annualizedReturn: number;
  netProfit: number;
};

class Portfolio {
  private _stocks: Stock[] = [];

  constructor(initialStocks: Stock[] = []) {
    this._stocks = initialStocks;
  }

  private getValueAtDate(date: Date): number {
    return this._stocks.reduce((total, stock) => {
      return total + stock.price(date);
    }, 0);
  }

  private periodReturn(startValue: number, endValue: number): number {
    return (endValue - startValue) / startValue;
  }

  private annualizedReturn(periodReturn: number, years: number): number {
    return Math.pow(1 + periodReturn, 1 / years) - 1;
  }

  private validateDateRange(startDate: Date, endDate: Date): void {
    if (startDate.getTime() > endDate.getTime()) {
      throw new Error("Start date must be before end date");
    }
  }

  profit(startDate: Date, endDate: Date): Returns {
    this.validateDateRange(startDate, endDate);

    const startValue = this.getValueAtDate(startDate);
    const endValue = this.getValueAtDate(endDate);
    const periodReturn = this.periodReturn(startValue, endValue);
    const years =
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365);
    const annualizedReturn = this.annualizedReturn(periodReturn, years);

    return { periodReturn, annualizedReturn, netProfit: endValue - startValue };
  }
}

export default Portfolio;
