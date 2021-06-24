import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navArea">
      <Link to="/">Home</Link>      
      <br/>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
