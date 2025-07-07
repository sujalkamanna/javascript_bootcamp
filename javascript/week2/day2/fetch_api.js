let a = fetch("https://goweather2.herokuapp.com/weather/NY");
console.log(a)
a.then((response) => {
  console.log(response.ok);
  console.log(response.status);
  return response
}).catch((data) => {
  console.log(data);
});
let b = await fetch("https://goweather2.herokuapp.com/weather/NY");

// if(b.ok){
//   console.log("success")
// }
// else{
//   console.log("fail")
// }

