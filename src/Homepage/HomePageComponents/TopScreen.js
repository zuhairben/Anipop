import React from "react";

import anim_ibacon from "./media/animibacon.gif";

export default function TopScreen() {
  return (
    <>
      <div className="img-container">
        <img
          src={anim_ibacon}
          style={{ height: "90vh", width: "100vw", opacity: "1" }}
          alt=""
        />
      </div>
    </>
  );
}
