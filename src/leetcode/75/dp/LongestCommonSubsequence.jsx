import React, { useState } from 'react';

const longestCommonSubsequence = (text1, text2) => {
    const m = text1.length;
    const n = text2.length;
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
};

const LongestCommonSubsequence = () => {
    const [text1, setText1] = useState('abcde');
    const [text2, setText2] = useState('ace');
    const [result, setResult] = useState(null);

    const calculateLCS = () => {
        setResult(longestCommonSubsequence(text1, text2));
    };

    return (
        <div>
            <h3>Longest Common Subsequence</h3>
            <input
                type="text"
                value={text1}
                onChange={(e) => setText1(e.target.value)}
                placeholder="Enter first string"
            />
            <input
                type="text"
                value={text2}
                onChange={(e) => setText2(e.target.value)}
                placeholder="Enter second string"
            />
            <button onClick={calculateLCS}>Calculate</button>
            <div>
                <strong>Result:</strong> {result !== null ? result : 'Not calculated yet'}
            </div>
        </div>
    );
};

export default LongestCommonSubsequence;
