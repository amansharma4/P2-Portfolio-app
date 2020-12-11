import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <span className="link" style={{ textAlign: "left" }}>
          Aman Sharma
        </span>
      </Link>

      <div className="linksalign">
        <Link to="/projects">
          <span className="link">Projects</span>
        </Link>
        <Link to="/blog" className="link">
          Blog
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
