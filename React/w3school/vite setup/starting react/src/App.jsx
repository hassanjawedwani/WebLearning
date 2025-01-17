// function App() {
//   const fruits = ["apple", "banana", "orange", "pineapple"];
//   return (
//     <>
//       {
//         fruits.map((fruit, index) => <li key={index}>{fruit}</li>)
//       }
//     </>
//   );
// }

import { name, age } from './person.js';
import message from './message.js';


export default function App() {
  // const vehicals = ["mustang", "f-150", "ferari", "expedition"];
  // destructing
  // const car = vehicals[0];
  // const vehical = vehicals[1];
  // const suv = vehicals[2];
  // const [car, vehical, , suv] = vehicals;

  // function calculations(a, b) {
  //   return [a + b, a - b, a * b, a / b];
  // }
  // const [sum, diff, mul, div] = calculations(40, 10);

  // const vehicleDetail = {
  //   brand: 'Ford',
  //   model: 'Mustang',
  //   year: 2021,
  //   color: 'red',
  //   doors: {
  //     front: 'black',
  //     back: "brown"
  //   },
  //   type: 'car'
  // }
  // function details({brand, model, type, doors: { back }}) {
  //   return brand + model + type + back;
  // }
  
  
  // const arr1 = ["apple"];
  // const arr2 = arr1; // referce
  // const arr2 = [...arr1]; // copy by spread operator
  // arr2[0] = "banana";
  // console.log(arr1);
  
  // const fruits = { "apples": 4 };
  //  const fruits2 = fruits;
  // const fruits2 = { ...fruits };
  // fruits2.apples = 8;
  // console.log(fruits);


  // const bros = ["hassan", "numan", "sohail", "shoaib", "umar"];
  // const czns = ["faisal", "bilal", "fahad"];
  // const [bro1, bro2, ...otherBros] = bros;
  // console.log(bro1, bro2, otherBros);
  // const all = [...bros, ...czns];
  // console.log(all);

  // const fruits = {
  //   "apple": 4,
  //   "banana": 8
  // };

  // const vegitables = {
  //   "carrot": 4,
  //   "banana": 20
  // }

  // console.log({...fruits, ...vegitables})
    // console.log(name, age);
    // console.log(message());
  return (
    <>
      <p>
        hhello
      </p>
    </>
  );
}