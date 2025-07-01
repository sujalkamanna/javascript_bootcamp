function a() {
  function b() {
    console.log(10);
    let c = 200;
  }
  b();
  // console.log(c)
}
a();
// console.log(c)

//for each

arr1 = [1, 2, 3, 4, 5, 6];

arr1.forEach((element) => {
  console.log(element);
});

let nums = [42, 51, 89, 41];
console.log(nums);
nums.forEach((n) => {
  console.log(n);
  console.log(n*2);
});
