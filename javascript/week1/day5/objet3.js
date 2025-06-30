object = {
    one:1,
    two:2
}
let copy = { ...object};
console.log(copy)
console.log(object)

Object.freeze(object); //makes obj immutable
Object.seal(object); //prevents adding or removing properties

object.three= 3;
console.log(object) 