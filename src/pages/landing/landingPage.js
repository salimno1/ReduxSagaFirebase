import React from "react";
import bannerPic from "../../img/graf.png";
import "./landingPage.css";
import videoBg from "../../img/filmhemsida.mp4";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="menuBg"></div>
      <div className="main">
        <div className="overlay"></div>
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          className="videoPlayer"
        ></video>
        <div className="videoContent">
          <div className="videoC">
            <img
              src="https://www.vitarplats.se/img/VI%20TAR%20PLATS-02.png"
              alt=""
            />
          </div>
          <h1 className="tillsammansLink" onClick={() => navigate("/partners")}>
            #TILLSAMMANSÄRVISTARKA
          </h1>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
