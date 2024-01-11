/**
 * 타입변환
 * Type Conversion
 * 
 * 1) 명시적
 * 1) 암묵적
 */

let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge); // string 32

// 암묵적
let test = age + '';
console.log(typeof test, test); // string 32

console.log('98' + 2); // 982
console.log('98' * 2); // 196, 강제적으로 타입변환됨
console.log('98' - 2); // 96

console.log('---------------');
/**
 * 명시적 변환 몇가지 더 배우기
 */

console.log(typeof (99).toString(), (99).toString()); // string 99
console.log(typeof (true).toString(), (true).toString()); // string true
console.log(typeof (Infinity).toString(), (Infinity).toString()); // string Infinity

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0.99')); // number 0 , 정수변환
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); // number 0.99 , 실수변환
console.log(typeof +'1', +'1'); // number 1

console.log('------------------');
/**
 * Boolean 타입으로의 변환
 */
console.log(!!'asdfasdf');  // true 반환, 어떤값이라도
console.log(!!''); // false 반환, 값이 없을때
console.log(!!0); // false
console.log(!!'0'); // true
console.log(!!false); // false
console.log(!!undefined); // false
console.log(!!null); // false

console.log(!!{}); 
console.log(!![]);
// true, object& array 모두

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false를 반환!!
 */
