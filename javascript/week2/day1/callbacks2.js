//synchronous programming

const prompt = require("prompt-sync")();

// const a = prompt("What is your name:");
// const b = prompt("What is your age:");
// const c = prompt("What is favourite colour:");

// console.log(a,"is",b,"years old and his favourite colour is",c)

//async programming
console.log("start")

setTimeout(() => {
    console.log("delayed by 4 sec")
}, 4000);

console.log("End")
