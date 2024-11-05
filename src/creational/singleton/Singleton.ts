class Singleton {
    private static instance: Singleton;
  
    private constructor() {}
  
    static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  }
  
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();
  
  console.log(instance1 === instance2);
  