const Child = ({showAlert}) => {
  return (
    <div>
      <button onClick={() => showAlert("Child Component")}>Click Me</button>
    </div>
  );
};

export default Child;