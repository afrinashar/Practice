import React, { useState } from 'react';

const DailyTemperatures = ({ temperatures }) => {
    const [result, setResult] = useState([]);

    const calculateDays = () => {
        const stack = [];
        const res = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const index = stack.pop();
                res[index] = i - index;
            }
            stack.push(i);
        }

        setResult(res);
    };

    return (
        <div>
            <h3>Daily Temperatures</h3>
            <button onClick={calculateDays}>Calculate</button>
            <div>
                <strong>Temperatures:</strong> {temperatures.join(', ')}
            </div>
            <div>
                <strong>Days Until Warmer:</strong> {result.join(', ')}
            </div>
        </div>
    );
};

export default DailyTemperatures;
