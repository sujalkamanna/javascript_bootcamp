//callbacks = function passed as an argument to another function
// to read a file
// nwtwork requests
// interacting with databases

function hello(leave) {
  console.log("Hello");
  leave();
}
hello(leave);

function goodbye() {
  console.log("Goodbye");
}
goodbye();

function leave() {
  console.log("leave");
}
// executed after hello using callback

function sum(cb, x, y) {
  let result = x + y;
  cb(result);
}

function display(result){
    console.log(`the addition is :${result}`)
}
sum(display,10,20)