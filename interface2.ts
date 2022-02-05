interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다! `)
  }
}

const person = new Person('Kled');

person.hello();

// -------------------------------------------

interface IPerson2 {
  name: string
  age?: number
}

interface IKorean extends IPerson2 {
  city: string
}

const k: IKorean = {
  name: "이웅재",
  city: "서울"
}