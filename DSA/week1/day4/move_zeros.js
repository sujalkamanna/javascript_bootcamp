let arr = [0, 1, 0, 3, 12, 51];
console.log(arr);
let arr2 = [];
let nonzeros = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    arr2.push(arr[i]);
  } else {
    nonzeros.push(arr[i]);
  }
}
let combined = nonzeros.concat(arr2);
console.log(combined);

//
let arr1 = [0, 1, 0, 3, 12, 51];
let insertPos = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr1[i] !== 0) {
    arr1[insertPos] = arr1[i];
    insertPos++;
  }
}
while (insertPos < arr.length) {
  arr[insertPos] = 0;
  insertPos++;
}

console.log(arr1); // [1, 3, 12, 51, 0, 0]
