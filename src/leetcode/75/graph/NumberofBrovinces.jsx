import React, { useState } from 'react';

const NumberOfProvinces = ({ isConnected }) => {
    const [result, setResult] = useState(null);

    const findNumberOfProvinces = () => {
        const n = isConnected.length;
        const visited = new Array(n).fill(false);
        let count = 0;

        const dfs = (i) => {
            for (let j = 0; j < n; j++) {
                if (isConnected[i][j] === 1 && !visited[j]) {
                    visited[j] = true;
                    dfs(j);
                }
            }
        };

        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                count++;
                dfs(i);
            }
        }

        setResult(count);
    };

    return (
        <div>
            <h3>Number of Provinces</h3>
            <button onClick={findNumberOfProvinces}>Calculate</button>
            <div>
                <strong>Is Connected Matrix:</strong> {isConnected.map(row => `[${row.join(', ')}]`).join(', ')}
            </div>
            <div>
                <strong>Result:</strong> {result !== null ? result : 'Not calculated yet'}
            </div>
        </div>
    );
};

export default NumberOfProvinces;
