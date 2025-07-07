let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
//using reduce method
let red_sum = arr.reduce((acc, Element) => {
  return acc + Element;
}, 0);
console.log(red_sum);
