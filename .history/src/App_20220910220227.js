import "./App.css";
import { Hero } from "./components/Hero";
import { Maincontainer } from "./components/Maincontainer";
import DemoTabs from "./components/Sample";
import { Routes, Route, Link } from "react-router-dom";
import { Piggybank } from "./components/Piggybank";

function App() {
  return (
    <div className="App">
      {/* <Hero /> */}
      <Routes>
        <Route path="/" element={<Maincontainer />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/Piggybank" element={<Piggybank />} />
      </Routes>
      {/* <DemoTabs /> */}
      <Link to="/Hero">{state ? "< Prev" : "Next >"}</Link>
    </div>
  );
}

export default App;
