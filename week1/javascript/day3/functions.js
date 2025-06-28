//function declaration 
function greet(name) {
    return `hello, ${name}`;
};

console.log(greet("Alice"));


//function expression
var greeting = function() {
    console.log("Hello there");
};
greeting()

//arrow function
var namasteJS = () => {
    console.log("Namaste Javascript");
}
namasteJS()

const add = (a,b) => {
    console.log(a+b);
}
add(10,20);

//anonymous function
(function() {
    console.log("inside anonymous function")
})();
