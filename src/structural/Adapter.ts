// Adaptee: Third-party library with incompatible interface
class LegacyService {
  request(name: string, age: number): string {
    return `Welcome ${name}. Your age ${age} of type [${typeof age}] is confirmed `;
  }
}

// Target interface expected by the client
interface Target {
  request(name: string, age: string): string;
}

// Adapter: Adapts the interface of the LegacyService to match the Target interface
class Adapter implements Target {
  private legacyService: LegacyService;

  constructor(legacyService: LegacyService) {
    this.legacyService = legacyService;
  }

  // Adapts the request method of the LegacyService to match the Target interface
  request(name: string, age: string): string {
    console.log(
      `Received request to adapter:\n Name: ${name} and Age: ${age} of type [${typeof age}]`
    );

    return this.legacyService.request(name, Number(age));
  }
}

// Client code expecting the Target interface
function clientCode(target: Target): void {
  console.log(target.request("Ryan", "25"));
}

// Usage
const legacyService = new LegacyService();
const adapter = new Adapter(legacyService);

// The client interacts with the Adapter, which internally delegates the request to the LegacyService

clientCode(adapter);
