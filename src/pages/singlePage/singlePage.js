import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./singlePage.css";

const SinglePage = () => {
  const location = useLocation();

  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);
      console.log(res);
    };
    getPost();
  }, [path]);
  return (
    <div className="singleContainer">
      <h1>Salim</h1>
    </div>
  );
};

export default SinglePage;
