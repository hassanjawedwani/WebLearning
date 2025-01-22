// function myFunction() {
//   let promise = new Promise((myResolve, myReject) => {
//     setTimeout(() => {
//       myResolve("I love Youuuu");
//     }, 3000);
//   });

//   promise.then(
//     (value) => {
//       console.log("Promise value with then " + value);
//     },
//     (error) => {
//       console.log("Promise error with then " + error);
//     }
//   );
// }

// myFunction()

// async function myFunction() {
//   let promise = new Promise((myResolve, myReject) => {
//     setTimeout(() => {
//       myResolve("I love Youuuu");
//     }, 3000);
//   });

//   try {
//     const promiseValue = await promise;
//     console.log("Promise value with await " + promiseValue);
//   } catch (error) {
//     console.log("Some error occured " + error);
//   }
// }

// myFunction();

// async function myFunction() {
//   return "Hello World";
// }
// myFunction().then(
//   (value) => { console.log(value) },
// );

// function myFunction() {
//   return Promise.resolve("Hello World");
// }
// myFunction().then((value) => {
//   console.log(value);
// })

// const myPromise = new Promise((myResolve, myReject) => {
//   myResolve("I Love You!");
// });

// myPromise.then(function (value) {
//   setTimeout(() => {
//     console.log(value);
//   }, 3000);
// });

// const myPromise = new Promise((myResolve, myReject) => {
//   let i = 0;
//   if (i == 0) {
//     myResolve("iOk");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   (value) => { console.log(value) },
//   (error) => { console.log(error) }
// );

// JS CallBack : when a function is passed as argument to another functiion

// function display(str) {
//   document.getElementById("temp").innerText = str;
// }

// function first() {
//   display("helloworld");
// }

// function second() {
//   display("Goodbye");
// }

// second();
// first();

// function display(calculations) {
//   document.getElementById("temp").innerText = calculations;
// }

// function calculator(x, y) {
//   const value = x + y;
//   display(value);
// }

// calculator(5, 5);

// function display(calculations) {
//   document.getElementById("temp").innerText = calculations;
// }

// function calculator(x, y, myCallBack) {
//   const value = x + y;
//   myCallBack(value);
// }

// calculator(5, 51, display);

// const numbers = [4, 1, -20, -7, 5, 9, -6];

// function getPositiveNumbers(numbers) {
//   const positiveNumbers = [];
//   for (const number of numbers) {
//     if (number >= 0) {
//       positiveNumbers.push(number);
//     }
//   }
//   return positiveNumbers;
// }

// const positiveNumbers = getPositiveNumbers(numbers);

// console.log(positiveNumbers);

// const numbers = [4, 1, -20, -7, 5, 9, -6];

// function isPositive(number) {
//   return number >= 0 ? true : false;
// }

// function getPositiveNumbers(numbers) {
//   const positiveNumbers = [];
//   for (const number of numbers) {
//     if (isPositive(number)) {
//       positiveNumbers.push(number);
//     }
//   }
//   return positiveNumbers;
// }

// const positiveNumbers = getPositiveNumbers(numbers);

// console.log(positiveNumbers);

// const numbers = [4, 1, -20, -7, 5, 9, -6, 8];

// function isPositive(number) {
//   return number >= 0 ? true : false;
// }

// function getPositiveNumbers(numbers, myCallBack) {
//   const positiveNumbers = [];
//   for (const number of numbers) {
//     if (myCallBack(number)) {
//       positiveNumbers.push(number);
//     }
//   }
//   return positiveNumbers;
// }

// const positiveNumbers = getPositiveNumbers(numbers, isPositive);

// console.log(positiveNumbers);

// function myDisplayer(value) {
//   document.getElementById("temp").textContent = value;
// }

// function myCalculator(x, y, myCallBack) {
//   myCallBack(x + y);
// }

// myCalculator(10, 10, myDisplayer);

// setTimeout(myFunction, 3000);

// function myFunction() {
//   document.getElementById("temp").textContent = "Hello after 3 sec";
// }

// setTimeout(myFunction(), 3000);

// function myFunction() {
//   document.getElementById("temp").textContent = "Hello immediately";
// }

// setTimeout(() => {
//   document.getElementById("temp").textContent = "Hello after 3 sec";
// }, 3000);

// setInterval(currentTime, 2000);

// function currentTime() {
//   const time = new Date();
//   const Years = time.getFullYear();
//   const months = time.getMonth()+1;
//   const days = time.getDate()
//   const hours = time.getHours();
//   const minutes = time.getMinutes();
//   const seconds = time.getSeconds();
//   document.getElementById("temp").innerHTML += `${hours}:${minutes}  ${days}/${months}/${Years} <br />`;
// }

// class Car {
//   constructor(carName) {
//     this.carName = carName;
//   }
//   static hello(obj) {
//     return "Hello world" + obj.carName;
//   }
//   helloworld() {
//     return "hello world";
//   }
// }

// const myCar = new Car("ford");

// console.log(Car.hello(myCar));

// console.log(x);
// undefined for var
// var x = 10;

// console.log(x);
// refernece error , cant access , TDZ(temp dead zone)
// let x = 10;

// function are fully hosted
// console.log(myName());

// function myName() {
//   return "hassan"
// }

// const myName = () => {
//   return "hassan";
// }

// classess are not hoisted
// ! can't access model before initializaiton
// const myCar = new Model("cadilac");
// console.log(myCar.detail);
// class Model {
//   constructor(carName) {
//     this.carName = carName;
//   }
//   get detail() {
//     return this.carName;
//   }
//   set detail(carName) {
//     this.carName = carName;
//   }

// }

// ! error because property name is same is as getter and setter
// class Model {
//   constructor(car) {
//     this.model = car;
//   }
//   get model() {
//     return this.model;
//   }
//   set model(car) {
//     this.model = model;
//   }
// }
// const myCar = new Model("cadilac");
// console.log(myCar.model);

// * solution is to use _ before property name;
// class Model {
//   constructor(car) {
//     this._model = car;
//   }
//   get model() {
//     return this._model;
//   }
//   set model(car) {
//     this.model = _model;
//   }

// }

// const myCar = new Model("mercedes");
// console.log(myCar.model);

// console.log(myCar);
// myCar.set(2027);
// console.log(myCar);
// console.log(myCar.get);

// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   getCarName() {
//     return "I have " + this.name;
//   }
// }

// class Model extends Car {
//   constructor(name, model, price) {
//     super(name);
//     this.model = model;
//     this.price = price;
//   }
//   getCompleteDetail() {
//     return this.getCarName() + " and model is " + this.model + " and price is " + this.price;
//   }
// }

// const myCar = new Model("Cadilac", 2024, "179000");
// console.log(myCar.getCompleteDetail());

// class Car {
//   constructor(brand, model, price) {
//     this.brandName = brand;
//     this.model = model;
//     this.price = price;
//   }
//   age() {
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear();
//     return currentYear - this.model;
//   }
// }

// const audi = new Car("audi", 2020, "140000");
// const lemborgini = new Car("lamborgin", 2021, "230000");

// // console.log(audi);
// // console.log(lemborgini);
// console.log("audi age: ", audi.age());

// function add() {
//   let count = 0;
//   function plus() {
//     count++;
//   }
//   plus();
//   return count;
// }

// const add = (function () {
//   let count = 0;
//   return function () {
//     count++;
//     return count
//   };
// })();

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

// let a = 10;

// function temp() {
//   let a = 20;
//   a = 20
//   console.log(a);
// }

// temp();
// console.log(a);

// function createCounter() {
//   let counter = 0;
//   return function () {
//     counter++;
//     console.log(counter);
//   }
// }

// const counter1 = createCounter();
// counter1();
// counter1();
// counter1();
// counter1();

// const counter2 = createCounter();
// counter2();
// counter2();
// counter2();
// counter2();

// function outerFunction() {
//   let outerVariable = "I'm outer variable";
//   function innerFunction() {
//     console.log(outerVariable);
//   }
//   return innerFunction;
// }

// let closure = outerFunction();
// closure();

// const person = {
//   firstName: "Hassan",
//   lastName: "Jawed",
//   fullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   }
// }
// let display = person.fullName.bind(person);
// setTimeout(display, 3000); // this lost after calling full name

// const person = {
//   firstName: "Hassan",
//   lastName: "Jawed",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const member = {
//   firstName: "Ahmad",
//   lastName: "Hasaan"
// }

// console.log(person.fullName.bind(member)());
// console.log(person.fullName.call(member));
// console.log(person.fullName.apply(member));

// const fruits = ["apple", "banana", "mango", "strawberry"];

// const ag5883 = {
//   name: "hassan jawed",
//   ag: "2021-ag-5883",
//   semester: 7,
//   married: false,
// };

// const ag5992 = {
//   name: "ahmad",
//   age: 23,
//   semester: 9
// };

// console.log(Math.max(3, 2, 1, 2, 3));
// const values = [3, 2, 1, 2, 3];
// console.log(Math.max(values)); // error
// console.log(Math.max.apply(null, values));
// console.log(Math.max.apply(Math, values));
// console.log(Math.max.apply(0, values));

// const person = {
//   fullDetail: function (gender, country) {
//     return this.firstName + " " + this.lastName + " " + gender + " " + country;
//   }
// };

// const person1 = {
//   firstName: "Hassan",
//   lastName: "Jawed"
// };

// const person2 = {
//   firstName: "Numan",
//   lastName: "Jawed"
// };

// console.log(person.fullDetail.call(person1, "male", "pakistan"))
// console.log(person.fullDetail.apply(person1,["male", "newzeland"]))
// console.log(person.fullDetail.call(person2, "male", "pakistan"))
// console.log(person.fullDetail.apply(person2, ["male", "newzeland"]))

// const person = {
//   fullDetail: function () {
//     return this.firstName + " " + this.lastName;
//   }
// };

// const person1 = {
//   firstName: "Hassan",
//   lastName: "Jawed"
// };

// const person2 = {
//   firstName: "Numan",
//   lastName: "Jawed"
// };

// console.log(person.fullDetail.call(person1))
// console.log(person.fullDetail.apply(person1));
// console.log(person.fullDetail.call(person2))
// console.log(person.fullDetail.apply(person2))

// class ConstructorFunction {
//   constructor(arg1, arg2) {
//     this.firstname = arg1;
//     this.lastname = arg2;
//   }
// };

// const person = new ConstructorFunction("hassan", "jawed");
// console.log(person.firstname);

// function constructorFunction(arg1, arg2) {
//   this.firstname = arg1;
//   this.lastname = arg2;
// }

// const person = new constructorFunction("hassan", "jawed");
// console.log(person.firstname);

// const person = {
//   name: "hassan jawed",
//   detail: function () {
//     return this;
//   }
// }

// console.log(person.detail());

// function temp() {
//   return this;
// }
// console.log(temp());

// function add(a, b) {
//   return a + b;
// }

// console.log(add(10, 20));
// console.log(window.add(10, 20));

// function showName() {
//   alert("Hassan Jawed");
// }

// const showName = function () { alert("Hassan Jawed") };

// const showName = new Function(`() => {${alert("hassna")}}`);

// document.getElementById("btn").addEventListener('click', () => {
//   showNameVar();
// })

// showName();

// function showName() { // hoisted
//   alert("hassan");
// }

// const showName = () => { alert("hassan") }; // not hoisted

// (function showName() { //self invoking function
//   alert("hassan jawed");
// })();

// (function () {  //anonymus self invoking function
//   alert("hassan jawed");
// })();

// function randomValue () {
//   return Math.random() * 10;
// }

// console.log(randomValue() + 100);

// function add(a, b, c) {
//   return a + b + c;
// }

// console.log(typeof (add)); // type is function but more like object
// console.log(add.length);
// console.log(add.toString());

// const sum = (a, b) => a + b;
// console.log(sum(23, 27));

//! not a number NaN | argument length is not checked
// const sum = (a, b) => a + b;
// console.log(sum(23));

//! argument types are not checked
// const sum = (a, b) => a + b;
// console.log(sum(23, "ads"));

//! parameter can't specify data types
// const sum = (a, b) => a + b;
// console.log(sum(23, 23.23));

// ? not a number NaN error
// * solution
// const sum = (a, b = 23) => a + b;
// console.log(sum(23));

// * another solution
// const sum = (a, b) => {
//   if (b === undefined) {
//     b = 10;
//   }
//   return a + b;
// }
// console.log(sum(23));

// ? when someone don't know numbers of parameters
// function sum(...rest) {
//   let total = 0;
//   for (const val of rest) {
//     total += val;
//   }
//   return total;
// }
// console.log(sum(23, 23, 43,34));

// * another solution
// function sum() {
//   let total = 0;
//   for (const val of arguments) {
//     total += val;
//   }
//   return total;
// }
// console.log(sum(23, 23, 43,34, 23));

// let a = 10;
// function changeValue(a) {
//   a = 20;
//   return a;
// }

// const obj = { name: "hassan" };
// const anotherObj = obj;
// anotherObj.name = "jawed";
// console.log(obj);
// console.log(anotherObj)

// const obj = { name: "hassan" };
// function changeValue(obj) {
//   obj.name = "jawed";
// }
// changeValue(obj);
// console.log(obj);

// const obj = { name: "hassan" };
// function changeValue(obj) {
//   obj = { class: "bed" };
// }
// changeValue(obj);
// console.log(obj);

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

// class Header {
//   constructor(color) {
//     this.color = color;
//   };
//   data = function() {
//   console.log(this);
//   }
// }
// const myHeader = new Header("blue");

// window.addEventListener("load", myHeader.data);
// const button = document.getElementById("btn");
// button.addEventListener("click", myHeader.data);
