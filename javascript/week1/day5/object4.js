const app = new Object(); //singleton object

app.id = "123abc";
app.name = "Name";
app.isloggedin = false;

console.log(app);
console.log("----------")
const regularUser = {
    email: "name@gmail.com",
    fullName: {
        username: "First name",
        lastname: "last name",
    },
};
console.log(regularUser)
console.log(regularUser.fullName)

// delete regularUser.email
// console.log(regularUser)

