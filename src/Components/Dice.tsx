import React, { useState } from 'react';
import './Dice.css';

interface DiceProps {
  onRoll: (roll: number) => void;
}

const Dice: React.FC<DiceProps> = ({ onRoll }) => {
  const [diceNumber, setDiceNumber] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);

    const rollingInterval = setInterval(() => {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      setDiceNumber(randomNum);
    }, 100); // Change dice face every 100ms

    setTimeout(() => {
      clearInterval(rollingInterval);
      const finalRoll = Math.floor(Math.random() * 6) + 1;
      setDiceNumber(finalRoll);
      setIsRolling(false);
      onRoll(finalRoll); // Notify parent
      console.log(finalRoll);
    }, 1000); // 1 second animation
  };

  return (
    <div className="dice-container">
      <div className={`dice-face ${isRolling ? 'rolling' : ''}`}>
        {diceNumber}
      </div>
      <button onClick={rollDice} className="roll-dice-button" disabled={isRolling}>
        {isRolling ? 'Rolling...' : '🎲 Roll Dice'}
      </button>
    </div>
  );
};

export default Dice;
