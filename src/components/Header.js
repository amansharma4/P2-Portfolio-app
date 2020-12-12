import React from "react";
import { info } from "../data";
import pic from "../img/pic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div>
      <div className="about">
        <img className="image" src={pic} alt="profilePic" />
        <h2>{info.name}</h2>
        <p>{info.description}</p>

        <h3>Skills</h3>
        <div className="box-container">
          <FontAwesomeIcon icon={["fab", "js"]} size="5x" className="imgc" />

          <FontAwesomeIcon icon={["fab", "react"]} size="5x" className="imgc" />

          <FontAwesomeIcon
            icon={["fab", "github"]}
            size="5x"
            className="imgc"
          />

          <FontAwesomeIcon icon={["fab", "node"]} size="5x" />
        </div>
      </div>
    </div>
  );
}

export default Header;
