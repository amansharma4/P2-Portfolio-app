import React from "react";
import info from "../data";
import pic from "../img/pic.jpeg";

function Header() {
  return (
    <div>
      <div className="about">
        <img className="image" src={pic} alt="profilePic" />
        <h2>{info.name}</h2>
        <p>{info.description}</p>

        <h3>Skills</h3>
        <div className="box-container">
          <img
            class="imgc"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
            alt="js"
          />

          <img class="imgc" src="https://reactjs.org/logo-og.png" alt="react" />

          <img
            class="imgc"
            src="https://miro.medium.com/max/640/1*-ivYkzeuYJedPKdEdfnNlg.png"
            alt="mongodb"
          />
          <img
            class="imgc"
            src="https://miro.medium.com/max/2560/1*MuVcoMPyJcq8G4qf5s3HGQ.png"
            alt="nodejs"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
