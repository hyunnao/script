/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

for(let i = 0; i < 10; i++){
  console.log(i);
}

console.log('--------------------');
for(let i = 10; i > 0; i--){
  console.log(i);
}

console.log('--------------------');
for(let i = 0; i < 3; i++){
  for(let j =3; j > 0; j--){
    console.log(i, j);
  }
}

console.log('--------------------');

// *을 이용해서 6X6의 정사각형을 출력해라
let square = '';
let side = 6;

for(let i = 0; i < side; i++){
  for(let j = 0; j < side; j++){
    square += '*'; 
  }
  square += '\n';
}

console.log(square);


/**
 * for...in
 */
const yuJin = {
  name: '안유진',
  year: 2003,
  group: '아이브',
}

console.log('--------------------');
for(let key in yuJin){
  console.log(key);
}

const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

for(let key in iveMembersArray){
  console.log(key);
  console.log(`${key}:${iveMembersArray[key]}`);
}

// object에서 for..in을 사용하면 key값을 가져올수 있음
// array 에서 for..in을 사용하면 index값을 가져올수 있음

/**
 * for...of
 */
for(let value of iveMembersArray){
  console.log(value);  
}

/**
 * While - 계속 실행되다가 조건이 끝날때 완료됨
 */
let number = 0;

while(number < 10){
  number ++;
}

console.log(number);

/**
 * do...while - while문을 거꾸로 쓴것, 잘 사용하지 않음
 */number = 0;
 
do {
    number++;
 } while (number <10);

console.log(number);
console.log('-----------------');

/**
 * break
 */ 
for (let i = 0; i < 10; i++){
    if ( i === 5){
      break;
    }
    console.log(i);
}

console.log('-----------------');

number = 0;
while(number < 10){
    if(number ===5){
        break;
    }
    number ++;
    console.log(number);
}

/**
 * continue
 */
console.log('-----------------');
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

number = 0;

while(number < 10){
  number ++;
  if(number === 5){
      continue;
  }
  console.log(number);
}
