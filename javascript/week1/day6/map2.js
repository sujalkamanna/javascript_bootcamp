let arr = [45, 23, 21];

let a = arr.map((Element) => {
  console.log(Element);
  return Element + 1;
});
console.log(a);


console.log("before function");
function add_one(value, index,array){
  return [value + 1,"[",array+1,"]" ,index+1];
}

let b = arr.map(add_one);
console.log(b);

