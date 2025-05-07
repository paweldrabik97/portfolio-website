import React from "react";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import "./styles.scss";

const PortfolioSection = () => {
  return (
    <div className="portfolio-section">
      <PortfolioItem
        title="Intel 8086 Simulator"
        imgSrc="../../assets/IntelSim.png"
        imgAlt="Processor simulator"
        techStack={["React", "Node.js", "TypeScript", "Sass"]}
      />
      <PortfolioItem
        title="Intel 8086 Simulator"
        imgSrc="../../assets/IntelSim.png"
        imgAlt="Processor simulator"
        techStack={["React", "Node.js", "TypeScript", "Sass"]}
      />
    </div>
  );
};

export default PortfolioSection;
