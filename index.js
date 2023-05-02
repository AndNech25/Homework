//Task-1
//8 типів даних

//string
let myString = 'agagagagag';
console.log(typeof myString);
//number
let myNumber = 123;
console.log(typeof myNumber);
//Boolean
let myBoolean = false;
console.log(typeof myBoolean);
//Null
let myNull = null;
console.log(typeof myNull);
//undefined
let myUndefined , myUndefined1 = undefined;
console.log(typeof myUndefined);
console.log(typeof myUndefined1);
//BigInt
let myBigInt = 546n;
console.log(typeof myBigInt);
//Symbol
let mySymbol = Symbol('Symbol');
console.log(typeof mySymbol);
//object
let myObject = {name: 'Andriy'} ;
console.log(typeof myObject);

//Task-2
console.log(typeof null);//при такому записі в консолі відобразиться object
let Null =null;
console.log(Null); 
//Task-3
console.log(typeof undefined);//при такому записі в консолі відобразиться undefined
//Також значення undefined ми отримаємо якщо запишемо порожню змінну
let emptyVariable ;
console.log(emptyVariable);
//Task-4
console.log(typeof NaN);//при такому записі в консолі ми отримаємо number
//Значення NaN ми отримаємо при такому записі
let a=123, b='sto', result;
result= a*b;
console.log(result);
console.log(isNaN(result));

//Task-5
function check(result) {
    if (isNaN(result)) {
      console.log("Результат - NaN");
    } else {
      console.log("Результат - число");
    }
  }
let firstNumber = +prompt('Введіть перше число');
let secondNumber = +prompt('Введіть друге число');
let thirdNumber = +prompt('Введіть третє число');

let resultTask5 = firstNumber+secondNumber+thirdNumber;
console.log(resultTask5);
check(resultTask5);

  
  