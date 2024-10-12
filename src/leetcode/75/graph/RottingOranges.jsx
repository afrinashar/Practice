import React, { useState } from 'react';

// Utility function to perform BFS
const bfs = (grid) => {
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const queue = [];
    let freshCount = 0;
    let minutes = 0;

    // Initialize queue with all rotten oranges and count fresh oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            } else if (grid[r][c] === 1) {
                freshCount++;
            }
        }
    }

    // Perform BFS
    while (queue.length > 0 && freshCount > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift();
            for (const [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;
                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === 1) {
                    grid[newRow][newCol] = 2;
                    queue.push([newRow, newCol]);
                    freshCount--;
                }
            }
        }
        minutes++;
    }

    return freshCount === 0 ? minutes : -1;
};

const RottingOranges = ({ grid }) => {
    const [result, setResult] = useState(null);

    const findRottingTime = () => {
        const res = bfs(grid);
        setResult(res);
    };

    return (
        <div>
            <h3>Rotting Oranges</h3>
            <button onClick={findRottingTime}>Find Minimum Time</button>
            <div>
                <strong>Grid:</strong>
                <pre>{grid.map(row => row.join(' ')).join('\n')}</pre>
            </div>
            <div>
                <strong>Result:</strong> {result === null ? 'Not evaluated yet' : (result === -1 ? 'Not all oranges can rot' : `Minimum time is ${result} minutes`)}
            </div>
        </div>
    );
};

export default RottingOranges;
