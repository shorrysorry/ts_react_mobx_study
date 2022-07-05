# TS practice repository

## 📌 TS types

[타입으로 바로가기](https://github.com/shorrysorry/ts_study/tree/main/src/study/types)

## 📌TS compiler

- 아무런 셋팅없이 일반적으로 ts에 입력한 값을 테스트 할 때, tsc <파일명> 으로 컴파일을 수동으로 시켜주어야 한다.
- 파일이 1개일 경우에 tsc <파일명> --w(or watch) 를 통해 관찰상태로 만들어서, 변화가 있을때마다 자동으로 컴파일이 되게끔 해줄 수 있다.

<br/>

- 프로젝트에 ts 초기세팅이 되어있지 않은 경우 (tsconfig.json 파일이 없는 경우를 말함) tsc --init 을 통해 프로젝트에 ts 컴파일러 세팅을 해줄 수 있다. (tsconfig.json 이 생성된다.)
- 프로젝트에 컴파일러 세팅을 하고 난 후, tsc --watch를 해주면, 프로젝트 전체의 ts파일의 변화를 감지하고 변화가 있을때마다 컴파일이 가능해진다.

## 📌MobX TEST

- 기존에 인턴십을 통해 적용했던 MobX TS의 자동완성 기능이 제대로 작동하지 않았던 문제를 해결하기 위한 TEST CODE
- 1차적으로 기능 구현 및 자동완성은 가능하나, 조금 더 보완 및 수정이 가능할 것으로 보임.
