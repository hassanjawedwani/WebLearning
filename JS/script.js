// const fruits = ["apple", "banana", "mango", "strawberry"];

const ag5883 = {
  name: "hassan jawed",
  ag: "2021-ag-5883",
  semester: 7,
  married: false,
  get details() {
    return this.name.toUpperCase() + " " + this.ag;
  },
  getDetails: function() {
    return this.name + " " + this.ag;
  },
  set setSemester(currSemester) {
    this.semester = currSemester;
  }
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

// Object.defineProperty(ag5883, "sex", { value:"male"});
// Object.defineProperty(ag5883, "semester", { value: 8 });

// console.log(ag5883)

// Object.defineProperty(ag5883, "sex", { value: "strongmale", writable: true, enumerable:true, configurable:false});
// Object.defineProperty(ag5883, "sex", { value: "wealthymale" });
// delete ag5883.sex;
// console.log(ag5883)

// Object.defineProperty(ag5883, 'age', { value: 23 }, { enumerable: false });
// console.log(Object.getOwnPropertyNames(ag5883));
// console.log(Object.keys(ag5883));

// Object.defineProperty(ag5883, "getfulldetail", {
//   get: function () { return this.name }
// });

// console.log(ag5883.getfulldetail);

// console.log(ag5883.getDetails());
// console.log(ag5883.details);

// Object.defineProperty(ag5883, "add", {
//   set: function (value) {
//     this.semester += value;
//   }
// })

// Object.defineProperty(ag5883, "saraKuch", {
//   get: function () {
//     return this.name;
//   }
// })

// ag5883.add = 4;

// console.log(ag5883.semester);
// console.log(ag5883.saraKuch);

// Object.preventExtensions(ag5992);
// ag5992.nationality = "male";
// console.log(Object.isExtensible(ag5992));

// const fruits = ["apple"];
// Object.preventExtensions(fruits);
// fruits.push("banana");

// const fruits = ["apple"];
// console.log(Object.isExtensible(fruits));

// console.log(ag5992);
// Object.preventExtensions(ag5992);
// Object.seal(ag5992)
// delete ag5992.name;
// console.log(ag5992);
// console.log(Object.isExtensible(ag5992));
// console.log(Object.isSealed(ag5992));

// const fruits = ["apple"];
// Object.seal(fruits);
// delete fruits[0];
// console.log(fruits);

// console.log(ag5992);
// ag5992.age = 58;
// console.log(ag5992);
// Object.freeze(ag5992);
// ag5992.age = 23;
// console.log(ag5992)
// console.log(Object.isFrozen(ag5992));

// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   currentCar() {
//     return "Currently i have " + this.name;
//   }
// }
// class Model extends Car {
//   constructor(name, model) {
//     super(name);
//     this.model = model;
//   }
//   currentModel() {
//     return this.currentCar() + " and model is " + this.model;
//   }
// }

// const myCar = new Model("Lamborgini", "gWagon");
// console.log(myCar.currentModel());

// hello = function () {
//   return "hello world";
// }

// hello = (name) => {
//   return "hello world" + ` ${name}`;
// }

// hello = () => "hello World";

// console.log(hello());

class Header {
  constructor(color) {
    this.color = color;
  };
  data = function() {
  console.log(this);
  }
}
const myHeader = new Header("blue");

window.addEventListener("load", myHeader.data);
const button = document.getElementById("btn");
button.addEventListener("click", myHeader.data);