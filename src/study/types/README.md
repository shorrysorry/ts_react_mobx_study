# TS Types

## Type Inference (타입추론)

- 명시적으로 값을 할당해준 변수 혹은 상수는 타입을 지정해 줄 필요가 없다.
- 타입을 명시적으로 지정하는것은 좋은 작업 방법이 아니다.

## Core Types

### 1. The primitives

#### a. number

- All numbers, no differentiation between integers or floats (소수나 음수등을 포함한 모든 숫자)
- ex) 1, 5.3, -10

#### b. string

- All text values
- ex) 'HI' , "HI" , &#96;HI&#96;

#### c. boolean

- true, false
- Just these two, no "truthy" or "falsy" values
  (truthy 랑 falsy는 안된다.)

<br/>

### 2. array

- [1, 2, 3]
- Any JavaScript array, type can be flexible or strict ( regarding the element types )

<br/>

### 3. any

#### noImplicitAny

<br/>

### 4. Type Annotations on Variables

<br/>

### 5. Functions

#### Parameter Type Annotations

#### Return Type Annotations

#### Anonymous Functions

<br/>

### 6 . Object Types

- {age : 30}
- Any JavaScript object, more specific types ( types of obejct ) are possible

#### Optional Properties

<br/>

### 7. Union Types

#### Defining a Union Type

#### Working with Union Types

<br/>

### 8. Type Aliases

<br/>

### 9. Interfaces

<br/>

#### Differences Between Type Aliases and Interfaces

### 10. Type Assertions

<br/>

### 11. Literal Types

#### Literal Inference

<br/>

### 12. null and undefined

#### strictNullChecks off

#### strictNullChecks on

<br/>

### 13. Non-null Assertion Operator (Postfix!)

<br/>

### 14. Enums

- enum { NEW, OLD }
- Added by TypeScript : Automatically enumerated global constant identifiers.

<br/>

### 15. Less Common Primitives

<br/>

### 16. Tuple, void, never, unknown ....

- [1, 2]
- Added by TypeScript : Fixed-length array
