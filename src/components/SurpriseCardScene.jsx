import React, { useState } from "react";
import "./SurpriseCardScene.css";

const photoList = [
  "/photos/photo1.JPEG",
  "/photos/photo2.JPEG",
  "/photos/photo3.JPEG",
  "/photos/photo4.JPEG",
  "/photos/photo5.JPEG",
  "/photos/photo6.JPEG",
  "/photos/photo7.JPEG",
  "/photos/photo8.JPEG",
  "/photos/photo9.JPEG",
  "/photos/photo10.JPEG",
  "/photos/photo11.JPEG",
  "/photos/photo12.JPEG",
  "/photos/photo13.JPEG",
  "/photos/photo14.JPEG",
  "/photos/photo15.JPEG",
  "/photos/photo16.JPEG",
  "/photos/photo17.JPEG",
  "/photos/photo18.JPEG",
  "/photos/photo19.JPEG",
  "/photos/photo20.JPEG"
];

{images.map((img, index) => (
  <img
    key={index}
    src={`${process.env.PUBLIC_URL}/photos/${img}`}
    alt={`memory-${index}`}
  />
))}

const SurpriseCardScene = ({ onOpenMessage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % photoList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + photoList.length) % photoList.length);
  };

  return (
    <div className="magic-background">
      <div className="card-title">Some Sweet 20 memories</div>
      <div className="card-subtitle">(Swipe the cards)</div>

      <div className="card-stack">
        <button className="arrow-btn left" onClick={handlePrev}>
          &#10094;
        </button>

        <div className="card">
          <img
            src={photoList[currentIndex]}
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

      {currentIndex === photoList.length - 1 && (
        <button className="open-message-btn" onClick={onOpenMessage}>
          Open My Message
        </button>
      )}
    </div>
  );
};

export default SurpriseCardScene;
