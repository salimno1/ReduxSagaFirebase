import React, { useEffect } from "react";
import "./newsCard.css";

function NewsCard(item) {
  return (
    <div className="newsCardContainer">
      <div className="topDiv">
        <img src={item.post.pic} alt="" />
      </div>
      <div className="upperDiv">{item.post.name}</div>
      <div className="lowerDiv">salimo</div>
    </div>
  );
}

export default NewsCard;
