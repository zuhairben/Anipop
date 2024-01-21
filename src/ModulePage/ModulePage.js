import React from "react";
import Navbar from "../Navbar/Navbar";
import "./ModulePage.css";
import Mascot from './media/Mascot Yassify.png'
import StageModule from "./Modules/StageModule";
import './ModuleButtons/ArtsButton.css'
import './ModuleButtons/AuditoriumButton.css'
import './ModuleButtons/GamingButton.css'
import './ModuleButtons/StageButton.css'
import './ModuleButtons/VolleyballButton.css'
import ArtsModule from "./Modules/ArtsModule";
import Gaming from "./Modules/Gaming";
import Volleyball from "./Modules/Volleyball";
import Auditorium from "./Modules/Auditorium";

export default function ModulePage() {

  return (
    <div>
      <section id="screen7">
        <div className="about-section4">
          <h1>Welcome to the Future of IBACON</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ flex: '1' }}>
              <img src={Mascot} alt="" style={{
                width: "75%", /* Adjust the width as needed */
                height: "100%", /* Maintain aspect ratio */
                margin: "0 auto", /* Center the container horizontally */
                padding: "1.5rem"
              }} />
            </div>
            <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
              Embark on an exciting journey at IBACON, where knowledge meets entertainment. Discover diverse modules designed for every interest,
              from expert-led sessions to hands-on workshops. Brace yourself for gaming tournaments, awesome activities, and surprises that promise
              an unforgettable experience. Join us in shaping the future - it's more than an event; it's a celebration of learning and entertainment.
              <br /><span style={{ fontSize: '4rem', lineHeight: 1.5 }}>ON SCNZ GUYZ!!!!!</span>
              <br/>
              <div className="button-container">
              <a href="#screen8" className="fbutton">
                <i></i><i></i>
                <span>Stage Module</span>
                </a>

                <a href="#screen9" className="fbutton1">
                <i></i><i></i>
                <span>Arts Module</span>
                </a>

                <a href="#screen10" className="fbutton2">
                <i></i><i></i>
                <span>Gaming Module</span>
                </a>

                <a href="#screen12" className="fbutton3">
                <i></i><i></i>
                <span>Auditorium Module</span>
                </a>

                <a href="#screen11" className="fbutton4">
                <i></i><i></i>
                <span>Volleyball Module</span>
                </a>
                </div>
            </div>
          </div>
        </div>
        <Navbar />
      </section>
      <section id="screen8">
        <StageModule/>
      </section>
      <section id="screen9">
        <ArtsModule/>
      </section>
      <section id="screen10">
        <Gaming/>
      </section>
      <section id="screen11">
        <Volleyball/>
      </section>
      <section id="screen12">
        <Auditorium/>
      </section>
    </div>
  );
}
