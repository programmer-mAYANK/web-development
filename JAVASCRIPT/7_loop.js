//programming_language.spices(3, 1, 'typescript')
//console.log(programming_language)

let frontend = ['html', 'css', 'javascript', 'react js']
let backend = ['java', 'node js', 'python']

//merge/join/copy/concat two or more array: concat(), this method will not update the original array,

//let fullstack = database.concat(frontend, backend)
// console.log(fullStack)

// join() - array to string
let arrToStr = frontend.join('');
console.log(arrToStr)

// split() - string to array

//let language = 'javascript';
//let strToArr = language.split(' ')
//let strToArr = language.split('')
//console.log(strToArr)

let programming_language = ['C++', 'Python', "Java", "Javascript", ['React Js', 'Angular JS'],"PHP"];
// insert, update, delete in nested array
// programming_language[4].splice(1, 0, 'Vue Js')
// programming_language[4].splice(1, 1, 'Vue Js')
// programming_language[4].pop()
programming_language[4].shift()
// console.log(programming_language[4])
console.log(programming_language)

// Given array: [10,23,6,25,12,80,8,37,40,65]
// output will be: [10,6,12,80,8,40]
let arr = [10,23,6,25,12,80,8,37,40,65]
let evenNum = []

for(let i = 0; i< arr.length; i++){
    if(arr[i] % 2 == 0) {
        evenNum.push(arr[i])
    }
}
console.log(evenNum)

// how to access last element of an array using length keyword

//let arr= [1,2,3,4,5] 
//let lenElm = arr[arr.length - 1]
// arr[5-1] = arr[4]
// console.log('last element without length:' +arr[4])
// console.log('last element using length:' +lastElm)

// [1,2,3,4,5] - sum of array elements
// [10,20,30,40,50,60] - find 30 from array
// reverse an array using loop
// find average of array elements

let arr = [10, 23, 6, 25, 12, 80, 8, 37, 40, 65];
let evenNum = [];

for (let i = 0; i < arr.length; i++)
{
    if (arr[i] % 2 === 0){
        evenNum.push(arr[i]);
    }
}

console.log(evenNum);