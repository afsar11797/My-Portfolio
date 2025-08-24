import React, { useEffect, useState } from 'react';
import './InteractiveBalls.css';

const InteractiveBalls = () => {
  const [balls, setBalls] = useState([]);

  // Function to create a ball
  const createBall = (x, y) => ({
    id: Date.now() + Math.random(),
    x,
    y,
    size: Math.random() * 50 + 20,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`
  });

  // Add initial balls on mount
  useEffect(() => {
    const initialBalls = Array.from({ length: 5 }).map(() => createBall(Math.random() * window.innerWidth, Math.random() * window.innerHeight));
    setBalls(initialBalls);
  }, []);

  const addBall = (e) => {
    const newBall = createBall(e.clientX, e.clientY);
    setBalls((prevBalls) => [...prevBalls, newBall]);
  };

  const handleBallClick = (id) => {
    setBalls((prevBalls) => prevBalls.filter(ball => ball.id !== id));
  };

  useEffect(() => {
    window.addEventListener('click', addBall);
    return () => {
      window.removeEventListener('click', addBall);
    };
  }, []);

  return (
    <div className="ball-container">
      {balls.map(ball => (
        <div
          key={ball.id}
          className="ball"
          style={{
            left: ball.x,
            top: ball.y,
            width: ball.size,
            height: ball.size,
            backgroundColor: ball.color,
          }}
          onClick={() => handleBallClick(ball.id)}
        />
      ))}
    </div>
  );
};

export default InteractiveBalls;
