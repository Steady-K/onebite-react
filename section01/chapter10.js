// 초기식 : 카운터 변수
// 조건식 : 언제까지 반복할 것인지
// 증감식 : 카운터 변수를 증가시키는 식

for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue;
  }
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}
