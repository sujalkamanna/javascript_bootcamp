let arr = [4, 1, 84, 54, 1, 44, 65, 3, 64, 3, 8];

let duplicates = false;
arr.sort((a, b) => a - b);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i - 1]) {
    // console.log(arr[i],arr[i-1]);
    arr.splice(i, 1);
    duplicates = true;
  }
}
console.log(duplicates);

console.log(arr);
