import { Link } from "react-router-dom";

function Page404() {
  return (
    <div>
      <h1>Page 404 error</h1>
      <p>Seems like this page does not exist!</p>
      <p>Go to Home Page <Link to="/">Home</Link></p>
    </div>
  )
}

export default Page404;