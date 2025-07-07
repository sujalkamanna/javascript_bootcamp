let arr = [10, 0, 20, 30, 40, 50, 60, -1];

let positive = 0;
let negative = 0;
let zeros = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    positive++;
  } else if (arr[i] < 0) {
    negative++;
  } else {
    zeros++;
  }
}
console.log("Positives:", positive);
console.log("Negatives:", negative);
console.log("Zero:", zeros);
