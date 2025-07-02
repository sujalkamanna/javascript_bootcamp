console.log(b) //hoisting

// console.log(a) 
// ReferenceError due to temporal dead zone

let a = 10;
var b = 100;

// let a = 500 error
a = 20 //reinitialzed
console.log(a)

//let is more strict tha var
//temporal dead zone

let window;
console.log(b)
console.log(this.b)

//const 
//more strict than let and var

// console.log(x) 
//ReferenceError: Cannot access 'x' before initialization
const x = 500;
console.log(x)

// const x = 700
// SyntaxError: Identifier 'x' has already been declared

// x = 900
// TypeError: Assignment to constant variable.
