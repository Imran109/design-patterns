class LocationService {
  private availableCities: Set<number>;
  constructor() {
    this.availableCities = new Set([411014, 411001, 600001]);
  }

  checkLocationAvailability(pincode: number) {
    if (this.availableCities.has(pincode)) return true;

    console.log(`Product not available at your pincode: ${pincode}`);
    return false;
  }
}

// Subsystem: Phone Inventory
class PhoneInventory {
  private inventory: Map<string, number>;

  constructor() {
    // Initialize inventory with available phone models and quantities
    this.inventory = new Map([
      ["iPhone 12", 1],
      ["Samsung Galaxy S21", 2],
      ["Google Pixel 5", 1],
    ]);
  }

  // Method to check if a phone model is available in inventory
  checkAvailability(model: string): boolean {
    return this.inventory.has(model) && this.inventory.get(model)! > 0;
  }

  // Method to reduce inventory count after a phone is purchased
  purchasePhone(model: string): void {
    this.inventory.set(model, this.inventory.get(model)! - 1);
  }
}

// Facade: Phone Store
class PhoneStore {
  private phoneInventory: PhoneInventory;
  private locationService: LocationService;

  constructor() {
    this.phoneInventory = new PhoneInventory();
    this.locationService = new LocationService();
  }

  // Facade method to purchase a phone
  purchasePhone(model: string, pincode: number): void {
    if (this.phoneInventory.checkAvailability(model)) {
      if (this.locationService.checkLocationAvailability(pincode)) {
        this.phoneInventory.purchasePhone(model);
        console.log(`Purchased ${model}`);
      }
    } else {
      console.log(`${model} is out of stock`);
    }
  }
}

// Client code
const phoneStore = new PhoneStore();

// Simulate purchase process
phoneStore.purchasePhone("iPhone 12", 411001);
phoneStore.purchasePhone("Google Pixel 5", 600002);
phoneStore.purchasePhone("iPhone 12", 411001);
