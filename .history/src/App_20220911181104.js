import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Maincontainer } from "./components/Maincontainer";
import { Hero } from "./components/Hero";
import { Piggybank } from "./components/Piggybank";
import { Card } from "@material-ui/core";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/" element={<Piggybank />} />
        <Route path="/" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
