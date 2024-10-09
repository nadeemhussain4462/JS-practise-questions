// Objects

const product = {
  name: "Laptop",
  price: 1000,
  quantity: 5,
  isOk: true,
};

console.log(product);
console.log(typeof product);
console.log(product.isOk);
console.log(product["name"]);


// Object nested values
const student = {
  name: "Nadeem",
  age: 26,
  isPass: true,
  subjects: ["Math", "Science", "English"],
  address: {
    city: "Karachi",
    state: "Sindh",
    country: "Pakistan",
  },
};
console.log(student)

const profile = {
  name: "Nadeem Hussain",
  age: 26,
  hobbies: ["reading", "outting", "coding"],
  address: {
    street: "House no A-24 Mansehra Colony",
    city: "Karachi",
    state: "Pakistan",
    zip: 75120,
  },
};
console.log(profile);
console.log(typeof profile["name"]);
console.log(typeof profile.address.zip);
console.log(typeof profile.hobbies);

// Arthmetic  Operators
let a = 10;
a += a + 5;
console.log(a)