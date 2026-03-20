async function harry() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 Deg");
    }, 1000);
  });

  let bangaloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 Deg");
    }, 7000);
  });

  console.log("Fetching Delhi weather...");
  let delhiW = await delhiWeather;

  console.log("Fetching Bangalore weather...");
  let bangaloreW = await bangaloreWeather;

  return [delhiW, bangaloreW];
}

console.log("Welcome to weather control room");

let a = harry();

console.log(a);

a.then((value) => {
  console.log(value);
});

const cherry = async () => {
  console.log("Hey I am cherry and I am waiting");
};

const main1 = async () => {
  console.log("Welcome to weather control room");
  let a = await harry();
  let b = await cherry();
};

main1();
