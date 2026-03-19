// SPREAD AND REST IN JAVASCRIPT

// =====================================
// 1. SPREAD OPERATOR
// =====================================

// Spread means: expand values

// Example 1: Expanding array values
const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3

// Example 2: Copying an array
const originalArray = ["apple", "banana", "mango"];
const copiedArray = [...originalArray];
console.log(copiedArray); // ["apple", "banana", "mango"]

// Example 3: Merging arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // [1, 2, 3, 4]

// Example 4: Adding new values to array
const fruits = ["apple", "banana"];
const newFruits = [...fruits, "orange", "grapes"];
console.log(newFruits); // ["apple", "banana", "orange", "grapes"]

// Example 5: Copying an object
const user = { name: "Sam", age: 25 };
const copiedUser = { ...user };
console.log(copiedUser); // { name: "Sam", age: 25 }

// Example 6: Merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // { a: 1, b: 2, c: 3, d: 4 }

// Example 7: Updating object values
const student = { name: "Ram", age: 20 };
const updatedStudent = { ...student, age: 21, country: "Nepal" };
console.log(updatedStudent); // { name: "Ram", age: 21, country: "Nepal" }

// Example 8: Passing array values as function arguments
const nums = [5, 10, 15];
console.log(Math.max(...nums)); // 15

// =====================================
// 2. REST OPERATOR
// =====================================

// Rest means: collect remaining values

// Example 1: Rest in array destructuring
const colors = ["red", "green", "blue", "yellow"];
const [firstColor, ...otherColors] = colors;
console.log(firstColor); // red
console.log(otherColors); // ["green", "blue", "yellow"]

// Example 2: Rest in object destructuring
const employee = {
  id: 101,
  empName: "Hari",
  salary: 50000,
  department: "IT",
};

const { empName, ...otherDetails } = employee;
console.log(empName); // Hari
console.log(otherDetails); // { id: 101, salary: 50000, department: "IT" }

// Example 3: Rest in function parameters
function addAll(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(addAll(1, 2, 3)); // 6
console.log(addAll(10, 20, 30, 40)); // 100

// Example 4: Function with normal parameter + rest
function showUser(mainUser, ...otherUsers) {
  console.log("Main user:", mainUser);
  console.log("Other users:", otherUsers);
}

showUser("Ram", "Shyam", "Hari", "Sita");
// Main user: Ram
// Other users: ["Shyam", "Hari", "Sita"]

// =====================================
// 3. SPREAD VS REST TOGETHER
// =====================================

const marks = [80, 85, 90, 95];

// Rest: collecting remaining values
const [firstMark, ...remainingMarks] = marks;
console.log(firstMark); // 80
console.log(remainingMarks); // [85, 90, 95]

// Spread: expanding values
const allMarks = [...remainingMarks, 100];
console.log(allMarks); // [85, 90, 95, 100]

// =====================================
// 4. WHY TO USE
// =====================================

// Spread is useful for:
// - copying arrays/objects
// - merging arrays/objects
// - updating data easily
// - passing values into functions

// Rest is useful for:
// - collecting extra values
// - handling unknown number of function arguments
// - extracting some values and keeping the rest

// =====================================
// 5. SIMPLE SUMMARY
// =====================================

// Spread = expand
const a = [1, 2, 3];
console.log(...a); // 1 2 3

// Rest = collect
const [x, ...y] = [10, 20, 30, 40];
console.log(x); // 10
console.log(y); // [20, 30, 40]
