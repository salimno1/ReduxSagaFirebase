import React from "react";
import ideer from "../../img/ideer.png";
import lorans from "../../img/lorans.png";
import svea from "../../img/svea.png";
import dyno from "../../img/dyno.png";
import sthlm from "../../img/sthlm.png";
import ost from "../../img/ostlogga.png";
import blue from "../../img/blue.png";
import moai from "../../img/moai.png";
import relevant from "../../img/relevant.png";

import "./partners.css";
export const Partners = () => {
  return (
    <>
      <div className="partnerContainer">
        <div className="partnerLogo">
          <a href="https://www.lorans.se/" target="_blank">
            {" "}
            <img src={lorans} alt="" />
          </a>
          <a href="https://www.dyno-security.se/#home" target="_blank">
            <img src={dyno} alt="" />
          </a>
          <a href="https://sveafastigheter.se/" target="_blank">
            <img src={svea} alt="" />
          </a>
          <a href="https://start.stockholm/" target="_blank">
            <img src={sthlm} alt="" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCwoi01MDIiiLAt9_RV-E6zg"
            target="_blank"
          >
            {" "}
            <img src={relevant} alt="" />
          </a>
          <a
            href="https://kultur.stockholm/kulturhus/ostberga-kulturhus/"
            target="_blank"
          >
            <img src={ost} alt="" />
          </a>
          <a href="https://www.byggvesta.se/" target="_blank">
            <img src={blue} alt="" />
          </a>
          <a
            href="https://www.instagram.com/moaiorganics/?hl=en"
            target="_blank"
          >
            <img src={moai} alt="" />
          </a>
          <a href="https://www.ideerforlivet.se/" target="_blank">
            {" "}
            <img src={ideer} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};
