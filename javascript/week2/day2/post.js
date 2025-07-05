//adding post request
//using options

let options = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    title: "this is title",
    body: "this is body",
    userId: 376,
  }),
}

fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then((response) => response.json())
  .then((json) => console.log(json));
