//adding post request
//using options

const create_todo = async () => {
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
  };

  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
};

const mainFunct = async () => {
  let todo = await create_todo();
  console.log(todo);
};
mainFunct();
