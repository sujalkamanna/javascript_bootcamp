//object literal
const js_user = {
    name:"first name",
    age : "15",
    name2 : "second name",
}
console.log(js_user)
console.log(js_user["name"])
console.log(js_user.name)

js_user.age = 50
console.log(js_user)

js_user.email = "email@domain.com"
console.log(js_user)

delete js_user.name2
console.log(js_user)

// adding function in Object

object2 = {
    key1 : "first key",
    greet : function(){
        console.log("inside object")
    }
};
object2.greet()
