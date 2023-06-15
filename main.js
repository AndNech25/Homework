//Task-1
console.log('task-1');
let taskOneArraySort = [1, 6, 3, 8, 7, 9, 10];
let typeOne = taskOneArraySort.sort((a, b) => b - a);
console.log(typeOne);
let typeTwo = taskOneArraySort.sort((a, b) => a - b);
console.log(typeTwo);

//task-2
console.log('task-2');
let array2 = [1, 2, [3, 4], [5, [6, 7]]];
console.log(array2.flat(2));
//спосіб 2 за допомогою reduce i concat
function sortArr(array) {
    return array.reduce(function (acc, element) {
        return acc.concat(Array.isArray(element) ? sortArr(element) : element);
    }, []).sort((a, b) => a - b);
}
let sorted = sortArr(array2);
console.log(sorted);

//task-3
console.log('task-3');
let arr3 = [1, 3, 3, 6, 8, 6, 1];
let result3 = arr3.filter((value, element, array) =>
    array.indexOf(value) === element);
console.log(result3);



//task-4
console.log('task-4');
let arrayFour = [1, 6, 8, 6, 1]
console.log(arrayFour);
let initialValue = 0;
let sumWithInitial = arrayFour.reduce(
    (previousValue, currentValue) => previousValue + currentValue + 5,
    initialValue
);
console.log(sumWithInitial);

//task-5
console.log('task-5');
let number = 6;
let factorial = Array(number).fill(0).map((_, element) => element + 1).reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(factorial);

//task-6
console.log('task-6');
function palindrom(string) {
    string = string.replace(" ", "").toLowerCase();
    let chars = string.split("");
    let start = 0;
    let end = chars.length - 1;

    while (start < end) {
        if (chars[start] !== chars[end]) {
            return false
        }
        start++;
        end--;

    }
    return true;
}

console.log(palindrom('racecar'));
console.log(palindrom('Анна'));
console.log(palindrom('cat'));



//task-7
console.log('task-7');
function anagrama(str1, str2) {
    let chars1 = Array.from(str1);
    let chars2 = Array.from(str2);

    chars1.sort();
    chars2.sort();

    if (chars1.join('') === chars2.join('')) {
        return true;
    } else {
        return false;
    };
};

console.log(anagrama('friend' , 'finder'));
console.log(anagrama('sharm' , 'marsh'));
console.log(anagrama('cat' , 'dog'));


//task-8
console.log('task-8');
function checkVowelOrConsonent(array){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    
    let vowelsArr = [];
    let consonantsArr = [];

    array.forEach(function(letter){
        let lowercase= letter.toLowerCase();
        if(vowels.includes(lowercase)){
            vowelsArr.push(letter);
        }else if(consonants.includes(lowercase)){
            consonantsArr.push(letter)
        }
    });
    return [vowelsArr, consonantsArr];
}

let letters = ['a', 'f', 'd', 'j', 'y', 't', 'i', 'r'];
let [vowelsArr, consonantsArr] = checkVowelOrConsonent(letters)


console.log(vowelsArr);
console.log(consonantsArr);

    





    