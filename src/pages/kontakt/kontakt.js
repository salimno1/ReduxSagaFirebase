import React from "react";
import "./kontakt.css";
import salim from "../../img/salim.jpg";
import lamin from "../../img/lamin.jpg";

const Kontakt = () => {
  return (
    <>
      <div className="kontaktContainer">
        <div className="upperprofilDiv">
          <div className="textProfil">
            <img src={salim} alt="" />
            <h2>Salim Mvoungui</h2>
            <h4>Projekt ansvarig</h4>
            <br />
            <h4>Yrke</h4>
            <p>"Fontend utvecklare"</p>
            <br /> <br />
            <h4>Ett citat jag gillar</h4>
            <p>"Talent is everywhere, opportunity is not"</p>
            <br />
          </div>
          <div>
            {" "}
            <div className="textProfil">
              <img src={lamin} alt="" />
              <h2>Mariana Montecinos</h2>
              <h4>Projekt ansvarig </h4>
              <br />

              <h4>Yrke</h4>
              <p>"Fritidsgårdsföreståndare"</p>
              <br />
              <br />
              <h4>Ett citat jag gillar</h4>
              <p>"Talent is everywhere, opportunity is not"</p>
            </div>
          </div>
          <div>
            <div className="textProfil">
              <img src={lamin} alt="" />
              <h2>Lamin Sanneh</h2>
              <h4>Projekt ansvarig</h4>
              <br />
              <h4>Yrke</h4>
              <p>"Social pedagog"</p>
              <br /> <br />
              <h4>Ett citat jag gillar</h4>
              <p>"Talent is everywhere, opportunity is not"</p>
            </div>
          </div>
        </div>
        <div className="lowerDivContact">
          <h1>VITARPLATS@GMAIL.COM </h1>
          <a href="mailto:vitarplats@gmail.com">
            <i class="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Kontakt;
