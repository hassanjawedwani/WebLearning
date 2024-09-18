import { useParams } from "react-router-dom";

function JobsDescription() {
  const data = useParams();
  const { id } = data;
  return (
    <div>
      <h1>Jobs Description</h1>
      <p>{id}</p>
    </div>
  )
}

export default JobsDescription;