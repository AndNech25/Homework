console.log('Task-1');
const firstObject = new Object();

firstObject.name ='Andriy';
firstObject.age = 23;
firstObject.gender = 'male';
console.log(firstObject);

const newObject = {
    name: 'Oleh',
    age: 19,
    gender: 'male'
}
console.log(newObject);

//Task-2
console.log('Task-2');

const newUserData = {
    name: 'Oleh',
    age: 25,
    "new proffesion": 'programmer',
}

console.log(newUserData.name);
console.log(newUserData.age);
console.log(newUserData["new proffesion"]);

//Task-3
console.log('Task-3');
let object = {
    name: 'Oleh',
    age: 25,
    hobby: 'reading books'
};
for(let keys in object){
    console.log(keys,':',object[keys]);
};

//Task-4
console.log('Task-4');
const infoAboutYou = {
    hobby:'learn something new',
}
infoAboutYou.name = 'Andriy';
infoAboutYou.age = 23;
infoAboutYou,profession = 'stedent';
infoAboutYou.hobby = 'swiming';
infoAboutYou.newInfo = ' ';

console.log(infoAboutYou);
delete infoAboutYou.newInfo;
console.log(infoAboutYou);

//Task-5
console.log('Task-5');
const userData = {
    name: 'Oleh',
    age: 25,
}

let copyUserData = { ...userData }
copyUserData.age = 20;
console.log(userData);
console.log(copyUserData);

//Task-6
console.log('Task-6');
function objectToArray(obj5){
    let arr = [];
    for (let key in obj5){
        if (obj5.hasOwnProperty(key)){
            arr.push([key, obj5[key]]);
        }
    }
return arr;
}
let obj5 = { a : 1, b : 2 };
let arr = objectToArray(obj5);
console.log(arr);
obj5 = {shrimp: 15 , tots: 12}
let arr2 = objectToArray(obj5);
console.log(arr2);

//Task-7
console.log('Task-7');

let array7 = ['orange', 'pineapple', 'orange', 'apple', 'pineapple', 'pineapple']
let object7 = {};

for(let i=0; i<array7.length; i++){
    let element = array7[i];
    if (object7[element] === undefined){
        object7[element]=1;
    }else{
        object7[element]++;
    }
}

let sorted = Object.keys(object7).sort((a,b) => object7[b] - object7[a]);
console.log(sorted);
