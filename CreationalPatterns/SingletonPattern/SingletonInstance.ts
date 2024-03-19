class SingletonInstance {
  private static instance: SingletonInstance;
  private constructor() {}

  public static getInstance(): SingletonInstance {
    if (!this.instance) {
      this.instance = new SingletonInstance();
    }
    return this.instance;
  }
}

const instance1 = SingletonInstance.getInstance();
const instance2 = SingletonInstance.getInstance();
console.log(instance1 === instance2); // =>>> true
