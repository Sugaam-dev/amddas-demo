import React, { useState } from "react";
import "./Video.css";

const VideoAmddas = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
      setIsPlaying(true);
    };
  
    return (
      <div className="fullscreen-container">
        {!isPlaying ? (
          <div
            className="background-image"
            onClick={handlePlayVideo}
            role="button"
            aria-label="Play Video"
          >
            <h1 className="play-button">▶</h1>
          </div>
        ) : (
          <iframe
            className="video"
            src="https://ww.youtube.com/embed/1OAjeECW90E?si=o807aFc_02ZpfeeR&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
    );
  };

export default VideoAmddas;
