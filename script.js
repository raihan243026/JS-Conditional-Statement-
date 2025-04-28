let age = 18;
if (age === 18) {
  console.log("The person is an adult.");
}

let score = 75;
if (score >= 80) {
  // This condition is false, so nothing will be logged here.
} else {
  console.log("Try Again"); // This will be logged.
}

let marks = 85;
if (marks >= 80 && marks <= 100) {
  console.log("Excellent"); // This will be logged.
}

let user = "admin";
if (user === "admin") {
  console.log("Access Granted"); // This will be logged.
} else {
  console.log("Access Denied");
}

let temperature = 40;
if (temperature > 30) {
  console.log("Too Hot"); // This will be logged.
}

let day = "Sunday";
if (day === "Sunday" || day === "Saturday") {
  console.log("Weekend"); // This will be logged.
}

let number = -10;
if (number < 0) {
  console.log("Negative"); // This will be logged.
}

number = 0;
if (number === 0) {
  console.log("Zero"); // This will be logged.
}

let color = "red";
if (color === "red") {
  console.log("Danger"); // This will be logged.
} else if (color === "yellow") {
  console.log("Caution");
} else {
  console.log("Safe");
}

let grade = "A";
switch (grade) {
  case "A":
    console.log("Excellent"); // This will be logged.
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  default:
    console.log("Fail");
}

marks = 40;
let result = marks >= 33 ? "Pass" : "Fail";
console.log(result); // Output: Pass

let str = "JavaScript";
if (str.length > 5) {
  console.log("The length of 'JavaScript' is greater than 5."); // This will be logged.
}

let fruit = "apple";
if (fruit.startsWith("a")) {
  console.log("The fruit 'apple' starts with 'a'."); // This will be logged.
}

number = 11;
if (number % 2 !== 0) {
  console.log("The number 11 is an odd number."); // This will be logged.
} else {
  console.log("The number 11 is an even number.");
}

marks = 92;
if (marks >= 80 && marks <= 100) {
  console.log("Grade: A+"); // This will be logged.
} else if (marks >= 70 && marks <= 79) {
  console.log("Grade: A");
} else if (marks >= 60 && marks <= 69) {
  console.log("Grade: A-");
} else if (marks >= 50 && marks <= 59) {
  console.log("Grade: B");
} else if (marks >= 33 && marks <= 49) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

let text1 = "Frontend";
console.log(text1.toUpperCase()); // Output: FRONTEND

let text2 = "HELLO";
console.log(text2.toLowerCase()); // Output: hello

let text3 = "Learning JavaScript";
if (text3.includes("JavaScript")) {
  console.log("The string includes 'JavaScript'."); // This will be logged.
}

let text4 = "Programming";
console.log(text4.charAt(2)); // Output: o (index starts from 0)

let text5 = "React";
console.log(text5.at(-1)); // Output: t (gets the last character)

let fullName = "Sahed Rahman";
let firstName = fullName.slice(6);
console.log(firstName); // Output: Rahman

let fruits = "apple,banana,mango";
let fruitsArray = fruits.split(",");
console.log(fruitsArray); // Output: ['apple', 'banana', 'mango']

let animals = ['dog', 'cat', 'bird'];
let catIndex = animals.indexOf('cat');
console.log(catIndex); // Output: 1

let moreFruits = ['apple', 'banana'];
moreFruits.push('grape');
console.log(moreFruits); // Output: ['apple', 'banana', 'grape']

let items = ['pen', 'pencil', 'eraser'];
items.shift(); // Removes the first element
console.log(items); // Output: ['pencil', 'eraser']

let transport = ['boat', 'ship'];
transport.unshift('train', 'plane');
console.log(transport); // Output: ['train', 'plane', 'boat', 'ship']

let numbers = ['dog', 'cat', 'bird'];
delete numbers[1]; // This leaves an empty slot
console.log(numbers); // Output: ['dog', empty, 'bird']

let letters = ['a', 'b', 'c', 'd'];
console.log(letters.length); // Output: 4

let greeting = "Hello";
let place = "World";
let message = greeting + " " + place;
console.log(message); // Output: Hello World

let num1 = 100;
let num2 = 25;
let difference = num1 - num2;
console.log(difference); // Output: 75