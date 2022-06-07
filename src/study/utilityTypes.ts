// keyof

interface User {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'
const uk: UserKey = 'age';

// Partial<T> -> 모든 값들을 optional 로 바꾼다.
// Required<T> -> 모든 값들을 required 로 바꾼다.
// Readonly<T> -> 모든 값들을 readonly 로 바꾼다.

// Record<K, T>

function isMaleValid(user: User) {
  const result: Record<keyof User, boolean> = {
    id: user.id > 0,
    name: user.name !== '',
    age: user.age > 0,
    gender: user.gender === 'm',
  };
  return result;
}

type Grade = '1' | '2' | '3' | '4';
type Score = 'A' | 'B' | 'C' | 'D' | 'F';

const scores: Record<Grade, Score> = {
  '1': 'A',
  '2': 'F',
  '3': 'B',
  '4': 'B',
};

// Pick<T, K>
const admin: Pick<User, 'id' | 'name'> = {
  id: 0,
  name: 'shorry',
};

// Omit<T, K>
const admin2: Omit<User, 'age' | 'gender'> = {
  id: 1,
  name: 'shorry2',
};

// Exclude<T1, T2>
// Omit 과의 차이점은
// Omit은 property를 제외시키는 것이고,
// Exclude는 type을 제외시키는 것이다.

type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>;

// NonNullable<T>

type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>;

export {};
