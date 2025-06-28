let str1 = "Hello, world!";
let str2 = "Single quotes also work.";

// string3 = "hello Javascript"
// string3[0] = "H"
// console.log(string3)

console.log(str1);
console.log(str2);

console.log(str1.length);
console.log(str2.length);

let len = str1.length;
console.log(len);

console.log(str1[1]);
console.log(str2[0]);

comb = str1 + " (added space) " + str2;
console.log(comb);

lw_case = str1.toLowerCase();
console.log(lw_case);

lw_case = str2.toUpperCase();
console.log(lw_case);

charat = "This is string";
console.log(charat.charAt(0));

slice_string = "String to be sliced";
console.log(slice_string.slice(0, 3));

console.log(slice_string.indexOf("S"));

console.log(slice_string.replace("to", "is"));

console.log(slice_string.split(" "));
