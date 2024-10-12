import  { useState } from 'react';

const minDistance = (word1, word2) => {
    const m = word1.length;
    const n = word2.length;
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j - 1], // Substitution
                    dp[i - 1][j],     // Deletion
                    dp[i][j - 1]      // Insertion
                ) + 1;
            }
        }
    }

    return dp[m][n];
};

const EditDistance = () => {
    const [word1, setWord1] = useState('horse');
    const [word2, setWord2] = useState('ros');
    const [result, setResult] = useState(null);

    const calculateEditDistance = () => {
        setResult(minDistance(word1, word2));
    };

    return (
        <div>
            <h3>Edit Distance</h3>
            <input
                type="text"
                value={word1}
                onChange={(e) => setWord1(e.target.value)}
                placeholder="Enter first word"
            />
            <input
                type="text"
                value={word2}
                onChange={(e) => setWord2(e.target.value)}
                placeholder="Enter second word"
            />
            <button onClick={calculateEditDistance}>Calculate</button>
            <div>
                <strong>Result:</strong> {result !== null ? result : 'Not calculated yet'}
            </div>
        </div>
    );
};

export default EditDistance;
