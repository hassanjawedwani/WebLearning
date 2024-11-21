const fruits = ["apple", "banana", "mango", "strawberry"];

const ag5883 = {
  name: "hassan jawed",
  ag: "2021-ag-5883",
  semester: 7,
  married: false
};

const ag5992 = {
  name: "ahmad",
  age: 23,
  semester: 9
};

const text = Object.entries(ag5883);

console.log(text);

// for (const property of text) {
//   console.log(property[0], "\n", property[1]);
// }

for (const [property, value] of text) {
  console.log(property, "\n", value);
}