const prompt  = require("prompt-sync")();

let n = Number.parseInt(prompt("Enter value of N:"));

i = 0;
do{
    console.log(i)
    i++;
} while(i<n)