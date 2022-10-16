import React, { useRef, useState } from "react";
import "./header.css";

function Nav() {
  const menuRef = useRef();
  const [isActive, setActive] = useState("false");

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
              <a href="" className="menu_link">
                Hem
              </a>
            </li>
            <li className="menu_item">
              <a href="" className="menu_link link1">
                Nyheter
              </a>
            </li>
            <li className="menu_item">
              <a href="" className="menu_link link2">
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
