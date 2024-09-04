import React, { useState } from 'react';

const NonOverlappingIntervals = ({ intervals }) => {
    const [result, setResult] = useState(null);

    const findNonOverlappingIntervals = () => {
        if (!intervals.length) return 0;

        // Sort intervals based on the end time
        intervals.sort((a, b) => a[1] - b[1]);

        let count = 1;
        let lastEnd = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] >= lastEnd) {
                count++;
                lastEnd = intervals[i][1];
            }
        }
        setResult(count);
    };

    return (
        <div>
            <h3>Non Overlapping Intervals</h3>
            <button onClick={findNonOverlappingIntervals}>Calculate</button>
            <div>
                <strong>Intervals:</strong> {intervals.map(interval => `[${interval[0]}, ${interval[1]}]`).join(', ')}
            </div>
            <div>
                <strong>Result:</strong> {result !== null ? result : 'Not calculated yet'}
            </div>
        </div>
    );
};

export default NonOverlappingIntervals;
