// 함수

// 매개변수 값이 없을때 ( default 값 줄 때)
const hello = (name?: string) => {
  return `Hello, ${name || 'world'}`;
};

const hello2 = (name = 'world') => {
  return `Hello, ${name}`;
};

// 매개변수 2개 이상 & 분기
// optional한 매개변수가 required 매개변수 앞에 올 수 없다
// optional이 앞에 오려면
// age: number | undefined 와 같은 방식으로 해서 undefined를 전달해주면서 순서를 지켜줘야한다.
const hello3 = (name = 'world', age?: number) => {
  if (age) {
    return `Hello, ${name}. You are ${age}`;
  } else {
    return `Hello, ${name}`;
  }
};

// 스프레드 연산자를 이용한 매개변수 전달
// 스프레드 연산자를 사용하면 전달받은 매개변수를 배열로 나타낸다.
const reduceSum = (...nums: number[]) => {
  return nums.reduce((acc, num) => acc + num, 0);
};

reduceSum(1, 2, 3); //6
reduceSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55

// this
// this binding 할 때, 타입 지정 필요 매개변수 순서 중요

// overload
// age에 따른 분기를 로직으로 설정해주었지만, 정확하게 number일때 User객체를 반환한다는 확신이 없다.
// 그래서 overload를 사용한다.

interface User {
  name: string;
  age: number;
}

// arrow function 의 overload 는 어떻게 하는가? 가능한가?
function join(name: string, age: string): string;
function join(name: string, age: number): User;
function join(name: string, age: number | string): User | string {
  if (typeof age === 'number') {
    return {
      name,
      age,
    };
  } else {
    return '나이는 숫자로 입력해주세요.';
  }
}

const sam: User = join('Sam', 30);

export {};
