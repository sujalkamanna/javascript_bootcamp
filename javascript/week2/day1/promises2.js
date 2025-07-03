function walk() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("walking the dog");
    }, 3000);
  });
}
// walk();

function clean() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Cleaning the house");
    }, 2000);
  });
}
// clean();

function study() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("you are studying");
    }, 1000);
  });
}

// study()

// walk(() => {
//   clean(() => {
//     study(() => {
//       console.log("You finished all the tasks");
//     });
//   });
// });

//method chaining

walk()
  .then((value) => {
    console.log(value);
    return clean();
  })
  .then((value) => {
    console.log(value);
    return study();
  })
  .then((value) => {
    console.log(value);
    console.log("done all the tasks"), clean();
  });
