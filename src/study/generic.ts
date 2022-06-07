// Generic

function getSize<T>(arr: T[]) {
  return arr.length;
}

const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const arr3 = [false, true, false];

getSize(arr1);
getSize(arr2);
getSize(arr3);

// other Example

interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile<object> = {
  // Moblie<{ color: string; coupon: boolean }> 도 가능
  name: 's21',
  price: 1000,
  option: {
    color: 'red',
    coupon: false,
  },
};

const m2: Mobile<string> = {
  name: 's21',
  price: 1000,
  option: 'good',
};

// more

interface User {
  name: string;
  age: number;
}

interface Car {
  name: string;
  color: string;
}

interface Book {
  price: number;
}

const user: User = { name: 'a', age: 10 };
const car: Car = { name: 'bmw', color: 'red' };
const book: Book = { price: 1000 };

function showName<T extends { name: string }>(data: T): string {
  return data.name;
}

showName(user);
showName(car);

export {};
