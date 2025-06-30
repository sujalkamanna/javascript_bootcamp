let a, b, c, n;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Menu:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Exponentiation\nPlease enter your operation (1-5): ",
  (answer3) => {
    n = parseInt(answer3);

    rl.question("Please enter value of A: ", (answer1) => {
      a = parseFloat(answer1);

      rl.question("Please enter value of B: ", (answer2) => {
        b = parseFloat(answer2);

        console.log("value of a is:", a);
        console.log("value of b is:", b);

        switch (n) {
          case 1:
            add();
            break;
          case 2:
            sub();
            break;
          case 3:
            mult();
            break;
          case 4:
            div();
            break;
          case 5:
            expo();
            break;
          default:
            console.log("Invalid operation code!");
            break;
        }

        console.log(`Result: ${c}`);

        rl.close();
      });
    });
  }
);

function add() {
  c = a + b;
}
function sub() {
  c = a - b;
}
function mult() {
  c = a * b;
}
function div() {
  c = a / b;
}

function expo() {
  c = a ** b;
}
