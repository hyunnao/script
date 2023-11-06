/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 사용 안함
 * 2) let
 * 3) const
 */

var name = 'code';
console.log(name);

var age = 31;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */

ive ='리즈';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '레드벨벳';

/**
 * const는 값을 변경할 수 없다.
 * 
 * 변수 선언과 할당
 * 
 * 1) 변수를 선언하는 것.
 * 2) 할당 (값을 넣어주는 것)
 */

let girlFriend;
console.log(girlFriend);
// 할당하지 않으면 결과 undefined(정의되지않음)

// const girlFriend2;
// const는 무조건 값이 할당되야하는 상태를 의미하는 변수
