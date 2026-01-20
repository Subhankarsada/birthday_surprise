import React, { useState } from "react";
import "./SurpriseCardScene.css";

// ✅ ONLY file names (no /photos here)
const photoList = [
  "photo1.jpeg",
  "photo2.jpeg",
  "photo3.jpeg",
  "photo4.jpeg",
  "photo5.jpeg",
  "photo6.jpeg",
  "photo7.jpeg",
  "photo8.jpeg",
  "photo9.jpeg",
  "photo10.jpeg",
  "photo11.jpeg",
  "photo12.jpeg",
  "photo13.jpeg",
  "photo14.jpeg",
  "photo15.jpeg",
  "photo16.jpeg",
  "photo17.jpeg",
  "photo18.jpeg",
  "photo19.jpeg",
  "photo20.jpeg"
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
