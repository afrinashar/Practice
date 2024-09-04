import React, { useState } from 'react';

const GuessNumberHigherOrLower = () => {
    const [guess, setGuess] = useState('');
    const [feedback, setFeedback] = useState('');

    const targetNumber = 50; // Example target number

    const handleGuess = () => {
        const number = parseInt(guess, 10);
        if (isNaN(number)) {
            setFeedback('Please enter a valid number.');
            return;
        }
        if (number < targetNumber) {
            setFeedback('Too low!');
        } else if (number > targetNumber) {
            setFeedback('Too high!');
        } else {
            setFeedback('Congratulations! You guessed it right.');
        }
    };

    return (
        <div>
            <h3>Guess Number Higher or Lower</h3>
            <input
                type="number"
                placeholder="Enter your guess"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
            />
            <button onClick={handleGuess}>Guess</button>
            <div>{feedback}</div>
        </div>
    );
};

export default GuessNumberHigherOrLower;
