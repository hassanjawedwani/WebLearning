import { useEffect } from "react";

const Child = (props) => {
  useEffect(() => {
    console.log("useEffect called on count prop change");
  }, [props.count])
  return (
    <div>
      
    </div>
  );
};

export default Child;