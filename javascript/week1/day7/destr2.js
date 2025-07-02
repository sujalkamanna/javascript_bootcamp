let arr = [1,2,3,4,5,6,7,80]

let [a,b,c,d,...others] = arr
console.log(others)

let [e, , , , ...rest] = arr
console.log(rest)
console.log(e)

const person = {
    name :"name1",
    last_name : "final name",
    age : 20,

}

const {name , age } = person
console.log(person)
console.log(name)
console.log(age)
