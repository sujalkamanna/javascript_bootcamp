let arr = [12, 14, 16, 18, 20];
console.log(arr);
let first = arr[0];

for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = first;
console.log(arr);

//by using functions
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2);
let first1 = arr2.shift();

arr2.push(first1);

console.log(arr2);
