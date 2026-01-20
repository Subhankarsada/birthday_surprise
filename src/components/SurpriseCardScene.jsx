import React, { useState } from "react";
import "./SurpriseCardScene.css";

// ✅ FULL ABSOLUTE PATHS (GitHub Pages safe)
const photoList = [
  `${process.env.PUBLIC_URL}/photos/photo1.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo2.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo3.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo4.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo5.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo6.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo7.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo8.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo9.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo10.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo11.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo12.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo13.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo14.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo15.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo16.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo17.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo18.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo19.jpeg`,
  `${process.env.PUBLIC_URL}/photos/photo20.jpeg`
];

const SurpriseCardScene = ({ onOpenMessage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photoList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + photoList.length) % photoList.length
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
          <img
            src={photoList[currentIndex]}
            alt={`Memory ${currentIndex + 1}`}
            className="card-img"
            loading="lazy"
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
