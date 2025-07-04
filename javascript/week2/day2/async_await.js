// async and await in js
// async makes a function return a promise
//await makes an async function wait for a promise

async function function_name() {
  let delhi = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 C");
    }, 1000);
  });

  let banglore = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("pleasent");
    }, 2000);
  });
  //   delhi.then((temp) => {
  //     console.log("the weather of delhi is :", temp);
  //   });
  let delhiW = await delhi;
  let bangloreW = await banglore;
  return [delhiW, bangloreW];
  //   banglore.then((weather) => {
  //     console.log("the weather of banglore is :", weather);
  //   });
}
console.log("welcome to weather control room");

let a = function_name();
a.then(([temp, weather]) => {
  console.log("the weather of delhi is :", temp);
  console.log("the weather of banglore is :", weather);
});
