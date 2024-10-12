<<<<<<< HEAD
import   { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive]);

  const startStopwatch = () => setIsActive(true);
  const stopStopwatch = () => setIsActive(false);
  const resetStopwatch = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>{Math.floor(seconds / 60)}:{seconds % 60}</div>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={stopStopwatch}>Stop</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default Stopwatch;
=======
import   { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive]);

  const startStopwatch = () => setIsActive(true);
  const stopStopwatch = () => setIsActive(false);
  const resetStopwatch = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>{Math.floor(seconds / 60)}:{seconds % 60}</div>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={stopStopwatch}>Stop</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default Stopwatch;
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574
