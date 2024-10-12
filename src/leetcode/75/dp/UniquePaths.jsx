import React, { useState } from 'react';

const uniquePaths = (m, n) => {
    const dp = Array(m).fill(0).map(() => Array(n).fill(0));
    
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1; // First column
    }
    
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1; // First row
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    
    return dp[m - 1][n - 1];
};

const UniquePaths = () => {
    const [m, setM] = useState(3);
    const [n, setN] = useState(7);
    const [result, setResult] = useState(null);

    const calculateUniquePaths = () => {
        setResult(uniquePaths(m, n));
    };

    return (
        <div>
            <h3>Unique Paths</h3>
            <label>
                Grid Size:
                <input type="number" value={m} onChange={(e) => setM(Number(e.target.value))} /> x
                <input type="number" value={n} onChange={(e) => setN(Number(e.target.value))} />
            </label>
            <button onClick={calculateUniquePaths}>Calculate</button>
            <div>
                <strong>Result:</strong> {result !== null ? result : 'Not calculated yet'}
            </div>
        </div>
    );
};

export default UniquePaths;
