// 함수선언

// 함수를 호출하게 되면 실행 순서가 포탈을 타듯이 함수 내부로 이동한다.
// 1. 함수선언
// 2. console.log("호출 전")
// 3. greeting 함수 호출
// 4. 함수 내부 console.log("안녕하세요!")
// 5. console.log("호출 후")

// 함수

let area1 = getArea(12, 20); // 12와 20은 인수
console.log(area1);
let area2 = getArea(30, 20);
console.log(area2);
getArea(120, 200);

// 호이스팅
// -> 끌어 올리다 라는 뜻

function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }
  another();

  //width와 height은 매개변수
  let area = width * height;

  return area; // 반환값 = 함수 호출 결과값 -> 새로운 변수에 담을 수 있다.
  console.log(); // return 이후 코드는 실행 x
}
