//function scope

function call_x() {
  var x = 10;
  console.log(x);
}
call_x();

// console.log(x) ReferenceError

if (true) {
  let b = 20;
  const c = 30;
  console.log(b, c);
}
// console.log(b, c); //ReferenceError

//nested funtions - lexical scoping
// TBD is to be discussed "question"
// TODO
// info;
function outer() {
  let x = 1000;
  function inner() {
    console.log(x);
  }
  inner();
}
outer();
