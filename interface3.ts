// interface로 function 표현하기

interface HelloPerson {
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function(name: string) {
  console.log(`안녕하세요! ${name}입니다.`)
}

helloPerson('Kled', 25)