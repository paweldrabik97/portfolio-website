import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";

const BOX_SIZE = 30;

const BackgroundGrid = () => {
  const containerRef = useRef(null);
  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });

  useEffect(() => {
    const updateGrid = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;

        const cols = Math.floor(clientWidth / BOX_SIZE);
        const rows = Math.floor(clientHeight / BOX_SIZE);

        setGridSize({ rows, cols });
      }
    };

    updateGrid(); // początkowa inicjalizacja
    window.addEventListener("resize", updateGrid);

    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  return (
    <div className="background-container" ref={containerRef}>
      {Array.from({ length: gridSize.rows }).map((_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {Array.from({ length: gridSize.cols }).map((_, colIndex) => (
            <div className="box" key={colIndex}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BackgroundGrid;
