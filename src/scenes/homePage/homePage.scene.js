import React, { useState, useEffect } from "react";
import Carousel from "./components/carousel";
import Highlight from "./components/highlight";
const HomePageScene = () => {
  return (
    <div className="homePage">
      <>
        <Carousel />
        <Highlight />
        <div className="youtube-video">
          <iframe
            src="https://www.youtube.com/embed/XC2CHVw6twM?autoplay=1&mute=1"
            width="100%"
            height="320"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </div>
      </>
    </div>
  );
};
export default HomePageScene;