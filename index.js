//task-1
let lapky = `text 
in 
any 
line`;
console.log(lapky);

let lapky2 = 'text';
console.log(lapky2);
// результат в подвійних та одинарних  лапках є ідентичним
let lapky3= "text";
console.log(lapky3);

//task-2
let firstNumber ='1';
let secondNumber = 1;
let result = firstNumber +secondNumber;
console.log(result);

let firstPartOfQuestion = 'How ';
let secondPartOfQuestion = 'are you?';
let result2 = firstPartOfQuestion + secondPartOfQuestion;
console.log(result2);

let myHobbies = 'reading books, speaking with friends, playing volleyball';
let result3 =`my hobbies are ${myHobbies}`;
console.log(result3);

let myName = "Andrii"
alert ('Hello my name is ' + myName)

//task-3

let infoName = prompt('What`s your name?');
let infoAge = prompt("How old are you?");
let infoHobbies = prompt('What are you like doing?');
let infoTravel = prompt('Did you travel a lot before the war?');
let infoFuture = prompt ('What are you going to do at first when war ends');
let result4 = "My name is "+infoName +",I`am "+ infoAge + " years, my favorite hobby is " + infoHobbies + " ,"+ infoTravel + " , after the end of the war, I " + infoFuture;
console.log(result4);

//task-4
let nameData = 'Andriy'
console.log(nameData.length)
console.log(nameData.toUpperCase())
console.log(nameData.toLowerCase())

//task-5
let numberType = 45;
console.log(numberType);

let stringType = numberType.toString();
console.log(stringType);

//Task-6
let maxNumber = Math.pow(10,1000);
console.log(Infinity);
console.log(1/maxNumber);

//Task-7
let g = prompt('Введіть тип string');
console.log(g);
g = Number(g);
console.log(typeof g);

let p = 25;
console.log( String(p));
console.log(typeof String(p));

//Task-8.1
let number = 22/21;
let numberCeil = Math.ceil(number)
console.log(numberCeil);
let powCeil = Math.pow(numberCeil,2);
console.log(powCeil);

let numberFloor = Math.floor(number)
console.log(numberFloor);
let powFloor = Math.pow(numberFloor,2);
console.log(powFloor);
//8.2
let random = Math.floor(Math.random() * 100) + 1;
console.log(random); // виводимо випадкове число в консоль
