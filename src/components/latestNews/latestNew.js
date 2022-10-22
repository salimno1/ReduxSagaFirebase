import React from "react";
import { Link } from "react-router-dom";
import "./latestNew.css";

function LatestNews(item) {
  const dateNow = item.post.createdAt;
  const date = new Date(dateNow);
  return (
    <>
      <div className="leftPicDiv">
        <img src={item.post.pic} alt="" />
      </div>
      <div className="rightContainerDiv">
        <div className="timestamp">{date.toLocaleDateString()}</div>

        <Link to={`/post/${item.post._id}`}>
          {" "}
          <h1 className="heading">{item.post.header}</h1>{" "}
        </Link>
        <div className="content">{item.post.desc}</div>
      </div>
    </>
  );
}

export default LatestNews;
