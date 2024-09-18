import { Link, Outlet, useNavigate } from "react-router-dom";

function Jobs() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Jobs</h1>
      <h2><Link to="/jobs/web-development">Web Development</Link></h2>
      <h2><Link to="/jobs/android-development"> Android Development</Link></h2>
      <h2><Link to="/jobs/ios-development">iOS Development</Link></h2>

      <h2>Jobs with buttons</h2>
      <button type="button" onClick={() => navigate("/jobs/web-development")}>Web Development</button>  
      <button type="button" onClick={() => navigate("/jobs/android-development")}>Android Development</button>  
      <button type="button" onClick={() => navigate("/jobs/ios-development")}>IOS Development</button>  

      <h2>Web Development Categories</h2>
      <h2><Link to="frontend">Frontend</Link></h2>
      <h2><Link to="backend">Backend</Link></h2>
      <h2><Link to="fullstack">Fullstack</Link></h2>
      <Outlet />
    </div>
  )
}

export default Jobs;
