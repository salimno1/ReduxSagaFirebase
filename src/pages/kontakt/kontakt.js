import React from "react";
import "./kontakt.css";
import salim from "../../img/salim.jpg";
import lamin from "../../img/lamin.jpg";
import { SocialIcon } from "react-social-icons";

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
              <img
                src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/307730135_1549711545483576_1512259872824296957_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=cyfuGUCFp_wAX9Yx3Uz&_nc_ht=scontent-arn2-1.xx&oh=03_AdQfYHeY36phh7KWNe7I2i6NAcwWNFaLavpdQf-_vleJ_g&oe=637B1E10"
                alt=""
              />
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
          <a href="mailto:vitarplats@gmail.com"></a>
          <h1>VITARPLATS@GMAIL.COM </h1>

          <div className="socialIconz">
            <div className="facebookIcon">
              <SocialIcon url="https://www.facebook.com/vitarplats" />
            </div>
            <div className="instagram">
              <SocialIcon url="https://www.linkedin.com/company/vi-tar-plats/" />
            </div>

            <div className="linkedin">
              {" "}
              <SocialIcon url="https://www.instagram.com/vitarplatsostberga/" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kontakt;
