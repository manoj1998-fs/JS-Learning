const array1 = new Array (9,3,2,4,6);
array1.unshift(12);
array1.shift(8)
// console.log(array1);
// console.log(array1.indexOf(19));
// console.log(array1.includes(19));
// const myArray = array1.join(); // convert the array to the string 
// console.log(myArray);

const demoArry1 = ["Manoj","kumar","Mishra"];
const demoArray2 = ["Satya","Ranjan","Sahoo"];
const mergedOne = [...demoArray2,...demoArry1];
console.log(mergedOne);

 console.log(Array.isArray("Manoj"));
 console.log(Array.of("a","e","i","o","u"));