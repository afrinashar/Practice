import React, { useState } from 'react';

const MinimumNumberOfArrowsToBurstBalloons = ({ points }) => {
    const [result, setResult] = useState(null);

    const findMinArrows = () => {
        if (!points.length) return 0;

        // Sort points by their end position
        points.sort((a, b) => a[1] - b[1]);

        let count = 1;
        let lastEnd = points[0][1];

        for (let i = 1; i < points.length; i++) {
            if (points[i][0] > lastEnd) {
                count++;
                lastEnd = points[i][1];
            }
        }
        setResult(count);
    };

    return (
        <div>
            <h3>Minimum Number of Arrows to Burst Balloons</h3>
            <button onClick={findMinArrows}>Calculate</button>
            <div>
                <strong>Points:</strong> {points.map(point => `[${point[0]}, ${point[1]}]`).join(', ')}
            </div>
            <div>
                <strong>Result:</strong> {result !== null ? result : 'Not calculated yet'}
            </div>
        </div>
    );
};

export default MinimumNumberOfArrowsToBurstBalloons;
