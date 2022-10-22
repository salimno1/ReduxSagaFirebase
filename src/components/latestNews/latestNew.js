import React from "react";
import { Link } from "react-router-dom";
import "./latestNew.css";

function LatestNews(item) {
  return (
    <>
      <div className="leftPicDiv">
        <img src={item.post.pic} alt="" />
      </div>
      <div className="rightContainerDiv">
        <div className="timestamp">{item.post.createdAt}</div>
        <h1 className="heading">{item.post.username}</h1>
        <Link to={`/post/${item.post._id}`}>
          {" "}
          <div className="content">{item.post.desc}</div>
        </Link>
      </div>
    </>
  );
}

export default LatestNews;
