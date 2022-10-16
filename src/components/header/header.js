import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const menuRef = useRef();
  const [isActive, setActive] = useState("");

  const handleToggle = () => {
    setActive((isActive) => !isActive);
  };

  let toggleClassCheck = isActive ? " is-active" : "";

  console.log(isActive);
  return (
    <>
      <a className={`btn${toggleClassCheck}`} onClick={handleToggle}>
        <span></span>
        <span></span>
      </a>
      <div className={`menu${toggleClassCheck}`}>
        <div className="container bg">
          <ul className="menu_list">
            <li className="menu_item">
              <a href="" className="menu_link" onClick={() => navigate("/")}>
                Hem
              </a>
            </li>
            <li className="menu_item">
              <a
                href=""
                className="menu_link link1"
                onClick={() => navigate("/nyheter")}
              >
                Nyheter
              </a>
            </li>
            <li className="menu_item">
              <a href="" className="menu_link link2">
                media
              </a>
            </li>
            <li className="menu_item">
              <a href="" className="menu_link link5">
                verksamheter
              </a>
            </li>
            <li className="menu_item">
              <a href="" className="menu_link link3">
                samarbete
              </a>
            </li>
            <li className="menu_item">
              <a href="" className="menu_link link4">
                kontakt
              </a>
            </li>
          </ul>
          <div className="right-pic">
            <img
              src="https://www.vitarplats.se/img/VI%20TAR%20PLATS-02.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
