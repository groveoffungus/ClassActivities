// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let firstVariable = "string";
let secondVariable = 13;
let thirdVariable = true;
let fourthVariable = null;
let fifthVariable;


// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(firstVariable, secondVariable, thirdVariable, fifthVariable, fourthVariable);

// create a variable that references a template literal
// inside the template literal, use two of the above variables
let tempVariable = `This is a ${firstVariable}, the number is ${secondVariable}`;

// reassign the value of the variable that references "null"
fourthVariable = `${tempVariable}`;

// print the value and its type
console.log(fourthVariable, typeof fourthVariable);

// print a variable that causes a ReferenceError
// console.log(anotherVariable);

// alter the previous line to no longer cause a ReferenceError
console.log(firstVariable);
