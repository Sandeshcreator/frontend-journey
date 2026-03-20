/*
let promise = new Promise(function (resolve, reject) {
  alert("Hello");
  resolve(56);
});
*/

let p1 = new Promise(function (resolve, reject) {
  console.log("I am promise and i am pending");

  setTimeout(() => {
    console.log("I am a promise and I am rejected");
    resolve(true);
  }, 5000);
});

let p2 = new Promise(function (resolve, reject) {
  console.log("I am promise and i am pending");

  setTimeout(() => {
    // console.log("I am a promise and I am rejected");
    reject(new Error("I am an error"));
  }, 5000);
});

p1.then((hey) => {
  console.log(hey);
});

p2.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  },
);

// promise chaning
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve(10);
  } else {
    reject("Something went wrong");
  }
});

myPromise
  .then((value) => {
    console.log("Step 1:", value);
    return value * 2;
  })
  .then((value) => {
    console.log("Step 2:", value);
    return value + 5;
  })
  .then((value) => {
    console.log("Step 3:", value);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
