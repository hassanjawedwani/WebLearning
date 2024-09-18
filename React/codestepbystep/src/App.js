import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Page404 from "./components/Page404";
import Jobs from "./components/Jobs";
import JobsDescription from "./components/JobsDescription";
import Filter from "./components/Filter";
import Frontend from "./components/Frontend";
import Backend from "./components/Backend";
import FullStack from "./components/FullStack";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/jobs/" element={<Jobs />} >
          <Route path="frontend" element={<Frontend />} />
          <Route path="backend" element={<Backend />} />
          <Route path="fullstack" element={<FullStack />} />
        </Route>
        <Route path="/jobs/:id" element={<JobsDescription />} />
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;