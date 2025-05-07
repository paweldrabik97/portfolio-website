import React from "react";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import "./styles.scss";

const PortfolioSection = () => {
  return (
    <div className="portfolio-section">
      <PortfolioItem
        title="Wojczella Festival Website"
        imgSrc="src/assets/wojczella.jpg"
        imgAlt="Festival website"
        techStack={["React", "TailwindCSS", "JavaScript", "SCSS"]}
      />
      <PortfolioItem
        title="Intel 8086 Simulator"
        imgSrc="src/assets/IntelSim.png"
        imgAlt="Processor simulator"
        techStack={["React", "Node.js", "TypeScript", "Sass"]}
      />
    </div>
  );
};

export default PortfolioSection;
