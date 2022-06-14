// number , string , boolean , null , undefined
// object , array
// tuple , void , never , enum

// 타입 추론
// 타입을 명시해주지 않아도, 값을 할당하면 타입이 자동적으로 지정된다.
let car = 'bmw';

//object
const shorry = {
  name: 'shorry',
  nation: 'Korea',
  location: 'busan',
  hobbies: ['board games', 'taking a walk'],
};

for (const hobby of shorry.hobbies) {
  console.log(hobby.toUpperCase());
}

// arr
let array = [1, 2, 3];
array.map((el) => el + 1);

// tuple
let tupleArr: [string, number, boolean];
tupleArr = ['a', 1, true];

tupleArr[0].toLocaleUpperCase();

// void , never
// void : return 하지않는 함수
// never : thorw new Error 할때나, 무한루프 함수일 경우

function throwError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    // do something...
  }
}

// enum
// 양방향 래핑이 되어 있다.
// ex ) Os[0] = 'Window' , Os['Window'] = 0
enum Os {
  Window,
  Ios,
  Android,
}

enum Os2 {
  Window = 4,
  Ios,
  Android,
}

// 숫자가 아닐경우에는 단방향 래핑이 된다.

enum Os3 {
  Window = 'win',
  Ios = 'ios',
  Android = 'and',
}

let os: Os3;
os = Os3.Window;

// 특정값만 넣을 수 있게 강제하고 싶으면서 그 값들이 공통점이 있을 경우 주로 사용한다.

// null , undefined
let a: null = null;
let b: undefined = undefined;

export {};
