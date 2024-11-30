// // Objects

// const product = {
//   name: "Laptop",
//   price: 1000,
//   quantity: 5,
//   isOk: true,
// };

// console.log(product);
// console.log(typeof product);
// console.log(product.isOk);
// console.log(product["name"]);

// // Object nested values
// const student = {
//   name: "Nadeem",
//   age: 26,
//   isPass: true,
//   subjects: ["Math", "Science", "English"],
//   address: {
//     city: "Karachi",
//     state: "Sindh",
//     country: "Pakistan",
//   },
// };
// console.log(student)

// const profile = {
//   name: "Nadeem Hussain",
//   age: 26,
//   hobbies: ["reading", "outting", "coding"],
//   address: {
//     street: "House no A-24 Mansehra Colony",
//     city: "Karachi",
//     state: "Pakistan",
//     zip: 75120,
//   },
// };
// console.log(profile);
// console.log(typeof profile["name"]);
// console.log(typeof profile.address.zip);
// console.log(typeof profile.hobbies);

// // Arthmetic  Operators
// let a = 10;
// a += a + 5;
// console.log(a)

// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["faisalabad", "karachi", "isLamabad", "great falls", "honolulu"];
// for (var i = 0; i <= 4; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     alert("It's one of the cleanest cities");
//   }
// }

// var favoritePhone = prompt('enter your favourite phone model : ');
// document.write('My favourite phone model is : ' + favoritePhone + '<br>');
// document.write('Length of String is : ' + (favoritePhone.length) + '<br>' + '<br>');

// var letr = prompt('');
// var letr = 'Pakistani';
// document.write('String : ' + letr + '<br>');
// document.write("Index of 'n' : " + letr.indexOf('n') + '<br>' + '<br>');

// var month = prompt("Enter a month");
// var charsInMonth = month.length;
// if (charsInMonth > 3) {
//   monthAbbrev = month.slice(0, 3);
// }
// document.write("Month : " + month + "<br>");
// document.write("Abbreviation : " + monthAbbrev + "<br>" + "<br>");

let city = "New York";
console.log(city.toUpperCase());  // "NEW YORK"
console.log(city.toLowerCase());  // "new york"

let word = "Hello JavaScript";
console.log(word.length);  // 10
console.log(word.slice(6, 10));  // "Java"

let sentence = "Learning JavaScript is fun";
console.log(sentence.indexOf("JavaScript"));  // 9

let message = "Hello world";
console.log(message.replace("world", "JavaScript"));  // "Hello JavaScript"

let num = 4.7;
console.log(Math.round(num));  // 5
console.log(Math.floor(num));  // 4
console.log(Math.ceil(num));   // 5

let strNum = "123";
console.log(Number(strNum));  // 123
console.log(parseInt(strNum));  // 123

let numStr = 456;
console.log(numStr.toString());  // "456"

let numDeci = 3.14159;
console.log(numDeci.toFixed(2));  // "3.14"

let currentDate = new Date();
console.log(currentDate);

// let date = new Date();
// console.log(date.getFullYear());  // e.g., 2024
// console.log(date.getMonth() + 1);  // e.g., 11 (months are zero-indexed)
// console.log(date.getDate());  // e.g., 8

let date = new Date();
date.setFullYear(2025);
console.log(date.getFullYear());  // 2025

function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Nadeem Hussain"));  // "Hello, Alice"

function add(a, b) {
  return a + b;
}
console.log(add(5, 3));  // 8


function validatePassword(password) {
  if (password.length < 8) {
      return "Password must be at least 8 characters long";
  }
  if (password === password.toLowerCase() || password === password.toUpperCase()) {
      return "Password must include both uppercase and lowercase letters";
  }
  if (!/[0-9]/.test(password)) {
      return "Password must include at least one number";
  }
  return "Password is valid";
}

console.log(validatePassword("Abc123"));        // "Password must be at least 8 characters long"
console.log(validatePassword("abcdefgh"));      // "Password must include both uppercase and lowercase letters"
console.log(validatePassword("Abcdefgh"));      // "Password must include at least one number"
console.log(validatePassword("Abcd1234"));      // "Password is valid"



