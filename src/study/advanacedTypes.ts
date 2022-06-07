// Literal Types
// const 와 let 의 차이
const age = 30;
let age2 = 30;

type Job = 'police' | 'developer' | 'teacher';

interface User {
  name: string;
  job: Job;
}

const user1: User = {
  name: 'shorry',
  job: 'developer',
};

interface HSStudent {
  name: string | number;
  grade: 1 | 2 | 3;
}

// Union Types

interface Car {
  name: 'car';
  color: string;
  start(): void;
}

interface Mobile {
  name: 'mobile';
  color: string;
  call(): void;
}

const getGift = (gift: Car | Mobile) => {
  console.log(gift.color);
  // 식별가능한 union type
  // 케이스가 늘어나면 switch 를 사용하는게 좋다.
  if (gift.name === 'car') {
    gift.start();
  } else {
    gift.call();
  }
};

// Intersection Types

interface Vehicle {
  name: string;
  start(): void;
}

interface Toy {
  name: string;
  color: string;
  price: number;
}

const toyVehicle: Toy & Vehicle = {
  name: '타요',
  color: 'red',
  price: 1000,
  start() {},
};

export {};
