import React, { useState } from 'react';

// Function to compute the minimum cost to climb stairs
const minCostClimbingStairs = (cost) => {
    const n = cost.length;
    if (n === 0) return 0;
    if (n === 1) return cost[0];

    let dp = new Array(n);
    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i < n; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }

    return Math.min(dp[n - 1], dp[n - 2]);
};

const MinCostClimbingStairs = () => {
    const [cost, setCost] = useState([10, 15, 20]);
    const [result, setResult] = useState(null);

    const handleCostChange = (index, value) => {
        const newCost = [...cost];
        newCost[index] = Number(value);
        setCost(newCost);
    };

    const calculateMinCost = () => {
        setResult(minCostClimbingStairs(cost));
    };

    return (
        <div>
            <h3>Min Cost Climbing Stairs</h3>
            {cost.map((value, index) => (
                <input
                    key={index}
                    type="number"
                    value={value}
                    onChange={(e) => handleCostChange(index, e.target.value)}
                    min="0"
                    style={{ marginRight: '10px' }}
                />
            ))}
            <button onClick={calculateMinCost}>Calculate</button>
            <div>
                <strong>Result:</strong> {result === null ? 'Not calculated yet' : result}
            </div>
        </div>
    );
};

export default MinCostClimbingStairs;
