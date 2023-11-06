/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과
 * 한 개의 Object Type이 있다.
 * 
 * Primitive Type
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (블리언)
 * 4) undefined (언디파인드)
 * 5) Null (널)
 * 6) Symbol (심볼)
 * 
 * Object Type
 * 1) Object (객체)
 *  Function, Array, Object
 */

// Number
const age = 31;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);

// String
const codeFactory = '"코드"팩토리';
console.log(typeof codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);

/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newLine -> \n
 * 2) tab -> \t
 * 3) 백슬레시(\)를 스트링으로 표현하고 싶다면 두번입력하면 된다.
 * 4) `` 사이에 string 작성
 */
const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const iveBackSlash = '아이브\\리즈';
console.log(iveBackSlash);

const iveWonYoung2 = `아이브
장원영`;
console.log(iveWonYoung2);

const groupName = '아이브';
console.log(groupName + ` 안유진`);
console.log(`${groupName} 안유진`);

/**
 * Boolean 타입
 */

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * Undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을때 지정되는 값
 * 값 배정 X
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * Null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서 개발자가 명시적으로 없는 값으로 초기화 할때 사용한다.
 */

let init = null;
console.log(init);
console.log(typeof init); // 결과가 object 타입으로 인식되지만 버그..

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할때 사용
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용
 */

const test1 = '1';
const test2 = '2'; // 해당 값일떄 'false', 값이 1일때 'true'
console.log(test1 === test2);

const symbol1 = Symbol('1'); // symbol 선언법
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2) ;
// 결과값 'false', 값이 유일무이하기 때문!!

/**
 * Object 타입
 * 
 * Map
 * Key:Value 행으로 이루어짐
 */

const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
}
console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);
console.log(typeof dictionary);

/**
 * Array 타입
 * 
 * 값을 리스트로 나열할 수 있는 타입
 */

const iveMemberArray =  [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서'
];
console.log(iveMemberArray);

/**
 * index
 * 
 * 0부터 시작, 1씩 올라감
 */
console.log(iveMemberArray[0]);
console.log(iveMemberArray[5]);

iveMemberArray[0] = '조이';
console.log(iveMemberArray);
console.log(typeof iveMemberArray); // object 타입

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시를 함
 *                  C언어
 * dynamic typing ->변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"함
 * JS -> dynamic typing
 */
