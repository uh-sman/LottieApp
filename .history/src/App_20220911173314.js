import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Maincontainer } from "./components/Maincontainer";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route to="/" element={<Maincontainer />} />
      </Routes>
    </div>
  );
}

export default App;
