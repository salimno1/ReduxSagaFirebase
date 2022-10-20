import React from "react";
import "./footer.css";
import vtplogo from "../../img/vtp.png";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="HeaderIcons">
        <img src={vtplogo} alt="" />
        <div>
          <div className="socialIconz">
            <div className="facebookIcon">
              <i class="fa-brands fa-square-facebook"></i>
            </div>
            <div className="instagram">
              <i class="fa-brands fa-instagram"></i>
            </div>

            <div className="linkedin">
              {" "}
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
        <div className="dummyicon"></div>
      </div>
    </>
  );
};

export default Footer;
