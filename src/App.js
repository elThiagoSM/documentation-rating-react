import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Documentation from "./components/Documentation";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation/*" element={<Documentation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
