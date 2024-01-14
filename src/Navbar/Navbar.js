import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  const [isNavFixed, setNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = window.innerHeight - 70;
      if (window.scrollY > navHeight) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <nav className={isNavFixed ? "fixed" : ""}>
        <div className="navbar-container">
          <div className="menu-icon" onClick={() => setClick(!click)}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="modules"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Modules
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
