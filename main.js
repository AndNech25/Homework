//task-1
function maketOrderMessage(orderQuantiti, pricePerDroid, deliveryFree) {
    let totalPrice = orderQuantiti * pricePerDroid + deliveryFree;
    let message = 'You ordered droids worth ' + totalPrice + ' credits. Deliveri (' + deliveryFree + ' credits) is included in total price.'
    return message;
}

let quantiti = 5;
let price = 150;
let delivery = 30;

let orderMessage = maketOrderMessage(quantiti, price, delivery);
console.log(orderMessage);

//task-2
console.log('task-2');
function isAdult(age) {
    let passed = (age >= 18) ? 'Access is allowed' : 'access is denied';

    return passed;
}
let ageUser = prompt('please enter your age');
let appropriation = isAdult(ageUser)
console.log(appropriation);

//task-4
console.log('task-4');
function checkingUserForAge(age) {
    let message = age;

    if (age >= 18) {
        message = 'You are an adult';
    } else {
        message = 'You are a minor'
    };



    return message;
}

let userAge = prompt('please enter your age');
let appropriationAge = checkingUserForAge(userAge);
console.log(appropriationAge);

//task-5
console.log('task-5');
function sortingTheArrayByType(arr4) {
    let stringArr = [];
    let numberArr = [];
    let nullArr = [];
    let booleanArr = [];
    let undefinedArr = [];
    let objectArr = [];
    let symbolArr = [];
    let bigintArr = [];

    for (let i = 0; i < arr4.length; i++) {
        if (typeof arr4[i] === 'number') {
            numberArr.push(arr4[i]);
        } else if (typeof arr4[i] === 'string') {
            stringArr.push(arr4[i]);
        } else if (arr4[i] === null) {
            nullArr.push(arr4[i]);
        } else if (typeof arr4[i] === 'boolean') {
            booleanArr.push(arr4[i]);
        } else if (typeof arr4[i] === 'undefined') {
            undefinedArr.push(arr4[i]);
        } else if (typeof arr4[i] === 'object') {
            objectArr.push(arr4[i]);
        } else if (typeof arr4[i] === 'symbol') {
            symbolArr.push(arr4[i]);
        } else if (typeof arr4[i] === 'bigint') {
            bigintArr.push(arr4[i]);
        }
    }

    return {
        stringArr,
        numberArr,
        nullArr,
        booleanArr,
        undefinedArr,
        objectArr,
        symbolArr,
        bigintArr
    };
}

let arr5 = [1, 'string', null, false, undefined, { age: 18 }, Symbol("foo"), 554324n];
let result = sortingTheArrayByType(arr5);

console.log("Масив рядків:", result.stringArr);
console.log("Масив чисел:", result.numberArr);
console.log("Масив значень null:", result.nullArr);
console.log("Масив булевих значень:", result.booleanArr);
console.log("Масив значень undefined:", result.undefinedArr);
console.log("Масив обєктів:", result.objectArr);
console.log("Масив символів:", result.symbolArr);
console.log("Масив значень bigint:", result.bigintArr);

//task-6
console.log('task-6');
function checkingNumber(yourNunber) {
    let numberString = yourNunber.toString();
    let arrEvenNumber = [];
    let arrOddNumber = [];

    for (let i = 0; i < numberString.length; i++) {
        let figure = parseInt(numberString[i]);
        if (figure % 2 === 0) {
            arrEvenNumber.push(figure);
        } else {
            arrOddNumber.push(figure);
        };
    };
    return {
        arrEvenNumber,
        arrOddNumber
    };

}
let numberUser = prompt('Enter number');
let functionAppropriation = checkingNumber(numberUser);
console.log(functionAppropriation);

//task-7
console.log('task-7');
let playGame = true;

while (playGame) {
    let numberRandom = +prompt('Введіть ціле число')
    if (isNaN(numberRandom) || numberRandom <= 0) {
        alert('Введіть правильне число.');
    } else {
        console.log(typeof numberRandom);
        let numberRandom2 = parseInt(prompt(`Супер. Введіть друге ціле число, яке може бути більшим від вашого (${numberRandom}) попереднього числа до 10 одиниць.`));
        if (isNaN(numberRandom2) || numberRandom2 <= numberRandom || numberRandom2 > numberRandom + 10) {
            alert('Введіть правильне число.');
        } else {
            let randomNumber = Math.floor(Math.random() * (numberRandom2 - numberRandom + 1)) + numberRandom;
            let attempts = 5;
            while (attempts > 0) {
                let userInput = parseInt(prompt(`Вгадайте число в діапазоні від ${numberRandom} до ${numberRandom2}. Залишилось спроб: ${attempts}`));

                if (isNaN(userInput)) {
                    alert('Введіть правильне число.');
                } else if (userInput === randomNumber) {
                    alert('Ви вгадали число! Ви виграли!');
                    playGame = confirm('Хочете зіграти знову?');
                    break;
                } else {
                    attempts--;

                    if (attempts === 0) {
                        alert(`Ви програли! Загадане число було: ${randomNumber}`);
                        playGame = confirm('Хочете зіграти знову?');
                    } else {
                        alert(`Невірно. Залишилось спроб: ${attempts}`);
                    }

                }
            }
        }
    }
}