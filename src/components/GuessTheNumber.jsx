import React, { useState } from 'react';
import '../styles/GuessTheNumber.css';

const GuessTheNumber = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [attempts, setAttempts] = useState(0);

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userGuess = parseInt(guess);
    setAttempts(attempts + 1);

    if (userGuess === randomNumber) {
      setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
    } else if (userGuess < randomNumber) {
      setMessage('Too low! Try again.');
    } else {
      setMessage('Too high! Try again.');
    }

    setGuess('');
  };

  return (
    <div className="guess-the-number">
      <h2>Guess the Number Game</h2>
      <p>Guess a number between 1 and 100:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={handleGuessChange}
          min="1"
          max="100"
          required
        />
        <button type="submit">Submit Guess</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default GuessTheNumber;
