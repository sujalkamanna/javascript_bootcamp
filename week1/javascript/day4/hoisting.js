// value hoisting

console.log(a) //undefined
var a = 10;

// function hoisting

add(10,20) //output = 30
function add(a,b){ 
    console.log(a+b)
}

//hoisting for function expressions
