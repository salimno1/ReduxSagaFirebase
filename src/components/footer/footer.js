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
        <div></div>
        <div className="dummyicon"></div>
      </div>
    </>
  );
};

export default Footer;
