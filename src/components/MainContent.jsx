// src/components/MainContent.jsx
import { useState } from 'react';
import './MainContent.css';
import appleFruit from '../assets/applesfruit.jpg';
import exoticFruit from '../assets/passionfruit.jpg';
import canApple from '../assets/Can2.png';
import canExotic from '../assets/Can3.png';

export default function MainContent() {
  const [current, setCurrent] = useState('exotic');

  const handleApple = () => setCurrent('apple');
  const handleExotic = () => setCurrent('exotic');

  const isApple = current === 'apple';

  return (
    <div className="heading" style={{ backgroundColor: isApple ? '#FFB6C1' : '#cc92fc' }}>
      <img
        src={isApple ? appleFruit : exoticFruit}
        alt="Fruit Background"
        className="passionfruit animate-fruit"
      />

      <h1 className="heading-text animate-text-slide">
        {isApple ? 'Apple' : 'Exotic'}
      </h1>

      <button onClick={handleApple}>&lt;</button>
      
      <img
        src={isApple ? canApple : canExotic}
        alt="Can"
        className="can-image animate-image"
      />
      
      <button onClick={handleExotic}>&gt;</button>
    </div>
  );
}
