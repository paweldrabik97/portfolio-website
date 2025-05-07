import React, { useState } from "react";
import "./Styles/App.scss";
import Btn from "./Components/Btn/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";
import BackgroundGrid from "./Components/BackgroundGrid/BackgroundGrid";
import TechnologySection from "./Components/TechnologySection/TechnologySection";
import PortfolioSection from "./Components/PortfolioSection/PortfolioSection";
import TestimonialsSlider from "./Components/TestimonialsSlider/TestimonialsSlider";

function App() {
  return (
    <>
      <div className="main-banner" id="home">
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
      <BackgroundGrid />
      <div className="current-technologies">
        <h1 className="current-technologies-h1">Current technologies</h1>
        <p className="current-technologies-p">
          I'm proficient in a range of modern technologies that empower me to
          build highly functional solutions. These are some of my main
          technologies.
        </p>
        <TechnologySection />
      </div>
      <div className="my-portfolio">
        <h2 className="my-portfolio-h2">My portfolio</h2>
        <PortfolioSection />
      </div>
      <div className="reviews-section">
        <div className="stars">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <TestimonialsSlider />
      </div>
    </>
  );
}

export default App;
