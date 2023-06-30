"use client"
import React, { useEffect, useState } from "react";

const AnimateText = () => {
  const [text, setText] = useState("");
  const fullText = "Hello, World!";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex === fullText.length) {
        clearInterval(typingInterval);
      } else {
        setText((prevText) => prevText + fullText[currentIndex]);
        currentIndex++;
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);
  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
};

export default AnimateText;
