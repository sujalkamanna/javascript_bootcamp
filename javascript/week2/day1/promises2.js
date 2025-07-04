function walk() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const walk = true;
      if (walk) {
        resolve("Walking the dog");
      } else {
        reject("you didnt");
      }
    }, 3000);
  });
}
// walk();

function clean() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dog = true;
      if (dog) {
        resolve("Cleaning the house");
      } else {
        reject("you didnt");
      }
    }, 2000);
  });
}
// clean();

function study() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const study = true;
      if (study) {
        resolve("you studied");
      } else {
        reject("you didnt");
      }
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
    console.log("done all the tasks");
  })
  .catch(error=>console.log(error))
