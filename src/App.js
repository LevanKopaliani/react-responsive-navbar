import React from "react";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Link to="home">Home</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
    </>
  );
}

export default App;
