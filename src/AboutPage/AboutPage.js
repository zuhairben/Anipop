import React from "react";
import Navbar from "../Navbar/Navbar";
import "./AboutPage.css";
import Anipop from "./media/Anipop.png"
import IBACON from "./media/backlight2.png"



export default function AboutPage() {
  return (
    <div>
      <section id="screen1">
        <Navbar />
      </section>
      <section id="screen2" className="about-section">
        <h1>About Anipop</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ flex: '1' }}>
            <img src={Anipop} alt="" style={{
              width: "90%", /* Adjust the width as needed */
              height: "auto", /* Maintain aspect ratio */
              margin: "0 auto", /* Center the container horizontally */
              padding: "1.5rem"
            }} /></div>
          <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
            At anipop, we're on a quest to show the world the vibrancy and
            boundless creativity that emerges from the fusion of anime and pop
            culture. So join us on this exhilarating journey!
            MISSION: Forging Connections Through Pixels and Playfulness!
            VISION: To create strong connections among all individuals through their
            shared love for the captivating world of animation and pop culture.
          </div>
        </div>

        <h1>About IBACON</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ flex: '1' }}>
            <img src={IBACON} alt="" style={{
              width: "90%", /* Adjust the width as needed */
              height: "auto", /* Maintain aspect ratio */
              margin: "0 auto", /* Center the container horizontally */
              padding: "1.5rem"
            }} /></div>
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


      </section>
      <section id="screen3"></section>
    </div>
  );
}
