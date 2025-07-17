import { Route, Routes } from "react-router";
import Home from "./components/Home";
import sirHitesh from "../src/assets/ls.mp4";
import ReactPlayer from "react-player";

const MyVideo = () => {
  return (
    <div>
      <ReactPlayer src="https://www.youtube.com/watch?v=T8TZQ6k4SLE" controls playing={true} volume={0.5} />
      <ReactPlayer src={sirHitesh}  controls/>

    </div>
  );
};

const App = () => {
  return (
    <div>
      <MyVideo />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
