let nos = [1, 2, 3, 4, 50];
let maximum = Math.max(...nos);
console.log(maximum);

let minimun = Math.min(...nos);
console.log(minimun);

let username = "This is a name";
let letters = [...username].join(" ");
console.log(letters);

let fruits = ["appe", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

foods = [...fruits, ...vegetables];
foods = [...fruits, ...vegetables, "egg", "milk"];
console.log(foods);
let new_fruits = [...fruits];
console.log(new_fruits);
console.log(foods);
