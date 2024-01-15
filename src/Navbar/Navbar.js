import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  const [isNavFixed, setNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = window.innerHeight - 0.1 * window.innerHeight;
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
        <div className="navbar-container" style={{ display: "flex" }}>
          <div className="nav-socials">
            <ul className="nav-menu">
              <li className="nav-item">
                <a
                  href="https://www.facebook.com"
                  className="nav-links"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
                  <FaFacebookF size={"1.5em"} className={"fbIcon"} />
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="https://www.facebook.com"
                  className="nav-links"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
                  <FaInstagram size={"1.5em"} className={"igIcon"} />
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="https://www.facebook.com"
                  className="nav-links"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
                  <FaYoutube size={"1.5em"} className={"ytIcon"} />
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-main">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
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

          <div className="nav-right"></div>
        </div>
      </nav>
    </>
  );
}
