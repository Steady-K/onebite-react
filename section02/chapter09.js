// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자 () 안에 아무 것도 없을 시 현재 시간 반환
// console.log(date1);

let date2 = new Date(1997, 1, 7, 23, 59, 59);
// console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 '1970.01.01 00시 00분 00초'(협정 세계 시간 = UTC)로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
// console.log(ts1);

let date4 = new Date(ts1);

// console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법

// let year = date1.getFullYear();
// let month = date1.getMonth(); // + 1 해줘야함
// let date = date1.getDate();

// let hour = date1.getHours();
// let minute = date1.getMinutes();
// let second = date1.getSeconds();

// console.log(year, month + 1, date, hour, minute, second);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); //변경하고자 하는 월의 -1 값 넣기 인수로 작동하기 때문 0 : 1월 1 : 2월 ...
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 시, 분, 초 제외한 날짜
console.log(date1.toLocaleString()); // 우리나라 포맷
