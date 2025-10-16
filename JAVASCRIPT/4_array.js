// Array: In JavaScript, an array is a data structure that allows you to store multiple values in a single variable.
// It is a container that holds an ordered collection of elements, which can be of any data type, such as numbers, strings, objects, or even other arrays.
// []
// indexing will starts from 0
// length -> no of elements - 5 - .length
// let programming_languages = ["C++" , "Java" , "Python" , "JavaScript" , "PHP"]
// console.log(programming_languages[3])
// programming_languages.unshift("C");
// programming_languages.pop("PHP");
// programming_languages.pop();
// programming_languages.shift(); // delete from 0th index
// programming_languages.splice(1, 2); // delete from random index // indexing, no of elements(s)
// add TypeScript after JavaScript
// programming_languages.splice(3, 0, "Typescript"); // indexing,0,"element"
// programming_languages.splice(2, 1, "TypeScript"); // update element // indexing, 1, "updated element"
// console.log(programming_languages) 

// concat() - add/merge/concat two or more array - it'll not update the original array.
// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]
// let arr3 = [11, 12, 13, 14, 15]
// let mergedArray = arr3.concat(arr2, arr1)
// console.log(mergedArray)

// given array
// let arr1 = [1, 2, 3, 4, 5]
// let doubled = [];
// for(let i = 0; i < arr1.length; i++) {
//    doubled.push(arr1[i] * 2)
// }
// console.log(doubled)

// [1, 4, 9, 16, 25]
// let squared = [];
// for(let i = 0; i < arr1.length; i++) {
//     squared.push(arr1[i] * arr1[i])
// }
// console.log(squared)
// 3. Create an array of 5 numbers and print each number
// let arr1 = [1, 2, 3, 4, 5]
// for(let i =0; i< arr1.length;i++) {
//     console.log(arr1[i])
// }
    
// 4. Find the length of an array -
// ["apple","banana","cherry"]
// 5. ["red","green","yellow","blue"] - access first and last(length) index
// 
// let colors = ["red", "green", "yellow", "blue"];
// console.log(colors[2])
// console.log(colors[colors.length - 1]); // colors[4 - 1] = colors[3] 

// element exist or not
// return even numbers

// 1. Given let arr = [10, 20, 30, 40, 50, 60];

// let arr = [10, 20, 30, 40, 50, 60];
// let result = arr.slice(2, 4)
// console.log(result);

// 2. From the same array, Get the last three elements using slice().

// let arr = [10, 20, 30, 40, 50, 60];
// let lastThree =  arr.slice(-3);
// console.log(lastThree)

// 3. Given let fruits = ["apple", "banana", "mango", "orange"];

// let Findruits = ["apple", "banana", "mango", "orange"];
// let newFruits = fruits.slice(1, 3);
// console.log(newFruits);
//
