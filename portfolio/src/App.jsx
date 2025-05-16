import React, { useState } from "react";
import "./Styles/App.scss";
import Btn from "./Components/Btn/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import BackgroundGrid from "./Components/BackgroundGrid/BackgroundGrid";
import TechnologySection from "./Components/TechnologySection/TechnologySection";
import PortfolioSection from "./Components/PortfolioSection/PortfolioSection";
import TestimonialsSlider from "./Components/TestimonialsSlider/TestimonialsSlider";
import StarBackground from "./Components/StarBackground/StarBackground";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
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
          <Btn url="#work" text="See my work" />
          <span className="cv-container">
            <a href="http://localhost:5173" className="cv">
              <FontAwesomeIcon icon={faDownload} />
              <span className="cv-text">Download CV</span>
            </a>
          </span>
        </div>
      </div>
      <BackgroundGrid />
      <div className="current-technologies" id="about">
        <h1 className="current-technologies-h1">Current technologies</h1>
        <p className="current-technologies-p">
          I'm proficient in a range of modern technologies that empower me to
          build highly functional solutions. These are some of my main
          technologies.
        </p>
        <TechnologySection />
      </div>
      <div className="my-portfolio" id="work">
        <h2 className="my-portfolio-h2">My portfolio</h2>
        <PortfolioSection />
      </div>
      <div className="education">
        <h2 className="education-h2">Education</h2>
        <div className="education-content">
          <div className="education-item">
            <h3 className="education-item-title">Engineering Degree Student</h3>
            <h4 className="education-item-field">Computer Science</h4>
            <p className="education-item-description">
              WSEI College of Economics and Informatics, Krakow, Poland
            </p>
            <p className="education-item-date">2024 - 2028</p>
          </div>
        </div>
      </div>
      <div className="reviews-section">
        <div className="testimonial-stars">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <TestimonialsSlider />
      </div>
      <div className="footer-container" id="contact">
        <div className="footer-text">
          <div className="contact-div">
            <h3 className="contact-header">
              Like what you see? Reach out via email to collaborate!
            </h3>
            <Btn
              url="mailto:paweldrabik97@gmail.com"
              text="Contact me"
              target="_blank"
            />
          </div>
          <div className="footer-credits">
            <div className="footer-rights">
              <p>© {new Date().getFullYear()} Paweł Drabik.</p>
              <p>All rights reserved.</p>
            </div>
            <div className="footer-nav">
              <a
                href="https://github.com/paweldrabik97"
                className="footer-nav-link"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/pawel-drabik/"
                className="footer-nav-link"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="star-background">
            <StarBackground />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
