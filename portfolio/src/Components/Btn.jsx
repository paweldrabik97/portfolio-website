import "../Styles/Btn.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class Btn extends React.Component {
  render() {
    return (
      <a className="btn btn-1" href={this.props.url}>
        <span>
          {this.props.text} <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </a>
    );
  }
}

export default Btn;
