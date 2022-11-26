import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
    </div>
  );
}

export default Home;
