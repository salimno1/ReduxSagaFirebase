import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./singlePage.css";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

const SinglePage = () => {
  const [post, setPost] = useState("");
  const location = useLocation();
  const shareUrl = "https://www.npmjs.com/package/react-share";
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);

      setPost(res.data);
    };

    getPost();
  }, [path]);
  const dateNow = post.createdAt;
  const date = new Date(dateNow);
  return (
    <div className="singleContainer">
      {" "}
      <div className="containerX">
        <h1>{post.header}</h1>
        <h3>{post.miniDesc}</h3>
        <div className="timestamp">{date.toLocaleDateString()}</div>
        <div className="upperSingleContainer">
          <img src={post.pic} alt="" className="postPic" />
          <div className="socialShare">
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={30} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl}>
              <TwitterIcon size={30} round={true} />
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl}>
              <LinkedinIcon size={30} round={true} />
            </LinkedinShareButton>
          </div>
        </div>
        <div className="postText">{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePage;
