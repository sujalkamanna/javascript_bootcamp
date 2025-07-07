//Merge Two Sorted Arrays
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8, 10];

let arr3 = [...arr1, ...arr2];
console.log(arr3);

for (let i = 0; i < arr3.length - 1; i++) {
  for (let j = 0; j < arr3.length - 1 - 1; j++) {
    if (arr3[j] > arr3[j + 1]) {
      let temp = arr3[j];
      arr3[j] = arr3[j + 1];
      arr3[j + 1] = temp;
    }
  }
}
console.log(arr3);
