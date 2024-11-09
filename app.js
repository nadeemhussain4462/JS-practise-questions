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

var firstChar = text.indexOf("World War II");
for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 12) === "World War II") {
    text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
  }
}
document.write(text + "<br>" + "<br>");