import React from "react";
import { info } from "../data";
import "../App.css";
function About() {
  return (
    <div>
      <h2>{info.description}</h2>
      <p className="text">{info.about}</p>
    </div>
  );
}
export default About;
