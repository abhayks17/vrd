import { useEffect, useState } from "react";
import "./RevealText.css";

export default function RevealText({
  lines = [],
  delay = 0,
  stagger = 700   // slower (was 400)
}) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timers = lines.map((_, i) =>
      setTimeout(() => setVisibleCount(i + 1), delay + i * stagger)
    );
    return () => timers.forEach(clearTimeout);
  }, [delay, stagger, lines.length]);

  return (
    <div className="reveal-wrapper">
      {lines.map((line, i) => (
        <div
          key={i}
          className={`reveal-line ${visibleCount > i ? "show" : ""}`}
        >
          {line}
        </div>
      ))}
    </div>
  );
}