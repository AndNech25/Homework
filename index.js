// Task-1
let myName = 'Andriy';
console.log(myName);

var number = 25;
console.log(number);

const city ='Lviv';
console.log(city);

//Task-2
//string
let variable1 ='Hello World';
console.log(typeof variable1);
console.log(variable1);

//number
let number2=25
console.log(typeof number2);
console.log(number2);
//Boolean
let boolean=true;
console.log(typeof boolean);
console.log(boolean);

// запис в змінну null
let variant1 =null;
console.log(typeof variant1);
console.log(variant1);

//число поділине на 0
let s = 125;
let c = 0;
let result= s/c;
console.log(typeof result);
console.log(result);

//масив
let variant3= [1, 2, 3];
console.log(typeof variant3);
console.log(variant3);
 
//функція

function dodaty(a, b) {
    return a + b;
  }
  var funk = dodaty;
  console.log(typeof funk(7, 9));
  console.log(funk(7, 9));

  //порожня змінна
  let emptyVariable;
  console.log(typeof emptyVariable);

  //строкове значення ділимо на числове

  let x='21';
  let y= 3;
  let xy = x/y;
  console.log(typeof xy);
  console.log(xy);

  let numberX='text';
  let numberY=9;
  let resultNumber=numberX/numberY;
  console.log(typeof resultNumber);
  console.log(resultNumber);

  //Task-3
  const typeString = "49";
  const typeNumber = Number(typeString);

console.log(typeof typeNumber);

//Task-4
let priceOfArticle = 40;
priceOfArticle=70;
let nameOfArticle = 'eggs';
let monthOfPurchase = 'july'
monthOfPurchase='September';
console.log(nameOfArticle);
console.log(priceOfArticle);
console.log(monthOfPurchase);

//Task-5
//let priceOfArticle =70; використав з завдання 4
  const amountOfArticle=3;
  const totalPrice = priceOfArticle*amountOfArticle;
  console.log(totalPrice);


//Task-6
var price = '70';
var amount = '6';
var total = price*amount;
var message=`Я купив ${amount} лотків за ціною ${total} гривень. Ціна одного лотка становить ${price} гривень.`;
alert (message);

