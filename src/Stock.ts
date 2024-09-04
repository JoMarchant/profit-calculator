import { randomPriceGenerator } from "./utils/randomPriceGenerator";

class Stock {
  private _symbol: string;
  private _id: string;

  constructor(symbol: string, id: string) {
    this._symbol = symbol;
    this._id = id;
  }

  get symbol(): string {
    return this._symbol;
  }

  get id(): string {
    return this._id;
  }

  price(date: Date): number {
    return randomPriceGenerator(date, this._symbol);
  }
}

export default Stock;
