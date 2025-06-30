function average1(x, y) {
  console.log("The average of", x, "and", y, "is:", (x + y) / 2);
}
average1(10, 20);

function average(x, y) {
    return `The average of ${x} and ${y} is: ${(x + y) / 2}`;
}
console.log(average(20, 30));

const sum = (p, q) => {
  console.log("sum is:", p + q);
};
sum(10, 20);


//lambda functions = oneline functions
const greets = () => { console.log("hello inside lambda function")}; greets();
const square = (x) => { console.log(x*x)}
square(2)

const square1 = (x) => x*x;
console.log(square1(2))

//function with no name
const sayhello = function(){
  console.log("HELLO");

};
sayhello()