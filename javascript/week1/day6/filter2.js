let numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];

//even nos
function is_even(element) {
  return element % 2 === 0;
}

let even_nos = numbers.filter(is_even);
console.log(even_nos);

//odd numbers
function is_odd(element) {
  return element % 2 !== 0;
}

odd_nos = numbers.filter(is_odd);
console.log(odd_nos);
console.log(typeof odd_nos);

let u = numbers.filter((element) => {
  return element >= 10;
});
console.log(u);



