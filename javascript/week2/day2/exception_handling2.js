const prompt = require("prompt-sync")();

const divident = Number(prompt("Please enter divident:"));
const divisor = Number(prompt("Please enter divisor:"));
try {

  if (divisor == 0) {
    throw new Error("Cannot divide by 0!");
  }
  if (isNaN(divisor) || isNaN(divident)) {
    throw new Error("Please enter a valid no!!");
  }
  const result = divident / divisor;
  console.log(result);
} catch (error) {
  console.error("Divide by zero error");
  console.error(error.message);
}
