array = [
  [10, 20, 30],
  [40, 50, 60],
];

console.log(array);
for (let i of array) {
  console.log(i);
}

for (let row of array) {
  for (let num of row) {
    console.log(num);
  }
}

//sum of elements in array
sum = 0;
for (let row of array) {
  for (let num of row) {
    console.log(num);
    sum= sum+num
  }
}
console.log(sum)