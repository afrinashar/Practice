import React, { useState } from 'react';

const MaximumSubsequenceScore = ({ nums }) => {
    const [result, setResult] = useState(null);

    const findMaxScore = () => {
        let maxScore = 0;
        let currentScore = 0;
        for (let i = 0; i < nums.length; i++) {
            currentScore = Math.max(nums[i], currentScore + nums[i]);
            maxScore = Math.max(maxScore, currentScore);
        }
        setResult(maxScore);
    };

    return (
        <div>
            <h3>Maximum Subsequence Score</h3>
            <button onClick={findMaxScore}>Find Max Score</button>
            <div>
                <strong>Numbers:</strong> {nums.join(', ')}
            </div>
            <div>
                <strong>Max Score:</strong> {result !== null ? result : 'Not calculated yet'}
            </div>
        </div>
    );
};

export default MaximumSubsequenceScore;
