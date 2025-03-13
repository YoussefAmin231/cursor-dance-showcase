
import React, { useEffect, useState } from "react";

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [cursorColor, setCursorColor] = useState("#8B5CF6"); // Default color: purple

  // Array of vibrant colors for the cursor
  const colors = [
    "#8B5CF6", // Vivid Purple
    "#D946EF", // Magenta Pink
    "#F97316", // Bright Orange
    "#0EA5E9", // Ocean Blue
    "#10B981", // Emerald Green
    "#EF4444", // Red
  ];

  // Change color periodically
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setCursorColor(randomColor);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverEvents = () => {
      const handleLinkMouseEnter = () => setLinkHovered(true);
      const handleLinkMouseLeave = () => setLinkHovered(false);

      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, [role="button"]'
      );
      
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleLinkMouseEnter);
        el.addEventListener("mouseleave", handleLinkMouseLeave);
      });

      return () => {
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleLinkMouseEnter);
          el.removeEventListener("mouseleave", handleLinkMouseLeave);
        });
      };
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const cleanup = handleLinkHoverEvents();

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cleanup();
    };
  }, []);

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) return null;

  return (
    <>
      <div
        className={`cursor-dot ${hidden ? "opacity-0" : "opacity-70"} ${
          clicked ? "scale-75" : ""
        } ${linkHovered ? "scale-150 opacity-60" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: cursorColor,
          boxShadow: `0 0 15px ${cursorColor}`,
          transition: "background-color 1s ease-in-out, transform 0.3s ease-out, opacity 0.3s ease-out",
        }}
      />
      <div
        className={`cursor-trail ${hidden ? "opacity-0" : "opacity-30"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: cursorColor,
          boxShadow: `0 0 20px ${cursorColor}`,
        }}
      />
      <div
        className={`cursor-outline ${hidden ? "opacity-0" : "opacity-50"} ${
          clicked ? "scale-75" : ""
        } ${linkHovered ? "scale-150" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          borderColor: cursorColor,
          transitionDuration: linkHovered ? "0.2s" : "0.5s",
        }}
      />
    </>
  );
};

export default CursorEffect;
