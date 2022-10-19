import React from "react";
import "./kontakt.css";
import salim from "../../img/salim.jpg";
import lamin from "../../img/lamin.jpg";

const Kontakt = () => {
  return (
    <>
      <div className="kontaktContainer">
        <div className="upperprofilDiv">
          <div>
            <img src={salim} alt="" />
            <h2>Salim Mvoungui</h2>
            <h4>Projekt ansvarig</h4>
            <br />
            <br />
            <h4>Ett citat jag gillar</h4>
            <p>"Talent is everywhere, opportunity is not"</p>
          </div>
          <div>
            {" "}
            <img src={lamin} alt="" />
            <h2>Mariana Montecinos</h2>
            <h4>Projekt ansvarig </h4>
            <br />
            <br />
            <h4>Ett citat jag gillar</h4>
            <p>"Talent is everywhere, opportunity is not"</p>
          </div>
          <div>
            <img src={lamin} alt="" />
            <h2>Lamin Sanneh</h2>
            <h4>Projekt ansvarig</h4>

            <br />
            <br />
            <h4>Ett citat jag gillar</h4>
            <p>"Talent is everywhere, opportunity is not"</p>
          </div>
        </div>
        <div className="lowerSocialMedia">
          <div className="facebookIcon">
            <i class="fa-brands fa-square-facebook"></i>
          </div>
          <div className="instagram">
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div className="email">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div className="linkedin">
            {" "}
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kontakt;
