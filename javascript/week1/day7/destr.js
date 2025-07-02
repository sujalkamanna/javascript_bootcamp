//destructuring in js

const pi =Math.PI
const square_root = Math.sqrt
const square = Math.pow

//another method 
const {PI , sqrt , pow} = Math
b = PI*100
console.log(b)

//array destructuring
arr = [1,2,4,40,50]
const [m,n,o,p,q] = [...arr]
console.log(m,n,o,p,q)

let arr1 = [3,5]
let [u,v] = arr1
console.log(u,v)

const obj1 = {
    1 : "one",
    2 : "two"
}

const {1 : one,2 : two} =obj1
console.log(one)
console.log(two)