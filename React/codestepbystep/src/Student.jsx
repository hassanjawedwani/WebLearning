import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Child from "./Child";

function Student() {
  const students = [
    {
      rollno: 1,
      name: "John Doe",
      email: "john@example.com",
      address: [
        {
          type: "home",
          address: "123 Main St, City A",
          country: "USA",
        },
        {
          type: "work",
          address: "456 Work St, City A",
          country: "USA",
        },
      ],
    },
    {
      rollno: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      address: [
        {
          type: "home",
          address: "789 Elm St, City B",
          country: "USA",
        },
        {
          type: "work",
          address: "101 Pine St, City B",
          country: "USA",
        },
      ],
    },
    {
      rollno: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      address: [
        {
          type: "home",
          address: "102 Maple St, City C",
          country: "Canada",
        },
        {
          type: "work",
          address: "202 Cedar St, City C",
          country: "Canada",
        },
      ],
    },
    {
      rollno: 4,
      name: "Bob Brown",
      email: "bob@example.com",
      address: [
        {
          type: "home",
          address: "345 Oak St, City D",
          country: "UK",
        },
        {
          type: "work",
          address: "678 Willow St, City D",
          country: "UK",
        },
      ],
    },
    {
      rollno: 5,
      name: "Charlie Davis",
      email: "charlie@example.com",
      address: [
        {
          type: "home",
          address: "234 Birch St, City E",
          country: "Australia",
        },
        {
          type: "work",
          address: "567 Aspen St, City E",
          country: "Australia",
        },
      ],
    },
    {
      rollno: 6,
      name: "Diana Evans",
      email: "diana@example.com",
      address: [
        {
          type: "home",
          address: "101 Sycamore St, City F",
          country: "India",
        },
        {
          type: "work",
          address: "202 Cypress St, City F",
          country: "India",
        },
      ],
    },
    {
      rollno: 7,
      name: "Ethan White",
      email: "ethan@example.com",
      address: [
        {
          type: "home",
          address: "345 Chestnut St, City G",
          country: "Germany",
        },
        {
          type: "work",
          address: "678 Redwood St, City G",
          country: "Germany",
        },
      ],
    },
    {
      rollno: 8,
      name: "Fiona Green",
      email: "fiona@example.com",
      address: [
        {
          type: "home",
          address: "789 Walnut St, City H",
          country: "France",
        },
        {
          type: "work",
          address: "101 Oakwood St, City H",
          country: "France",
        },
      ],
    },
    {
      rollno: 9,
      name: "George Lee",
      email: "george@example.com",
      address: [
        {
          type: "home",
          address: "456 Maplewood St, City I",
          country: "China",
        },
        {
          type: "work",
          address: "123 Pinewood St, City I",
          country: "China",
        },
      ],
    },
    {
      rollno: 10,
      name: "Hannah Clark",
      email: "hannah@example.com",
      address: [
        {
          type: "home",
          address: "678 Cedarwood St, City J",
          country: "Japan",
        },
        {
          type: "work",
          address: "345 Redwood St, City J",
          country: "Japan",
        },
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-center mt-3 mb-3">Student Data</h1>
      {
        students.map((student) => (
          <Child student={student} />
        ))
      }
      {/* <Table variant="dark" striped>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.rollno}>
              <td>{student.rollno}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>
                {student.address.map((address) => (
                  <div key={address.type}>
                    {address.type},{address.address},{address.country},
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}
    </div>
  );
}

export default Student;
