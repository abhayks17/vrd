import { useEffect, useRef } from "react";
import "./AssociatesBlock.css";

export default function AssociatesBlock() {
  const trackRef = useRef(null);

  // Auto scroll effect
  useEffect(() => {
    const track = trackRef.current;
    let animationFrame;
    let scrollAmount = 0;

    function animate() {
      scrollAmount += 0.5; // speed
      if (scrollAmount >= track.scrollWidth / 2) {
        scrollAmount = 0;
      }
      track.style.transform = `translateX(-${scrollAmount}px)`;
      animationFrame = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Load images automatically from public folder
  const images = [
    "/associates/2.png",
    "/associates/3.png",
    "/associates/8.png",
    "/associates/1.png",
    "/associates/7.png",
    "/associates/4.jpeg",
    "/associates/5.png",
    "/associates/6.png",

  ];

  return (
    <div className="associates-wrapper">
      <h2 className="associates-title">
        ASSOCIATED PARTNERS
      </h2>

      <div className="carousel">
        <div className="carousel-track" ref={trackRef}>
          {[...images, ...images].map((src, index) => (
            <div key={index} className="carousel-item">
              <img src={src} alt="associate-logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}