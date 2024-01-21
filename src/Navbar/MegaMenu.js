// MegaMenu.js
import React from "react";
import { Link } from "react-router-dom";
import './MegaMenu.css'

const MegaMenu = ({ isOpen, closeMenu }) => {
    const stageModuleActivities =[
        "Family Feud",
        "HotTakes/TierList",
        "Guess the Opening",
        "Performances",
        "Geeks Got Talent",
        "Gaming Tournament Finale",
        "Cosplay Walk"
    ];

  return (
    <div className={isOpen ? "mega-menu active" : "mega-menu"}>
      <div className="mega-menu-container">
        <ul className="mega-menu-list">
          <li>
            <Link to="/">Stage Module</Link>
            <ul className="mega-menu-sublist">
              {stageModuleActivities.map((activity, index) => (
                <li key={index}>
                  <Link to="/">{activity}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/">Arts Module</Link>
          </li>
          <li>
            <Link to="/">Auditorium Module</Link>
          </li>
          <li>
            <Link to="/">Gaming Module</Link>
          </li>
          <li>
            <Link href="/">Volleyball Module</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MegaMenu;
