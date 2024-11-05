class SubsystemA {
    operationA(): string {
      return 'Subsystem A: Operation A';
    }
  }
  
  class SubsystemB {
    operationB(): string {
      return 'Subsystem B: Operation B';
    }
  }
  
  class SubsystemC {
    operationC(): string {
      return 'Subsystem C: Operation C';
    }
  }
  
  class Facade {
    private subsystemA: SubsystemA;
    private subsystemB: SubsystemB;
    private subsystemC: SubsystemC;
  
    constructor() {
      this.subsystemA = new SubsystemA();
      this.subsystemB = new SubsystemB();
      this.subsystemC = new SubsystemC();
    }
  
    // Facade method that orchestrates operations from multiple subsystems
    operation(): string {
      let result = '';
      result += this.subsystemA.operationA();
      result += '\n';
      result += this.subsystemB.operationB();
      result += '\n';
      result += this.subsystemC.operationC();
      return result;
    }
  }
  
  
const facade = new Facade();
const finalResult = facade.operation()  
console.log(finalResult);
