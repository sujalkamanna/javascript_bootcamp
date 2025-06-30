// value hoisting

console.log(a); //undefined
var a = 10;

// function hoisting

add(10, 20); //output = 30
function add(a, b) {
  console.log(a + b);
}

//hoisting for function expressions

// hoisting_in_fe()
var hoisting_in_fe = function () {
  console.log("inside function");
};
hoisting_in_fe();

// console.log(b) !! ReferenceError
let b = 20;

// console.log(c) !! ReferenceError 
const c = 30;
