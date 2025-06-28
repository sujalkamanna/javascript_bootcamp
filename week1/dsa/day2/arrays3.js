// array methods

arr = [10, 54, 84, 96, 56, 23, 54];

let str = arr.toString();
console.log(str);
console.log(typeof str);

let c = arr.join("_");
console.log(c);

arr.pop();
console.log(arr);

arr.push(1000);
console.log(arr);

let r = arr.shift();
console.log(r);

console.log(arr); //removed 10 from arr

const s = [1, 2, 3, 4, 5];
s.unshift(0);
console.log(s);
delete s[4];
console.log(s);
