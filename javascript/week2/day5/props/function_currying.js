// A normal function
function add(a, b) {
  console.log(a + b);

}

// console.log(add(10,20))

// Curried version
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}

console.log(curriedAdd(2)(3));


setTimeout(add,1000,10,20)

