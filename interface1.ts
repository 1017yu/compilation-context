function hello1(person: {name: string; age: number}):void  {
  console.log(`안녕하세요! ${person.name}  입니다.`);
}

const p1: {name: string; age: number } = {
  name: "Mark",
  age: 39
};

hello1(p1)

// ------------------------------------------------------------------

interface Person1 {    // interface: TS의 Compile time에만 사용
  name: string;
  age: number;
}

function hello2(person: Person1):void  {
  console.log(`안녕하세요! ${person.name}  입니다.`); 
}

const p2: Person1 = {
  name: "Mark",
  age: 39
};

hello2(p2)