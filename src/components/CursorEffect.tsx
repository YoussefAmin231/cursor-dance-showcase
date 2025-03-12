
import React, { useEffect, useState } from "react";

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

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
        } ${linkHovered ? "scale-150 bg-primary/20" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`cursor-outline ${hidden ? "opacity-0" : "opacity-50"} ${
          clicked ? "scale-75" : ""
        } ${linkHovered ? "scale-150" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transitionDuration: linkHovered ? "0.2s" : "0.5s"
        }}
      />
    </>
  );
};

export default CursorEffect;
