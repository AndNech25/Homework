//Task-1
let arr = [1, 2, 3, 4, 5];
console.log('Task-1');
console.log([arr[0], arr[1], arr[2], arr[3], arr[4]] + '=>' + [arr[4], arr[3], arr[2], arr[1], arr[0]]);

//Task-2
console.log('Task-2');
let arr2 = [0, 1, false, 2, undefined, ' ', 3, null];
let newArr2 = [];

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== 0 && arr2[i] !== false && arr2[i] !== undefined && arr2[i] !== ' ' && arr2[i] !== null) {
        newArr2.push(arr2[i]);
    }
}
console.log(newArr2);

//Task-3
console.log('Task-3');
let arr3 = [1, 6, 22, 31, 11, 59, 44, 2, 8, 9];
let mas1 = [];
let mas2 = [];
for (let i = 0 ; i < arr3.length; i++){
if(arr3[i] === 6 || arr3[i] === 22  || arr3[i] === 44 || arr3[i] === 2 || arr3[i] === 8){
    mas1.push(arr3[i]);
}else{
    mas2.push(arr3[i])
}
}
console.log(mas1);
console.log(mas2);

//Task-4
console.log('Task_4');
let arr4 = [1 , 'string', null, false, undefined, {age:18}, Symbol("foo"), 554324n];
let numberArr =[];
let stringArr =[];
let nullArr =[];
let booleanArr =[];
let undefinedArr =[];
let objectArr =[];
let symbolArr =[];
let bigintArr =[];
for(let i = 0 ; i< arr4.length; i++ ){
    if(typeof arr4[i] === 'number'){
        numberArr.push(arr4[i]);
    }else if (typeof arr4[i] === 'string'){
       stringArr.push(arr4[i]);
    }else if (typeof arr4[i] === null){
        nullArr.push(arr4[i]);
    }else if (typeof arr4[i] === 'boolean'){
        booleanArr.push(arr4[i]);
    }else if (typeof arr4[i] === 'undefined'){
        undefinedArr.push(arr4[i]);
    }else if (typeof arr4[i] === 'object'){
        objectArr.push(arr4[i]);
    }else if (typeof arr4[i] === 'symbol'){
        symbolArr.push(arr4[i]);
    }else if (typeof arr4[i] === 'bigint'){
        bigintArr.push(arr4[i]);
    };
};
console.log(numberArr);
console.log(stringArr);
console.log(nullArr);
console.log(booleanArr);
console.log(undefinedArr);
console.log(objectArr);
console.log(symbolArr);
console.log(bigintArr);

//Task-5
console.log('Task-5');
let arr5 = [3, 8, 7, 6, 5, -4, 1, -3, 2]
for (let i=0 ; i<arr5.length - 1; i++){
    for(let h=0 ; h <arr5.length - 1 - i ; h++){
        if(arr5[h]>arr5[h+1]){
            let res = arr5[h];
            arr5[h] = arr5[h +1];
            arr5[h+1]=res
        }
    }
}
console.log(arr5);

//Task-6
console.log('Task-6');
let array1 = [1, 2, 3];
let array2 = [100, 2, 1, 10];
let newArray = array1.concat(array2);
let pickedArray = [...new Set(newArray)];
pickedArray.sort((a, b) =>a - b);

console.log(pickedArray);

//Task-7
console.log('Task-7');
let arr7 = [3, 'a','a','a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let stringArray = [];
for(let i=0; i<arr7.length; i++){
    if(typeof arr7[i]==='string'){
        stringArray.push(arr7[i])
    }
}
console.log(stringArray);


