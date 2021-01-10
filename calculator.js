// Define the numbers and the operation here

const numOne = 10;
const numTwo = 20;
const operation = "+";
let total = 0;

// Write if-statements here

if (operation === "+"){
    total = numOne + numTwo;
} else if (operation === "-"){
    total = numOne - numTwo;
} else if (operation === "*"){
    total = numOne * numTwo;
} else {
    total = numOne / numTwo;
}

console.log(`${numOne} ${operation} ${numTwo} = ${total}`);