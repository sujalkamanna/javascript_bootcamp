let arr = [1, 2, 3, 4];

// for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for-of
for (let num of arr) {
  console.log(num);
}

// forEach
arr.forEach((val, idx) => {
  console.log(`${idx}: ${val}`);
});
