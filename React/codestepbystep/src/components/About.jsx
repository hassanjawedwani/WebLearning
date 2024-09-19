import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  console.log(location)
  return (
    <div>
      <h1>About</h1>
      <p><strong>pathname: </strong>{location.pathname}</p>
      <p><strong>search: </strong>{location.search}</p>
      <p><strong>hash: </strong>{location.hash}</p>
      <p><strong>state: </strong>{location.state.fromNavbar}</p>
      <p><strong>key: </strong>{location.key}</p>
    </div>
  )
}

export default About;