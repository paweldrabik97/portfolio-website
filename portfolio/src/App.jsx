import { useState } from "react";
import "./Styles/App.scss";
import Btn from "./Components/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div className="main-banner">
        <div className="main-banner-subtitle">
          <p>BASED IN KRAKOW, POLAND</p>
        </div>
        <div className="main-banner-title">
          <span className="title-1">Quality </span>
          <span className="title-2">Design </span>
          <span className="title-3">& </span>
          <span className="title-4">Web </span>
          <span className="title-5">Development </span>
          <span className="title-6">Synergy</span>
        </div>
        <div className="main-banner-description">
          <p>
            Hi, I'm Paweł, I create intuitive, visually stunning and highly
            functional web applications.
          </p>
        </div>
        <div className="main-banner-buttons">
          <Btn url="http://localhost:5173" text="See my work" />
          <span className="cv-container">
            <a href="http://localhost:5173" className="cv">
              <FontAwesomeIcon icon={faDownload} />
              <span className="cv-text">Download CV</span>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
