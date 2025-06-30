let a;

const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter a no: " , (answer)=> {
    a = answer;
    console.log(a);
    rl.close()
})