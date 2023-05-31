//Task
console.log('Task-1');
let number1 = 5, number2 = 6;
console.log(number1>number2);
console.log(number1<number2);
console.log(number1>=number2);
console.log(number1<=number2);
//Task
console.log('Task-2');
console.log(number1 == number2);
console.log(number1 === number2);
console.log(number1 != number2);
console.log(number1 !== number2);

//Task
console.log('Task-3');
console.log(0 == false);
console.log(0 === false);
console.log(1 == '1');
console.log(1 === '1');
console.log(null == undefined);
console.log(null === undefined);
console.log('0' == false);
console.log('0' === false);
console.log([] == []);
console.log([] === []);
console.log({} == {});
console.log({} === {});



//Task

console.log('Task-6');
let name = String(prompt('Введіть ваше ім`я'));
let age = +prompt('Введіть свій вік');
if (age < 18){
    console.log(name+' is under 18 year old');
}else if (age >= 18 && age <=22){
    console.log(name+ ' is between the ages 18 and 22');
}else {
    console.log(name+' your age is over 22 years old' );
}

//Task-7
let number = +prompt('Enter a number from 0 to 3');
switch(number) {
    case 0:
       alert ('you entered the number 0');
       break;
    case 1:
       alert ('you entered the number 1');
       break;
    case 2 :
    case 3 :
       alert ('you entered the number 2 or maybe the number 3');
       break;
    default:
        alert(number);
}


//Task-8
console.log('Task-8');
let years = +prompt('Введіть свій вік)');
let res = ( years >= 18 ) ? 'Can vote' : 'Cannot vote';
console.log(res);


// Task-9
console.log('Task-9');
let oneNumb = +prompt('Введіть число') 
let twoNumb = +prompt('Введіть число') 
if (oneNumb<=0 || isNaN(oneNumb)&& twoNumb <= 0 || isNaN(twoNumb)){
    console.log(oneNumb + '-помилка') ;
    console.log(twoNumb + '-помилка') ;
}else {
let sum = (oneNumb+twoNumb);
console.log('Сума двох чисел: '+sum);
if(sum>5 && sum <10 ){
    console.log('Ваше число є більше 5 але менше 10. Ваше число: '+sum);
}
if(sum>10 && sum <15 ){
    console.log('Ваше число є більше 10 але менше 15. Ваше число: '+sum);
}
if(sum>15 && sum <30 ){
    console.log('Ваше число є більше 15 але менше 30. Ваше число: '+sum);
}
if(sum>30 ){
    console.log('Ваше число є більше 30. Ваше число: '+sum);
}
}





