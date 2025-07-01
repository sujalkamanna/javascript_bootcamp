// map
//  accepts a callback and applies to that function

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

function square(Element) {
  return Math.pow(Element, 2);
}
const squared = arr1.map(square);
console.log(squared);

//uppercase

const arr2 = ["name1", "patrick", "name3"];
function upper(element) {
  return element.toUpperCase();
}
const upper_case = arr2.map(upper);
console.log(upper_case);
