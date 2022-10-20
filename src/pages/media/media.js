import React from "react";
import "./media.css";

const Media = () => {
  return (
    <>
      <div className="mediaContainer">
        <h1>Östbergadagen 2022</h1>
        <iframe
          width="1000"
          height="515"
          src="https://www.youtube-nocookie.com/embed/GzsJ-Z1mQ0s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h1>Sommar med VI TAR PLATS 2021</h1>
        <iframe
          width="1000"
          height="515"
          src="https://www.youtube.com/embed/f_kB2Lf5Bio"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <h1>Östberga Tv reportage om VI TAR PLATS</h1>
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/607464023?h=52fcbf5a56"
          width="1000"
          height="515"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default Media;
