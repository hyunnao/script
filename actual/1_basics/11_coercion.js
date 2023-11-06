/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */
let age = 31;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

let test = age + '';
console.log(typeof test, test);

console.log('98' + 2);
// 결과 982
console.log('98' * 2);
// 결과 196 , string이지만 스트링에는 곱한다는 개념이 없으므로 숫자로 coercion, 강제 타입변환됨
console.log('98' - 2);
// 결과 96, 위 내용과 같음

console.log('--------------------------');

/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0.99'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1' ,+'1');

console.log('--------------------------');
/** 
 * Boolean 타입으로 변환
 */
console.log(!!'asdfasdfasdf');
// 결과 True
console.log(!!'');
// 결과 False
console.log(!!'');
// 결과 False
console.log(!!0);
// 결과 False
console.log(!!'0');
// 결과 True
console.log(!!'false');
// 결과 True
console.log(!!false);
// 결과 False
console.log(!!undefined);
// 결과 False
console.log(!!null);
// 결과 False

console.log(!!{});
// 결과 True
console.log(!![]);
// 결과 True


/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false를 반환한다.
 */