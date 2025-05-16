import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;

    // Zawsze pokazuj na górze
    if (currentScrollY === 0) {
      setShow(true);
      setLastScrollY(0);
      return;
    }

    const scrollDifference = Math.abs(currentScrollY - lastScrollY);

    if (scrollDifference < 50) return;

    if (currentScrollY > lastScrollY) {
      setShow(false); // Scroll w dół
    } else {
      setShow(true); // Scroll w górę
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <div className={`navbar ${show ? "navbar--visible" : "navbar--hidden"}`}>
      <nav className="nav-container">
        <a href="#home" className="nav-link">
          <span className="nav-text">Home</span>
          <FontAwesomeIcon icon={faHouse} className="nav-icon" />
        </a>
        <a href="#about" className="nav-link">
          <span className="nav-text">About</span>
          <FontAwesomeIcon icon={faUser} className="nav-icon" />
        </a>
        <a href="#work" className="nav-link">
          <span className="nav-text">Work</span>
          <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />
        </a>
        <a href="#contact" className="nav-link">
          <span className="nav-text">Contact</span>
          <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
