import { useState } from 'react';

// Function to calculate the number of ways to tile a 2 x n board
const numTilings = (n) => {
    if (n === 0) return 1;
    if (n === 1) return 1;
    if (n === 2) return 2;

    const MOD = 1000000007;
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;  // 1 way to fill a 2x0 board
    dp[1] = 1;  // 1 way to fill a 2x1 board
    dp[2] = 2;  // 2 ways to fill a 2x2 board

    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2] + 2 * dp[i - 3]) % MOD;
    }

    return dp[n];
};

const DominoAndTrominoTiling = () => {
    const [n, setN] = useState(4); // Default value for n
    const [result, setResult] = useState(null);

    const handleInputChange = (e) => {
        setN(Number(e.target.value));
    };

    const calculateWays = () => {
        setResult(numTilings(n));
    };

    return (
        <div>
            <h3>Domino and Tromino Tiling</h3>
            <input
                type="number"
                value={n}
                onChange={handleInputChange}
                min="0"
                style={{ marginRight: '10px' }}
            />
            <button onClick={calculateWays}>Calculate</button>
            <div>
                <strong>Result:</strong> {result === null ? 'Not calculated yet' : result}
            </div>
        </div>
    );
};

export default DominoAndTrominoTiling;
