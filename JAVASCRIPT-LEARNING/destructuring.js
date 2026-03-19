// DESTRUCTURING IN JAVASCRIPT

// 1. Object destructuring
const user = { name: "Sam", age: 25 };
const { name, age } = user;
console.log(name); // Sam
console.log(age); // 25

// 2. Rename variables
const { name: userName, age: userAge } = user;
console.log(userName); // Sam
console.log(userAge); // 25

// 3. Default values
const person = { firstName: "Alice" };
const { firstName, country = "Nepal" } = person;
console.log(firstName); // Alice
console.log(country); // Nepal

// 4. Nested object destructuring
const student = {
  id: 1,
  address: {
    city: "Kathmandu",
    zip: 44600,
  },
};
const {
  address: { city, zip },
} = student;
console.log(city); // Kathmandu
console.log(zip); // 44600

// 5. Array destructuring
const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor); // red
console.log(secondColor); // green
console.log(thirdColor); // blue

// 6. Skip array values
const numbers = [10, 20, 30, 40];
const [a, , c] = numbers;
console.log(a); // 10
console.log(c); // 30

// 7. Default values in array
const values = [1];
const [x, y = 5] = values;
console.log(x); // 1
console.log(y); // 5

// 8. Rest operator
const fruits = ["apple", "banana", "mango", "orange"];
const [firstFruit, ...otherFruits] = fruits;
console.log(firstFruit); // apple
console.log(otherFruits); // ["banana", "mango", "orange"]

// 9. Swapping variables
let p = 1;
let q = 2;
[p, q] = [q, p];
console.log(p); // 2
console.log(q); // 1

// 10. Destructuring in function parameters
function greet({ fullName, userAge }) {
  console.log(`${fullName} is ${userAge} years old`);
}
greet({ fullName: "Ram", userAge: 24 });

// 11. Function parameter with default value
function showUser({ username = "Guest" } = {}) {
  console.log(`Hello, ${username}`);
}
showUser({ username: "Sita" }); // Hello, Sita
showUser(); // Hello, Guest

// 12. Extracting data from API-like object
const response = {
  status: 200,
  data: {
    id: 101,
    title: "JavaScript Basics",
  },
};
const {
  data: { id, title },
} = response;
console.log(id); // 101
console.log(title); // JavaScript Basics

// 13. Missing property gives undefined
const employee = { empName: "Sandesh" };
const { empName, salary } = employee;
console.log(empName); // Sandesh
console.log(salary); // undefined
