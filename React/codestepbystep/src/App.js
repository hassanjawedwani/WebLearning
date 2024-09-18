import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Page404 from "./components/Page404";
import Jobs from "./components/Jobs";
import JobsDescription from "./components/JobsDescription";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobsDescription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;