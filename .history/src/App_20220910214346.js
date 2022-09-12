import "./App.css";
import { Hero } from "./components/Hero";
import { Maincontainer } from "./components/Maincontainer";
import DemoTabs from "./components/Sample";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Hero /> */}
      <Maincontainer />
      {/* <DemoTabs /> */}
    </div>
  );
}

export default App;
