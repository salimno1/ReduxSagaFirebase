import React, { useEffect } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/footer";
import LatestNews from "../../components/latestNews/latestNew";
import NewsCard from "../../components/newsCard/newsCard";
import { initGetListData } from "./store/actions";
import { LinkedInEmbed } from "react-social-media-embed";

import "./style.css";

const NotesList = () => {
  const dispatch = useDispatch();
  const { notesList, isNotesDataFetching } = useSelector(
    (state) => state.NotesListReducer
  );

  useEffect(() => {
    dispatch(initGetListData());
    console.log(notesList);
  }, []);

  if (isNotesDataFetching) {
    <div>data is fethcing</div>;
  }
  return (
    <>
      <div className="nyheterContainer">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Nyheter</h2>
        </div>
        <div className="notes-list-wrapper">
          {notesList &&
            notesList.map((item) => (
              <div className="postContainer">
                <NewsCard post={item} />
              </div>
            ))}
        </div>

        <div className="latestNewsContainer">
          <div className="leftnewsContainer">
            <div className="sectionHeader1">
              <h2 className="sectionTitle1">Senaste</h2>
            </div>
            <div className="latestNewsWrapper">
              {notesList &&
                notesList.map((item) => (
                  <div className="LatestHolder">
                    <LatestNews post={item} />
                  </div>
                ))}
            </div>
          </div>
          <div className="rightNewsContainer">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "25px",
              }}
            >
              <InstagramEmbed
                url="https://www.instagram.com/p/CjtJUmjjVcQ/?utm_source=ig_web_copy_link"
                width={328}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "25px",
              }}
            >
              <InstagramEmbed
                url="https://www.instagram.com/p/CjkFC7FDMao/?utm_source=ig_web_copy_link"
                width={328}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "25px",
              }}
            >
              <InstagramEmbed
                url=" https://www.instagram.com/p/CjTFKuTDn5z/?utm_source=ig_web_copy_link"
                width={328}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesList;
