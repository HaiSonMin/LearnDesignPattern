interface ITypeA {
  typeA: number;
  typeB: string;
}
interface ITypeB {
  typeC: number;
  typeD: string;
}

interface ITypeC extends ITypeA, ITypeB {
  typeE: number;
  typeF: string;
}

class Abc<T extends Partial<ITypeC>> {
  constructor() {}
  public doSomeThing(work: T) {
    return work;
  }
}

const code = new Abc<ITypeA>();
console.log(code.doSomeThing({ typeA: 132, typeB: '123123' }));

