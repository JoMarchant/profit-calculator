# Stock profit calculator

## Config

All parameters can be set in the `config.ts` file.

## Setup and run

Node `20.0.0` or higher is required.

1. Install dependencies: `npm install`
2. Run the app: `npm start`

## Brief description

### Stock (`Stock.ts`)

Stock is a class that represents a stock item. It has a `price` method that randomly generates its price for a date and its symbol.

### Portfolio (`Portfolio.ts`)

Portfolio calculates the profit of its `Stock` items.

- Net profit: sums the value of all `Stock` items for start and end date. The difference is the net profit.

- Profit percentage: calculates the percentage of the net profit.

- Annualized return: calculates the annualized return of the net profit. It uses the formula:

$$(\frac{endValue}{startValue})^{1/years} -1$$
