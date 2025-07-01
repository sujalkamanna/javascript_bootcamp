const user = {
  username: "name of user",
  id: 10,
  company: "TCS",
  welcome_message: function () {
    console.log(`${this.username},welcome user`);
  },
};

user.welcome_message();

console.log(this);

// function showThis() {
//   console.log(this);
// }
// showThis();


// function showThis() {
//     user_name = "name"
//   console.log(this.user_name);
// }
// showThis();


const showThis= () => {
    user_name = "name"
  console.log(this.user_name);
}
showThis();