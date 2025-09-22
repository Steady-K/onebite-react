// 1. 상수 객체 상수 자체를 변경은 안되지만, 객체 안의 프로퍼티는 얼마든지 추가, 수정, 삭제 할 수 있다
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "김재환", // 정보
  // 메서드 선언  , 동작을 정의
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
