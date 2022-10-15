import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <ul>
        <li>
          {" "}
          <Link to={"/"}>Notes Lis</Link>
        </li>

        <li>
          {" "}
          <Link to={"/add-new-note"}>Add New Notes</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
