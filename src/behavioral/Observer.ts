// Subject (Publisher): Stock Market Data Provider
class StockMarketDataProvider {
  private observers: Array<Investor> = [];

  // Method to register observers (investors)
  addObserver(observer: Investor): void {
    this.observers.push(observer);
  }

  // Method to unregister observers (investors)
  removeObserver(observer: Investor): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // Method to notify observers about stock price changes
  notifyObservers(stock: string, price: number): void {
    this.observers.forEach((observer) => observer.update(stock, price));
  }

  // Method to simulate stock price changes and notify observers
  simulatePriceChange(stock: string, newPrice: number): void {
    console.log(`\n=====Stock Price Update: [${stock}] - ₹${newPrice}=====`);
    this.notifyObservers(stock, newPrice);
  }
}

// Observer (Subscriber): Investor
class Investor {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Method called by the subject (Stock Market Data Provider) to notify observer about stock price changes
  update(stock: string, price: number): void {
    console.log(`${this.name} received update: ${stock} - ₹${price}`);
  }
}

const stockMarketDataProvider = new StockMarketDataProvider();

// Create investors (observers)
const investor1 = new Investor("John");
const investor2 = new Investor("Alice");

// Register investors (observers) with the stock market data provider (subject)
stockMarketDataProvider.addObserver(investor1);
stockMarketDataProvider.addObserver(investor2);

// Simulate stock price changes and notify observers (investors)
stockMarketDataProvider.simulatePriceChange("APPLE", 150.25);
stockMarketDataProvider.simulatePriceChange("GOOGLE", 2800.75);

// Unregister an observer
stockMarketDataProvider.removeObserver(investor2);

// Simulate another stock price change after removing an observer
stockMarketDataProvider.simulatePriceChange("GOOGLE", 2850.75);
