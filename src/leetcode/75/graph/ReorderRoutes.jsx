import React, { useState } from 'react';

const ReorderRoutes = ({ connections }) => {
    const [result, setResult] = useState(null);

    const minReorder = () => {
        const graph = new Map();
        const visited = new Set();
        let count = 0;

        connections.forEach(([from, to, isReversed]) => {
            if (!graph.has(from)) graph.set(from, []);
            if (!graph.has(to)) graph.set(to, []);
            graph.get(from).push([to, isReversed]);
            graph.get(to).push([from, 1 - isReversed]);
        });

        const dfs = (node) => {
            visited.add(node);
            graph.get(node).forEach(([neighbor, isReversed]) => {
                if (!visited.has(neighbor)) {
                    count += isReversed;
                    dfs(neighbor);
                }
            });
        };

        dfs(0);
        setResult(count);
    };

    return (
        <div>
            <h3>Reorder Routes</h3>
            <button onClick={minReorder}>Calculate</button>
            <div>
                <strong>Connections:</strong> {connections.map(conn => `[${conn.join(', ')}]`).join(', ')}
            </div>
            <div>
                <strong>Result:</strong> {result !== null ? result : 'Not calculated yet'}
            </div>
        </div>
    );
};

export default ReorderRoutes;
