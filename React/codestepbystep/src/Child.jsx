import React from "react";

const Child = ({ student }) => {
  return (
    <React.Fragment>
      <p>{student.rollno}</p>
      <p>{student.name}</p>
      <p>{student.email}</p>
      <p>
        {student.address[0].type} - {student.address[0].address} -{" "}
        {student.address[0].country}
      </p>
      <p>
        {student.address[1].type} - {student.address[1].address} -{" "}
        {student.address[1].country}
      </p>
    </React.Fragment>
  );
};

export default Child;