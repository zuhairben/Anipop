import React from "react";
import Navbar from "../Navbar/Navbar";
import "./AboutPage.css";
import Anipop from "./media/Anipop.png";
import IBACON from "./media/backlight2.png";
import Burhan from './media/Screenshot 2024-01-17 203622.png'
import Zia from './media/Screenshot 2024-01-17 203609.png'
import Palize from './media/Screenshot 2024-01-17 203644.png'

export default function AboutPage() {
  return (
    <div>
      <section id="screen4">
        <div className="about-section">
          <h1>About IBACON</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ flex: '1' }}>
              <img src={IBACON} alt="" style={{
                width: "90%", /* Adjust the width as needed */
                height: "auto", /* Maintain aspect ratio */
                margin: "0 auto", /* Center the container horizontally */
                padding: "1.5rem"
              }} />
            </div>
            <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
              The IBA Anime and Comic Convention (IBACON) aims to bring together
              enthusiasts of anime, comics, pop culture, and gaming for a day of
              immersive entertainment and interaction. The event will provide a
              platform for attendees to explore various aspects of the anime and comic
              world, engage with artists and creators, participate in competitions, and
              enjoy stage performances, while also allowing companies to interact with
              their target audience and showcasing some of their offerings
            </div>
          </div>
        </div>
        <Navbar />
      </section>
      <section id="screen5" className="about-section1">
        <div>
          <h1>About Anipop</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ flex: '1' }}>
              <img src={Anipop} alt="" style={{
                width: "90%", /* Adjust the width as needed */
                height: "auto", /* Maintain aspect ratio */
                margin: "0 auto", /* Center the container horizontally */
                padding: "1.5rem"
              }} />
            </div>
            <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
              At Anipop, we're on a quest to show the world the vibrancy and
              boundless creativity that emerges from the fusion of anime and pop
              culture. So join us on this exhilarating journey!
              MISSION: Forging Connections Through Pixels and Playfulness!
              VISION: To create strong connections among all individuals through their
              shared love for the captivating world of animation and pop culture.
            </div>
          </div>
        </div>

      </section>
      <section id="screen6" className="about-section2">
        <div class="l-container my-3">
          <h1 style={{ fontSize: "60px", fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", padding: '1.3rem' }}>Our Society Panel</h1>
          <div class="b-game-cards-container">
            <div class="b-game-card">
              <div class="b-game-card__cover">
                <img src={Burhan} alt={Burhan} />
                <div class="b-game-card__back">
                  <p>CON SCNZ</p>
                </div>
              </div>
            </div>
            <div class="b-game-card">
              <div class="b-game-card__cover">
                <img src={Zia} alt={Zia} />
                <div class="b-game-card__back">
                  <p>CON SCNZ</p>
                </div>
              </div>
            </div>
            <div class="b-game-card">
              <div class="b-game-card__cover">
                <img src={Palize} alt={Palize} />
                <div class="b-game-card__back">
                  <p>CON SCNZ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
