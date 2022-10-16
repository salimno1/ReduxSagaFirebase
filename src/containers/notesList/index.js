import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LatestNews from "../../components/latestNews/latestNew";
import NewsCard from "../../components/newsCard/newsCard";
import { initGetListData } from "./store/actions";
import "./style.css";

const NotesList = () => {
  const dispatch = useDispatch();
  const { notesList, isNotesDataFetching } = useSelector(
    (state) => state.NotesListReducer
  );

  useEffect(() => {
    dispatch(initGetListData());
  }, []);

  if (isNotesDataFetching) {
    <div>data is fethcing</div>;
  }
  return (
    <>
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
          <div className="latestNewsWrapper">
            <div className="sectionHeader1">
              <h2 className="sectionTitle1">Senaste</h2>
            </div>
            {notesList &&
              notesList.map((item) => (
                <div className="LatestHolder">
                  <LatestNews post={item} />
                </div>
              ))}
          </div>
        </div>
        <div className="rightNewsContainer"></div>
      </div>
    </>
  );
};

export default NotesList;
