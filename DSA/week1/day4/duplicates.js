arr = [4, 1, 84, 54, 1, 44, 65, 3, 64, 3, 8];

let len = arr.length;
let i;
let left = 0;
let right =1;
var count = 0;

while (left < right) {
  if (arr[left] === arr[right]) {
    arr[left] = left[i]
    console.log("match found");
    count++;
  }

  right++;
}
console.log(count);
