import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FooterDetails = () => {
  return (
    <div className="box">
      <a href="https://github.com/amansharma4">
        <FontAwesomeIcon icon={["fab", "github"]} size="2x" className="imgc" />
      </a>
      <a href="https://github.com/amansharma4">
        <FontAwesomeIcon
          icon={["fab", "linkedin"]}
          size="2x"
          className="imgc"
        />
      </a>
      <p>Copyright &copy; 2020 || Aman</p>
    </div>
  );
};

export default FooterDetails;
