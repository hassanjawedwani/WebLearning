import React from "react";

export function Student({ name, email, address }) {
  return (
    <div>
      <h1>Student Data</h1>
      <p>Student Name: {name}</p>
      <p>Student Email: {email}</p>
      <p>Student Address: {address}</p>
    </div>
  );
}