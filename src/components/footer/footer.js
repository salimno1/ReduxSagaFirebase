import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";
import vtplogo from "../../img/vtp.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div className="HeaderIcons">
        <img src={vtplogo} alt="" onClick={() => navigate("/")} />
        <div>
          <div className="socialIconz">
            <div className="facebookIcon">
              <a href="https://www.facebook.com/vitarplats" target="_blank">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
            </div>
            <div className="instagram">
              <a
                href="https://www.instagram.com/vitarplatsostberga/?hl=en"
                target="_blank"
              >
                {" "}
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>

            <div className="linkedin">
              {" "}
              <a
                href="https://www.linkedin.com/company/vi-tar-plats/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="dummyicon"></div>
      </div>
    </>
  );
};

export default Footer;
