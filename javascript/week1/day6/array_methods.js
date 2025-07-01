function a() {
  function b() {
    console.log(10);
    let c = 200;
}
b();
console.log(c)
}
a();
// console.log(c)