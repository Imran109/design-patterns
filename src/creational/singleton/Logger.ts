class Logger {
    private static instance: Logger;
    private logs: string[];
  
    private constructor() {
      this.logs = [];
    }
  
    static getInstance(): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    }
  
    log(message: string): void {
      const timestamp = new Date().toISOString();
      this.logs.push(`[${timestamp}] ${message}`);
    }
  
    printLogs(): void {
      this.logs.forEach(log => console.log(log));
    }
  }
  
  // Usage
  const logger1 = Logger.getInstance();
  logger1.log(`First log message`);
  
  const logger2 = Logger.getInstance();
  logger2.log(`Second log message`);
  
  logger1.printLogs();
  