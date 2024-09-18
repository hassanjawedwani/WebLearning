import { Link } from "react-router-dom";

function Jobs() {
  return (
    <div>
      <h1>Jobs</h1>
      <h2><Link to="/jobs/web-development">Web Development</Link></h2>
      <h2><Link to="/jobs/android-development"> Android Development</Link></h2>
      <h2><Link to="/jobs/ios-development">iOS Development</Link></h2>
    </div>
  )
}

export default Jobs;
