let programming_language = ["C++" , "JavaScript" , "Python" , "Java" , "PHP"];
//console.log(programming_language)
//console.log(programming_language [0])
//console.log(programming_Language [3])
//programming_language.push("C"); // insert in last index
//programming_language.unshift("Ruby"); // insert in 0th index
//programming_language.pop(); // delete element from last index
//programming_Language.pop();
//programming_language.shift(); // remove from 0th index
//programming_language.splice(2, 1); // (indexing, ow many element(s)) // element remove from random index
//programming_language.splice(1, 2);

programming_language.splice(2,0, "Typescript"); // insert in any index (indxing,0,"new_element")
programming_language.splice(2, 0, "TypeScript"); // element update (indexing,1,"updated_element")
console.log(programming_language)

let arr = [1, 2, 3, 4, 5]

console.log(arr.length)
// result = [2, 4, 6, 8, 10]
// result = [1, 4, 9, 16, 25]
// access last element from an given array using length
console.log(arr[arr.length - 1]); // array


console.log(arr*2)

let result = []
for (let i = 0; i < arr.length; i++) {
    arr[i] * 2
}
  