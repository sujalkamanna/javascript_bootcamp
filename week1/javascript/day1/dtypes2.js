//non primitives data types
let str = "Hello";

let dict = {name_of_person : "Alice" , Age :10}

let dict2 = {name_of_person : "Alice" , Age :10}
dict2.name_of_person = "Random"
let arr = [1,2,3,4,5,6]

let funct = function()
{
    console.log("inside function");
}

let date = new Date()

console.log(str)
console.log(dict)
dict2.salary = 10000
console.log(dict2)
console.log(arr)
funct()
console.log(date)

