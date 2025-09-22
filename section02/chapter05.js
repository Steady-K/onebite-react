// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  //   console.log(arr2[i]);
}

// 1.2 for of 반복문 (배열을 순회하기 위한 반복문), 인덱스 저장 x
for (let item of arr) {
  //   console.log(item);
}

// 2. 객체 순회
let person = {
  name: "김재환",
  age: 33,
  hobby: "여행",
};

// 2.1 Object.keys 사용
//  -> 객체에서 key 값들만 뽑아서 새로운 배열로 변환
let keys = Object.keys(person);
// console.log(keys);

for (let key of keys) {
  const value = person[key];
  //   console.log(key, value);
}

// 2.2 Object.values 사용
//  -> 객체에서 value 값들만 뽑아서 새로운 배열로 변환
let values = Object.values(person);

for (let value of values) {
  //   console.log(value);
}

// 2.3 for in (객체를 순회하기 위한 반복문)
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
