// Named Parameters
// write a function that takes two named parameters:
function thisFunction(param1 = 5, param2 = 6, ...param3) {

// print each named parameter,
console.log(param1, param2);
console.log(param3);

// then return the parameters added together

return (param1 + param2);
}
// invoke the function and pass in two numbers
console.log(thisFunction(1, 2));

// invoke the function and pass in more than two numbers
thisFunction(1, 2, 3);

// invoke the function and pass in only one number
thisFunction(1);

// change the function to set default values for the parameters

// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
thisFunction(1, 2, 3, 4, 5);
