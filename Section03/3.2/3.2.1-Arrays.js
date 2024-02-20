// create an Array using an Array literal
const newArray = ["This", "That", "Something"];

// access the 1st item in the Array
console.log(newArray[0]);

// access the last item in the Array
console.log(newArray[2]);

// print the length of the Array
console.log(newArray.length);

// use the length property to access the last item in the Array
console.log(newArray[newArray.length - 1]);

// with for...of, loop over the Array, modify the value and add to a different Array
let newArr = [];
for (let item of newArray) {
  newArr.push(`${item}`);
}
console.log(newArr);
