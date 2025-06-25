// Import the readline module
const readline = require('readline');

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for input
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close(); // Close the input stream
});
