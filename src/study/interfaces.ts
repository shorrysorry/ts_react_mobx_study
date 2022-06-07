// 객체의 properties를 정해서 생성하고 싶을때엔 interface를 사용한다.

interface User {
  name: string;
  age: number;
  // optional property
  gender?: string;

  // readonly
  readonly birthYear: number;

  // 문자열 인덱스 서명
  // [xx: number]: string;
  // [grade: number]: string;

  // 문자열 리터럴 타입
  [grade: number]: 'A' | 'B' | 'C' | 'D' | 'F';
}

let user: User = {
  name: 'shorry',
  age: 30,
  birthYear: 1993,
};

user.gender = 'male';

// interface로 함수 만들기
interface Add {
  (num1: number, num2: number): number;
}

const add: Add = (x, y) => {
  return x + y;
};

// interface로 class 정의
// implements

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  color;
  wheels = 4;

  constructor(c: string) {
    this.color = c;
  }

  start() {
    console.log('go!');
  }
}

const b = new Bmw('red');

// extends
interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  door: 4,
  stop() {
    console.log('stop!');
  },
  color: 'red',
  wheels: 4,
  start() {
    console.log('start!');
  },
};

// extends 2개
interface Toy {
  name: string;
}

interface ToyCar extends Car, Toy {
  price: number;
}

export {};
