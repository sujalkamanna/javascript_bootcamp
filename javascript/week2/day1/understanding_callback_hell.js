//promises = an object that manages an async operations

//walk the dog
//clean the house
//study

function walk(callback) {
  setTimeout(() => {
    console.log("walking the dog");
    callback();
  }, 3000);
}
// walk();

function clean(callback) {
  setTimeout(() => {
    console.log("Cleaning the house");
    callback();
  }, 2000);
}
// clean();

function study(callback) {
  setTimeout(() => {
    console.log("you are studying");
    callback()
  }, 1000);
}
// study()

walk(() => {
  clean(() => {
    study(() => {
      console.log("You finished all the tasks");
    });
  });
});
