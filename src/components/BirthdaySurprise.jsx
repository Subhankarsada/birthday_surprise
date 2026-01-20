import React, { useState } from "react";
import "./BirthdaySurprise.css";
import SurpriseCardScene from "./SurpriseCardScene";

const BirthdaySurprise = ({ onOpenMessage }) => {   // accept the prop
  const [showCardScene, setShowCardScene] = useState(false);

  const startSurprise = () => {
    setShowCardScene(true);
  };

  return (
    <div className="magic-background">
      {!showCardScene ? (
        <>
          <img src={`${process.env.PUBLIC_URL}/birthday.gif`} alt="gift-1" className="gif" />
          <h1>A Beautiful girl was born today, 20 years ago!</h1>
          <p>A little surprise awaits...</p>
          <button onClick={startSurprise}>🎁 Start the surprise</button>
        </>
      ) : (
        // pass the prop down here
        <SurpriseCardScene onOpenMessage={onOpenMessage} /> 
      )}
    </div>
  );
};

export default BirthdaySurprise;
