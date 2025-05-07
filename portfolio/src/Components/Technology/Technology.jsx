import React from "react";
import "./styles.scss";

class Technology extends React.Component {
  render() {
    return (
      <div className="tech-stack-item">
        <div
          className="tech-img"
          style={{ backgroundColor: this.props.bgColor }}
        >
          <img
            src={this.props.img}
            alt={this.props.alt}
            className="tech-img-tag"
          />
        </div>
        <div className="tech-text">
          <h3 className="tech-title">{this.props.title}</h3>
          <p className="tech-description">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Technology;
