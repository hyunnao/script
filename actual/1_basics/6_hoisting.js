<<<<<<< HEAD
/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */

console.log('Hello');
console.log('World');

// var name; 이렇게 value없이 변수선언만 한것과 같이 결과값이 나옴
console.log(name);
var name = '코드팩토리';
console.log(name);


console.log(yuJin);
let yuJin = '안유진';

// undefined로 값이 정해져있는데 변수 선언을 하므로써 hoisting이..
=======
/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */

console.log('Hello');
console.log('World');

// var name; 이렇게 value없이 변수선언만 한것과 같이 결과값이 나옴
console.log(name);
var name = '코드팩토리';
console.log(name);


console.log(yuJin);
let yuJin = '안유진';

// undefined로 값이 정해져있는데 변수 선언을 하므로써 hoisting이..
>>>>>>> 89378f9e14654970437ddf80940de82f8d3ba5f2
// let,const 변수 선언을해서 hoisting 발생함