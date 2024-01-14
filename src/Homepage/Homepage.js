import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Homepage.css";
import TopScreen from "./HomePageComponents/TopScreen";

export default function Homepage() {
  return (
    <div>
      <section id="screen1">
        <TopScreen />
        <Navbar />
      </section>
      <section id="screen2"></section>
      <section id="screen3"></section>
    </div>
  );
}
