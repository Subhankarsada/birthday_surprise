import React, { useState } from "react";
import "./BirthdayBook.css";

const chapters = [
    {
        title: "Happy Birthday NANNA",
        content: `Dear Kannamma 💖,

Many many moreeeee happyyyyy returns of the day, ra 😘🎂❤️🫂
Today isn’t just your birthday for me—it’s a celebration of you, the most beautiful part of my life.

It’s been four unforgettable years since we met, and even after everything, my love for you has never changed ❤️‍🔥
We’ve had our ups and downs, our fights and misunderstandings, but no matter what, we always found our way back to each other. That’s what makes our love so strong.

I truly want to see you succeed in your career 🌸✨
I want to stand beside you, watch you grow, and celebrate every single achievement together 🥹🤍
We love, we fight, we laugh, and we share our sadness—everything with each other. That’s our world 🌍❤️

I love the way you call me Kanna 🫂
I love how you wake me up with your messages and make my whole day brighter ☀️
And I love how you end my nights with your words, making me sleep with a smile 😌💌
In these four years, we’ve met only for two days… yet my heart feels like it has lived a lifetime with you. I want to meet you again and again—and we will meet soon, I promise you 🤞❤️

You are the only one who truly understands me, who tolerates my anger, my silence, my mood swings—and still chooses me every single time 🥺💞
I know how deeply you love me, and I understand the situations at your home. Honestly, I am so proud of you. In this generation, it’s rare to find someone who puts their family before everything else the way you do—and that makes you incredibly special to me 🙏

You are beautiful, strong, sensitive, and inspiring ✨💖
I fall in love with you again every time you show me love even after a fight 🫶🔥

There are so many things running through my mind that I want to tell you… but I’ll save them for later—for the moment when I can look into your eyes and say everything ❤️‍🩹🥰

Please don’t ever forget me 🤍
I loveee youuu soooo muchhhhh 😘❤️💋
No matter what, I will always be waiting for you 🫂💞

Forever yours,
Your Kanna 🫶❤️`
    }
];

const BirthdayBook = ({ onReplay }) => {
    const [opened, setOpened] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);
    const [flipDir, setFlipDir] = useState("");

    const triggerFlip = (direction, newIndex) => {
        if (isFlipping) return;
        setFlipDir(direction);
        setIsFlipping(true);

        setTimeout(() => setPageIndex(newIndex), 400);
        setTimeout(() => {
            setIsFlipping(false);
            setFlipDir("");
        }, 800);
    };

    const nextPage = () => {
        if (pageIndex < chapters.length - 1) {
            triggerFlip("flip-forward", pageIndex + 1);
        }
    };

    const prevPage = () => {
        if (pageIndex > 0) {
            triggerFlip("flip-backward", pageIndex - 1);
        }
    };

    return (
        <div className="book-background">
            <div className="book-frame">
                {!opened ? (
                    <div className="book-cover">
                        <h2 className="message-title">A Special Message</h2>
                        <img
                            src={`${process.env.PUBLIC_URL}/bubu-dudu-sseeyall.gif`}
                            alt="Birthday animation"
                            className="cover-gif"
                        />
                        <button className="tap-btn" onClick={() => setOpened(true)}>
                            Tap to Open
                        </button>
                    </div>
                ) : (
                    <div className={`book-page ${isFlipping ? flipDir : ""}`}>
                        <h2 className="chapter-title">{chapters[pageIndex].title}</h2>
                        <div className="chapter-content">{chapters[pageIndex].content}</div>
                        <div className="nav-buttons">
                            <button className="back-btn" onClick={() => setOpened(false)}>
                                <center>Back to Cover</center>
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {/* Floating Replay Button in corner */}
            {/* Replay button OUTSIDE the book layout */}
            {pageIndex === chapters.length - 1 && (
                <div className="replay-container">
                    <button className="replay-btn" onClick={onReplay}>
                        🔄 Replay
                    </button>
                    <img src={`${process.env.PUBLIC_URL}/sparkle.gif`} alt="Replay Gif" className="replay-gif" />
                </div>
            )}

        </div>
    );
};

export default BirthdayBook;
