import React, { useEffect } from "react";
import "./newsCard.css";

function NewsCard(item) {
  console.log(item);
  return (
    <div className="newsCardContainer">
      <div className="topDiv">
        <img src={item.post.pic} alt="" />
      </div>
      <div className="upperDiv">{item.post.header}</div>
      <div className="lowerDiv">{item.post.createdAt}</div>
    </div>
  );
}

export default NewsCard;
