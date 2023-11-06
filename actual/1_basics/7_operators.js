/**
 * Operator(연사자)
 * 
 * 산술연산자
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log('-------------------');

console.log(10 * (10+10));

/**
 * 증가와 감소
 */

let number = 1;

number ++;
console.log(number);

number --;
console.log(number);

console.log('-------------------');

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number ++;
console.log(result, number);

result = number --;
console.log(result, number);

result = ++ number;
console.log(result, number);

result = -- number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */
let sample = '99';

console.log(+sample);
console.log(typeof +sample);
// + 붙혔을때 number 타입으로 변경, 계산하는 줄에서만 값 변경

console.log(sample);
console.log(typeof sample);

sample = true; // 1
console.log(+sample);
console.log(typeof +sample);

sample = false; // 0
console.log(+sample);
console.log(typeof +sample);

sample = '안유진';
// NaN -> Not a Number
console.log(+sample);

sample = '99';
console.log(-sample);
console.log(typeof -sample);

console.log('-------------------');

/** 
 * 할당 연산자(assignment operator)
 */

number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

console.log('-------------------');

/**
 * 비교 연산자
 * 
 * 1) 값의 비교 -> 같은 값이면 true를 출력
 * 2) 값과 타입의 비교 -> 타입까지 같아야 true 출력
 * 
 * 실제로 ===, !== 만 사용하도록!!
 */

// 같음
console.log(5 == 5);
console.log(5 == '5'); // '5'를 number 타입으로 변경
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');
console.log('--------');

// === 타입까지 같이비교
console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');
console.log('--------');


// != 다름
console.log(5 != 5);
console.log('--------');

// != 다름의 타입까지 비교
console.log(5 !== 5);
console.log('--------');

console.log('-------------------');

/**
 * 대소 관계 비교 연산자
 */

console.log(100 > 1); // T
console.log(100 < 1); // F
console.log(100 <= 1); // F
console.log(100 >= 1); // T

console.log('-------------------');

/**
 * 삼항 조건 연산자 (ternary operator)
 */

console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');
// true 반환시 앞의 결과값

console.log('-------------------');

/**
 * 논리 연산자
 * 
 * 1) && (and) 모두 true여야 true 반환 
 * 2) || (or) 하나만 true여도 true 반환
 */

// &&
console.log(true && true); // T
console.log(true && false); // F
console.log(false && true); // F
console.log(false && false); // F
console.log(10 > 1 && 20 > 2);

// ||
console.log(true || true); // T
console.log(true || false); // T
console.log(false || true); // T
console.log(false || false); // F
console.log('-------------------');

/**
 * 단축평가 (short circuit evaluation) ***************중요!!
 * 
 * &&를 사용했을때 좌측이 True면 우측 값 반환
 * &&를 사용했을때 좌측이 False면 좌측 값 반환
 * ||를 사용했을때 좌측이 True면 좌측 값 반환
 * ||를 사용했을때 좌측이 False면 우측 값 반환
 */

console.log(true && '아이브'); // 아이브
console.log(false && '아이브'); // F
console.log(true || '아이브'); // T
console.log(false || '아이브'); // 아이브

console.log(true && true && '아이브'); // 아이브
console.log(true && false && '아이브'); // F

console.log('-------------------');
/**
 * 지수 연사자
 */

console.log(2 ** 2);
console.log(10 ** 3);

console.log('-------------------');
/**
 * null 연사자
 */

let name;
console.log(name);

name = name ?? '코드팩토리'; // name이 undefined 였기 때문에 코드팩토리 할당&출력
console.log(name);

name = name ?? '아이브'; // 이미 코드팩토리 값이 할당 되어있기때문에 아이브를 name에 재저장안함
console.log(name);

let name2;
name2 ??= '코드팩토리'; // name = name ?? '코드팩토리'; 와 같음
console.log(name2);
