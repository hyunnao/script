/**
 * function ->함수
 */


 /**
 * 만약에 2라는 숫자에 *10 / 2 & 3 스트링으로 변환해서
 * 변환받고싶다면 어떻게 해야할까?
 */

console.log((2 * 10 / 2 & 3).toString()); // 1
console.log((3 * 10 / 2 & 3).toString()); // 0

/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */

function calculate(){
    console.log((2 * 10 / 2 & 3).toString());
}

calculate();  // 1

function calculate(number){
    console.log((number * 10 / 2 & 3).toString());
}

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다.
 * 
 * 실제 입력하는 값은 Argument라고 한다.
 */

calculate(4); // 2
calculate(5); // 1

function multiply(x, y){
    console.log(x * y);
}

multiply(1, 2); // 2

function multiply(x, y = 10){
    console.log(x * y);
}

multiply(2, 4); // 8
multiply(2); // 20

/**
 * 반환하기
 * return 받기
 */

function multiply(x, y){
    return x * y;
}

const result1 = multiply(2, 4);
console.log(result1); // 8

const result2 = multiply(4, 5);
console.log(result2); // 20

/**
 * Arrow 함수
 */
const multiply2 = (x, y)=>{
    return x * y;
}
console.log(multiply2(3, 4)); // 12

const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 5)); // 20

const multiply4 = (x) => x * 2;
console.log(multiply4(2));  // 4

const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7)); // x: 2 y: 5 z: 7

function multiply6(x){
    return function(y){
        return function(z){
            return  `x: ${x} y: ${y} z: ${z}`;
        }
    }
}
console.log(multiply6(3)(4)(5));

const multiplyTwo = (x, y) =>{
    return x * y;
}
console.log(multiplyTwo(4, 5));

const multiplyThree = (x, y, z) =>{
  console.log(arguments); // [Arguments} {'0': 4, '1': 5, '2': 6} 
  return x * y * z;
}
console.log(multiplyThree(4, 5, 6)); // 120


const multiplyAll = function(...arguments){
  return Object.values(arguments).reduce({a, b) => a * b, 1);
}

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10); // 1814400

// immedeiately invoked function (즉시 실행하는 함수)
(function(x, y){
  console.log(x * y);
}(4, 5); // 20

console.log(typeof multiply); // function
console.log(multiply instanceof Object); //  instanceof 좌측값이 우측값과 동일한가 물어봄 , true


