interface IPeople {
  sayTheWord(): void;
}

class VietNamPeople implements IPeople {
  sayTheWord(): void {
    console.log('Hello im from VietNam');
  }
}

class KoreanPeople implements IPeople {
  sayTheWord(): void {
    console.log('Hello im from Korean');
  }
}

class ChinaPeople implements IPeople {
  sayTheWord(): void {
    console.log('Hello im from China');
  }
}

interface Factory {
  createPeopleForSayTheWord(): IPeople;
}

class NguyenVanA implements Factory {
  createPeopleForSayTheWord(): IPeople {
    return new VietNamPeople();
  }
}

class KimJongUn implements Factory {
  createPeopleForSayTheWord(): IPeople {
    return new KoreanPeople();
  }
}

class ChauTinhTri implements Factory {
  createPeopleForSayTheWord(): IPeople {
    return new KoreanPeople();
  }
}

function somePeopleDoSomeThing(factory: Factory) {
  const people = factory.createPeopleForSayTheWord();
  people.sayTheWord();
}

somePeopleDoSomeThing(new NguyenVanA());
somePeopleDoSomeThing(new KimJongUn());
somePeopleDoSomeThing(new ChauTinhTri());
