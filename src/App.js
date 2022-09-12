import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Maincontainer } from "./components/Maincontainer";
import { Hero } from "./components/Hero";
import { Piggybank } from "./components/Piggybank";
import { Card } from "./components/Card";
import { Success } from "./components/Success";
import { Sample } from "./components/Sample";
function App() {
  return (
    <div className="App">
      <Sample />
      {/* <Routes> */}
      {/* <Route path="/" element={<Hero />} /> */}
      {/* <Route path="Piggy" element={<Piggybank />} /> */}
      {/* <Route path="Card" element={<Card />} /> */}
      {/* <Route path="Success" element={<Success />} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
