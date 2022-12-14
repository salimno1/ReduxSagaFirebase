import React from "react";
import bannerPic from "../../img/graf.png";
import "./landingPage.css";
import videoBg from "../../img/filmhemsida.mp4";
import { useNavigate } from "react-router-dom";
import Nyheter from "../nyheter/nyheter";
import Footer from "../../components/footer/footer";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main">
        <div className="overlay">
          {" "}
          <div className="videoContent">
            <div className="videoC">
              <img
                src="https://www.vitarplats.se/img/VI%20TAR%20PLATS-02.png"
                alt=""
              />
            </div>
            <h1
              className="tillsammansLink"
              onClick={() => navigate("/partners")}
            >
              #TILLSAMMANSÃ„RVISTARKA
            </h1>
          </div>
        </div>
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          className="videoPlayer"
        ></video>
      </div>
      <Nyheter />
    </>
  );
}

export default LandingPage;
