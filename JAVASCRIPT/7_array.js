// Given array:
//let arr = [2, 5 ,8, 9, 10, 20, 30, 35, 40, 45, 50, 60]
//console.log(arr[0])
//12 - 1 [11]
// Print all elements of an array:

//let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let evenNumbers = [];

// Print even numbers to a new array of given array
//for (let i = 0; i < numbers.length; i++) {
//    if (numbers[i] % 2 === 0) {
//        evenNumbers.push(numbers[i]);
//    }
//}

// let arr =[2,5,8,9,10,20,30,35,40,45,50,60]
// let evenNumbers = []
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//        evenNumbers.push(arr[i])} 
// }          
// console.log(evenNumbers)

// let arr = [2, 5, 8, 9, 10, 20, 30, 35, 40, 45, 50, 60];
// let find = 20;
// for  (let i = 0; i<arr.length; i++){
//    if(arr[i] == find){
//        console.log("20 is present in array");
//    }else{
//        console.log("20 is not present in array");  
//    }
// }

// let numbers1 = [10, 20, 30, 40, 50]
// let numbers2 =  [60, 70, 80, 90, 100]
// let numbers3 = [120, 130, 140]
// let merge = numbers2.concat(numbers2, numbers3)

// let programming_language = "JavaScript";
// let strToarr = programming_language.split(' ')
// let strToArr = programming_language.split(' ')
// console.log(strToArr)

//slice(): it'll not update the originals array
// remove elements: 10 20 30 40
// let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]
// let newArr = numbers.slice(3, 7); // starting index, form where to remove index
// console.log(newArr)

// 1. Given let arr = [10, 20, 30, 40, 50, 60];
let numbers = [10, 20, 30, 40, 50, 60]
let newArr = numbers.slice(2,5);
console.log(newArr)