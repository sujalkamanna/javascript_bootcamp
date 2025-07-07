// errors - user defined

console.log("Hello");

console.log("You have reached the end of the program");

try {
  console.log(x);
} 
catch {
  console.error("error!! x is not declared");
} 
finally {
  console.log("solve the error"); // this always exeecutes
}

//promot
const prompt = require("prompt-sync")();

const value = parseInt(prompt("Please enter a no:"));
console.log(typeof value);

try {
  if (isNaN(value)) {
    throw new Error("Error :invalid value");
  }
}
catch (error) {
  console.error("please enter a numeric value");
  console.error(error.message)
}
