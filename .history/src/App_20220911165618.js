import "./App.css";
import { useState } from "react";
import { Hero } from "./components/Hero";
import { Maincontainer } from "./components/Maincontainer";
import DemoTabs from "./components/Sample";
import { Routes, Route, Link } from "react-router-dom";
import { Piggybank } from "./components/Piggybank";
import { Card } from "@material-ui/core";

function App() {
  const [state, setState] = useState(false);
  return (
    <div className="App">
      {/* <Hero /> */}
      <Routes>
        <Route path="/Card" element={<Card />} />
        <Route path="/" element={<Hero />} />
        <Route path="/Piggybank" element={<Piggybank />} />
      </Routes>
      {/* <DemoTabs /> */}
      {/* <Link to="/Hero">{state ? "< Prev" : "Next >"}</Link> */}
    </div>
  );
}

export default App;
