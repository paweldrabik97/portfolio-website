import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class PortfolioItem extends React.Component {
  render() {
    const { imgSrc, imgAlt, title, techStack } = this.props;

    return (
      <div className="portfolio-item">
        <div className="portfolio-item-image">
          <img src={imgSrc} alt={imgAlt} className="portfolio-item-img" />
        </div>
        <div className="portfolio-item-description">
          <h3 className="portfolio-item-title">{title}</h3>
          <div className="portfolio-item-tech-container">
            <div className="portfolio-item-tech">
              {techStack.map((tech, index) => (
                <p key={index} className="portfolio-item-tech-text">
                  {tech}
                </p>
              ))}
            </div>
            <div className="portfolio-item-buttons">
              <a href="http://localhost:5173" className="portfolio-item-btn">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="http://localhost:5173" className="portfolio-item-btn">
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="arrow-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
