
let promise = new Promise(function(resolve,rejct){
    resolve(56)
    console.log("prompt in promise!")
}
)

setTimeout(() => {
    console.log("first line") 
}, 2000);

console.log("second line executed first")

console.log(promise)