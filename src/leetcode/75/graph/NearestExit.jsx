import React, { useState } from 'react';

// Utility function to perform BFS
const bfs = (maze, entrance) => {
    const rows = maze.length;
    const cols = maze[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const queue = [[entrance[0], entrance[1], 0]]; // [row, col, distance]
    const visited = new Set();
    visited.add(`${entrance[0]},${entrance[1]}`);

    while (queue.length > 0) {
        const [row, col, distance] = queue.shift();

        // Check if it's an exit
        if ((row !== entrance[0] || col !== entrance[1]) && (row === 0 || row === rows - 1 || col === 0 || col === cols - 1)) {
            return distance;
        }

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            const newPos = `${newRow},${newCol}`;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && maze[newRow][newCol] === '.' && !visited.has(newPos)) {
                visited.add(newPos);
                queue.push([newRow, newCol, distance + 1]);
            }
        }
    }

    return -1;
};

const NearestExit = ({ maze, entrance }) => {
    const [result, setResult] = useState(null);

    const findExit = () => {
        const res = bfs(maze, entrance);
        setResult(res);
    };

    return (
        <div>
            <h3>Nearest Exit from Entrance in Maze</h3>
            <button onClick={findExit}>Find Nearest Exit</button>
            <div>
                <strong>Maze:</strong>
                <pre>{maze.map(row => row.join(' ')).join('\n')}</pre>
            </div>
            <div>
                <strong>Entrance:</strong> {entrance.join(', ')}
            </div>
            <div>
                <strong>Result:</strong> {result === null ? 'Not evaluated yet' : (result === -1 ? 'No exit found' : `Nearest exit is ${result} steps away`)}
            </div>
        </div>
    );
};

export default NearestExit;
