let a = fetch("https://goweather.herokuapp.com/weather/NY");

a.then((response) => response.json())
.then((data) => {
  console.log(data);
});
