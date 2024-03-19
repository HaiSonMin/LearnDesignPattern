abstract class People {
  abstract name: string;
  abstract age: number;
  abstract getSomeThing(abc: string): void;
  protected commonCode = 1000;

  constructor(private secretKey: number) {}

  public getSecretKey(): number {
    return this.secretKey;
  }

  public getSomeInfo(): void {
    console.log('name::', this.name);
    console.log('age::', this.age);
  }

  public getCommonCode(): void {
    console.log('commonCode::', this.commonCode);
  }
}

class VanA extends People {
  name: string;
  age: number;
  getSomeThing(abc: string): void {
    console.log('this.commonCode::', this.commonCode);
  }
  constructor(secretKey: number, name: string, age: number) {
    super(secretKey);
    this.name = name;
    this.age = age;
  }
}

const a = new VanA(12312123, 'Nguyen van A', 12);
