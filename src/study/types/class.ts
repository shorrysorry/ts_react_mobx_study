class Car {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }
}

// 접근 제한자 - public, private, protected
// public - (default값) 자식, 인스턴스 둘 다 접근 가능
// protected - 자식 가능 , 인스턴스 불가능
// private - (# 을 붙여주어도 가능) 자식, 인스턴스 둘 다 접근 불가능

// static property 클래스명.property 로 접근

// 추상 class
// 클래스 앞에 abstract를 붙이면
// 인스턴스 생성은 불가능하고 무조건 상속받는 역할로만 사용이 가능하다.
// 추상 class안에 있는 abstract method는 반드시 상속받은 쪽에서 구체적인 구현을 해주어야 한다.

abstract class Vehicle {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }

  abstract doSomething(): void;
}

class Bmw extends Vehicle {
  doSomething(): void {
    console.log(3);
  }
}

export {};
