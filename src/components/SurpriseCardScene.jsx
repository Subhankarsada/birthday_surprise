import React, { useState } from "react";
import "./SurpriseCardScene.css";

// ✅ ONLY file names (no /photos here)
const photoList = [
  "photo1.JPEG",
  "photo2.JPEG",
  "photo3.JPEG",
  "photo4.JPEG",
  "photo5.JPEG",
  "photo6.JPEG",
  "photo7.JPEG",
  "photo8.JPEG",
  "photo9.JPEG",
  "photo10.JPEG",
  "photo11.JPEG",
  "photo12.JPEG",
  "photo13.JPEG",
  "photo14.JPEG",
  "photo15.JPEG",
  "photo16.JPEG",
  "photo17.JPEG",
  "photo18.JPEG",
  "photo19.JPEG",
  "photo20.JPEG"
];

const SurpriseCardScene = ({ onOpenMessage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % photoList.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + photoList.length) % photoList.length
    );
  };

  return (
    <div className="magic-background">
      <div className="card-title">Some Sweet 20 Memories</div>
      <div className="card-subtitle">(Swipe the cards)</div>

      <div className="card-stack">
        <button className="arrow-btn left" onClick={handlePrev}>
          &#10094;
        </button>

        <div className="card">
          {/* ✅ CORRECT IMAGE PATH */}
          <img
            src={`${process.env.PUBLIC_URL}/photos/${photoList[currentIndex]}`}
            alt={`Memory ${currentIndex + 1}`}
            className="card-img"
          />
          <div className="heart-icon left">💖</div>
          <div className="heart-icon right">💖</div>
        </div>

        <button className="arrow-btn right" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      {/* Optional thumbnail preload (hidden but useful) */}
      <div style={{ display: "none" }}>
        {photoList.map((img, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/photos/${img}`}
            alt={`preload-${index}`}
          />
        ))}
      </div>

      {currentIndex === photoList.length - 1 && (
        <button className="open-message-btn" onClick={onOpenMessage}>
          Open My Message
        </button>
      )}
    </div>
  );
};

export default SurpriseCardScene;
