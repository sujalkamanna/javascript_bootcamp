const prompt = require("prompt-sync")();

const n = Number.parseInt(prompt("Enter sum of n numbers:"))

let i = 0;
sum = 0;
do{
    sum = sum+i
    i++
}while(i<=n)

console.log(sum)