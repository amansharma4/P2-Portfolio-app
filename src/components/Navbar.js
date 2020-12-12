import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar ">
      <Link to="/" className="linkhead">
        <span className="link" style={{ textAlign: "left" }}>
          Aman
        </span>
      </Link>
      <div className="linksalign">
        <Link to="/projects" className="link">
          <span>Projects</span>
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
