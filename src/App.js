import React from "react";
import Navbar from "./components/Navbar"
import About from "./components/About"
import CardTeam from "./components/CardTeam";
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Navbar /> }></Route>
        <Route path="/about" element={ <About /> }></Route>
        <Route path="/teams/:teamId" element={ <CardTeam />}></Route>
      </Routes>
    </div>
  );
}

export default App
