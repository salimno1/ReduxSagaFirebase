import React from "react";
import "./latestNew.css";

function LatestNews(item) {
  return (
    <>
      <div className="leftPicDiv">
        <img src={item.post.pic} alt="" />
      </div>
      <div className="rightContainerDiv">
        <div className="timestamp">Måndag 27 okt</div>
        <h1 className="heading">{item.post.name}</h1>
        <div className="content">{item.post.desc}</div>
      </div>
    </>
  );
}

export default LatestNews;
