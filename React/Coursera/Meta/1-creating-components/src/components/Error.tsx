const Error = () => {
  const convertToUpperCase = (s: string): void => {
    try {
      const result = s.toUpperCase();
      console.log(result);
    } catch (err) {
      console.log("you can't convert a number to string", err);
    }
    return;
  };

  convertToUpperCase("asfd");
  return (
    <div>
      <div>my name in uppercase is </div>
    </div>
  );
};

export default Error;
