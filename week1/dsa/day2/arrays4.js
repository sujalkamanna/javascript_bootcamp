arr1 = [45, 5, 85, 84, 654];
arr2 = [654, 5, 6, 78, 98];

let arr3 = arr1.concat(arr2);
console.log(arr3);

//sort
let arr4 = arr3.sort(); //sorts in alphabetical order
console.log(arr4);

let compare = (a, b) => {
  return a - b;
};
arr4.sort(compare);
console.log(arr4);

console.log(arr4.reverse()); //reversing array

arr4.splice(1, 3, 21, 22, 23);
console.log(arr4);
