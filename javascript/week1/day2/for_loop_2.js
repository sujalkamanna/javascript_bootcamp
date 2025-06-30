// sum of all numbers from 1 to a given number N
let n = 20;
sum = 0;
for (let i = 0; i <= n; ++i) {
  sum = sum + i;
  // sum+=i;
}
console.log("The sum of", n, "numbers is", sum);




var obj = {
    key1 : "this is a value",
    key2 : "this is another value"
}
for (let key in obj){
    console.log(key, ":", obj[key])
}