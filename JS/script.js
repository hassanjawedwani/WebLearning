// const fruits = ["apple", "banana", "mango", "strawberry"];

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

// const text = Object.entries(ag5883);

// console.log(text);

// for (const property of text) {
//   console.log(property[0], "\n", property[1]);
// }

// for (const [property, value] of text) {
//   console.log(property, "\n", value);
// }

// const data = Object.entries(ag5883);
// console.log(Object.fromEntries(data));

// const keys = Object.keys(ag5883);
// console.log(keys);

// const values = Object.values(ag5883);
// console.log(values);

// const fruits = [
//   {name:"apples", quantity:300},
//   {name:"bananas", quantity:500},
//   {name:"oranges", quantity:200},
//   {name:"kiwi", quantity:150}
// ];


// const result = Object.groupBy(fruits, ({ quantity }) => quantity > 200 ? "ok" : "fuck");
// console.log(result.ok);
// console.log(result.fuck);

// for (const variable in ag5883) {
//   console.log(variable, ag5883[variable]);
// }

Object.defineProperty(ag5883, "sex", { value:"male"}); 
Object.defineProperty(ag5883, "semester", { value: 8 });

console.log(ag5883)