import "./App.css";

import React from "react";

import { Routes, Route, Outlet } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Candy from "./Candy";
import Chips from "./Chips";
import Water from "./Water";

import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<VendingMachine />}></Route>

        <Route path="/candy" element={<Candy />}></Route>
        <Route path="/chips" element={<Chips />}></Route>
        <Route path="/water" element={<Water />}></Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
