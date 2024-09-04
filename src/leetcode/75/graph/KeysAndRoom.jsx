import React, { useState } from 'react';

const KeysAndRooms = ({ rooms }) => {
    const [result, setResult] = useState(null);

    const canVisitAllRooms = () => {
        const visited = new Set();
        const stack = [0];
        while (stack.length) {
            const room = stack.pop();
            if (!visited.has(room)) {
                visited.add(room);
                stack.push(...rooms[room]);
            }
        }
        setResult(visited.size === rooms.length);
    };

    return (
        <div>
            <h3>Keys and Rooms</h3>
            <button onClick={canVisitAllRooms}>Check</button>
            <div>
                <strong>Rooms:</strong> {rooms.map(room => `[${room.join(', ')}]`).join(', ')}
            </div>
            <div>
                <strong>Result:</strong> {result !== null ? (result ? 'Yes' : 'No') : 'Not checked yet'}
            </div>
        </div>
    );
};

export default KeysAndRooms;
