import React, { useState } from 'react';

// Utility function to perform DFS
const dfs = (graph, start, end, visited) => {
    if (start === end) return 1;
    visited.add(start);

    for (const [neighbor, value] of graph.get(start)) {
        if (!visited.has(neighbor)) {
            const result = dfs(graph, neighbor, end, visited);
            if (result !== -1) return result * value;
        }
    }
    return -1;
};

const EvaluateDivision = ({ equations, values, queries }) => {
    const [results, setResults] = useState([]);

    const evaluateQueries = () => {
        const graph = new Map();

        // Build the graph
        for (let i = 0; i < equations.length; i++) {
            const [a, b] = equations[i];
            const value = values[i];
            
            if (!graph.has(a)) graph.set(a, []);
            if (!graph.has(b)) graph.set(b, []);
            
            graph.get(a).push([b, value]);
            graph.get(b).push([a, 1 / value]);
        }

        // Evaluate each query
        const result = queries.map(([start, end]) => {
            if (!graph.has(start) || !graph.has(end)) return -1;
            return dfs(graph, start, end, new Set());
        });

        setResults(result);
    };

    return (
        <div>
            <h3>Evaluate Division</h3>
            <button onClick={evaluateQueries}>Evaluate</button>
            <div>
                <strong>Equations:</strong> {equations.map((eq, i) => `[${eq.join(' / ')} = ${values[i]}]`).join(', ')}
            </div>
            <div>
                <strong>Queries:</strong> {queries.map((query, i) => `[${query.join(' / ')}]`).join(', ')}
            </div>
            <div>
                <strong>Results:</strong> {results.length ? results.join(', ') : 'Not evaluated yet'}
            </div>
        </div>
    );
};

export default EvaluateDivision;
