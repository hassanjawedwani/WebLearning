// function Student(name, age)  {
//   this.name = name;
//   this.age = age;
// }

// Student.prototype.detail = function () {
//   console.log(this.name, this.age);
// }

// const std1 = new Student("hassan", 23);

// console.log(std1.detail());



// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// Student.prototype.detail = function () {
//   console.log(this.name, this.age);
// }

// const std1 = new Student("hassan", 23);
// const std2 = new Student("numan", 21);

// console.log(std1);
// console.log(std2);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// arr1.sayHello = function () {
//   console.log("hello g");
// }
// console.log(arr1.sayHello());
// console.log(arr2.sayHello());
// Error sayHello is not a function


// * Reference or you can say a copy
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// arr1.__proto__.sayHello = function () {
//   console.log("hello g");
// }
// it will add sayHello to Array
// console.log(arr1.sayHello());
// console.log(arr2.sayHello());
// console.log(arr1.sayHello === arr2.sayHello);
// true
// console.log(arr1);
// console.log(arr2);
// ? now let's check original Array object does have a sayHello() ?
// console.log(Array.prototype)


// * Actual Object
// Array.prototype


// const arr = [1, 2, 3];
// arr.__proto__.push = (n) => {
//   console.log("fuck", n);
// }
// arr.push(4);


// Factory Function
// function StudentMaker(name, age) {
//   const student = {
//     name: name,
//     age: age,
//     talk() {
//       console.log("hello");
//     }
//   }
//   return student;
// }

// const roll_1 = StudentMaker("hassan", 23);
// const roll_2 = StudentMaker("Numan", 21);

// Constructor Function
// function StudentMaker(name, age) {
//   this.name = name;
//   this.age = age;
// }

// StudentMaker.prototype.talk = function () {
//   console.log(`Hello my name is ${this.name}`);
// }

// const roll_1 = new StudentMaker("hassan", 23);
// const roll_2 = new StudentMaker("Numan", 21);

// console.log(roll_1.talk());
// console.log(roll_2.talk());


// Classes
// class StudentMaker {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   talk() {
//     console.log(`Hello my name is ${this.name}`);
//   }
// }

// const roll_1 = new StudentMaker("hassaan", 23);
// const roll_2 = new StudentMaker("Numaan", 21);
 
// console.log(roll_1.talk());
// console.log(roll_2.talk());
// console.log(roll_1.talk === roll_2.talk);
// true


class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hello my name is ${this.name} and age is ${this.age}`);
  }
}

class Teacher extends Student {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  teacherTalk() {
    this.talk();
    console.log(`my subject is ${this.subject}`);
  }
}

const sirAhmad = new Teacher("ahmad", 23, "science");
console.log(sirAhmad.teacherTalk());