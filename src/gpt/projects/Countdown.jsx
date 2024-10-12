<<<<<<< HEAD
import  { useState, useEffect } from 'react';

const Countdown = () => {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      alert('Time is up!');
    }
    return () => clearInterval(timer);
  }, [isActive, seconds]);

  const startTimer = () => setIsActive(true);
  const resetTimer = () => {
    setIsActive(false);
    setSeconds(60);
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>{Math.floor(seconds / 60)}:{seconds % 60}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Countdown;
=======
import  { useState, useEffect } from 'react';

const Countdown = () => {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      alert('Time is up!');
    }
    return () => clearInterval(timer);
  }, [isActive, seconds]);

  const startTimer = () => setIsActive(true);
  const resetTimer = () => {
    setIsActive(false);
    setSeconds(60);
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>{Math.floor(seconds / 60)}:{seconds % 60}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Countdown;
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574
