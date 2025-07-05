let a = fetch("https://goweather.herokuapp.com/weather/NY");

a.then((response) => {
  console.log(response.ok);
  console.log(response.status);
  return response.json();
}).then((data) => {
  console.log(data);
});
