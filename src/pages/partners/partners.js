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
        <div className="partnerText">
          <h2>
            Vill ni vara med och påverka barn och unga i deras resa genom livet.
            <br></br>
            Tveka inte på att höra av er till oss för ett eventuellt samarbete.
            <br></br>
            <br></br>
            <br></br>
            Din hjälp kan bli den avgörande skillnaden.
          </h2>
        </div>
        <div className="partnerLogo">
          <img src={lorans} alt="" />
          <img src={dyno} alt="" />
          <img src={svea} alt="" />
          <img src={sthlm} alt="" />
          <img src={relevant} alt="" />
          <img src={ost} alt="" />
          <img src={blue} alt="" />
          <img src={moai} alt="" />

          <img src={ideer} alt="" />
        </div>
      </div>
    </>
  );
};
