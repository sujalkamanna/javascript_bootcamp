//JavaScript: Objects – properties methods and other methods etc

// methods are functions in objects

calculator = {
  add: function (a, b) {
    return a + b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};
console.log(calculator.add(10, 20));
console.log(calculator.multiply(10, 20));

object1 = {
  1: "One",
  2: "Two",
  3: "Three",
  4: " Four",
};
console.log(Object.keys(object1));
console.log(Object.values(object1));

console.log(Object.entries(object1));

object1.email = "added.email@domain.com";
console.log(object1);
console.log(1 in object1); //true

for (let key in object1) {
  console.log(key);
}

for (let key in object1) {
  console.log(`${key}:${object1[key]}`);
}

