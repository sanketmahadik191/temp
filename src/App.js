
import './App.css';
import React, { useState } from 'react';

function App() {
  const initialColors = Array.from({ length: 12 }, () => getRandomColor());
  const [colors, setColors] = useState(initialColors);

  function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  function handleCardClick(index) {
    const newColors = [...colors];
    newColors[index] = getRandomColor();
    setColors(newColors);
  }

  return (
    <div className="RandomColorCards-container">
    {colors.map((color, index) => (
      <div
        key={index}
        className="Card"
        style={{ backgroundColor: color }}
        onClick={() => handleCardClick(index)}
      >
        <span className="Card-colorText">{color}</span>
      </div>
    ))}
  </div>
);
}

export default App;
