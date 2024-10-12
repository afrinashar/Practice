import React, { useState } from 'react';

const KthLargestElement = ({ nums, k }) => {
    const [result, setResult] = useState(null);

    const findKthLargest = () => {
        const sorted = [...nums].sort((a, b) => b - a);
        setResult(sorted[k - 1]);
    };

    return (
        <div>
            <h3>Kth Largest Element</h3>
            <button onClick={findKthLargest}>Find Kth Largest</button>
            <div>
                <strong>Numbers:</strong> {nums.join(', ')}
            </div>
            <div>
                <strong>K:</strong> {k}
            </div>
            <div>
                <strong>Kth Largest Element:</strong> {result !== null ? result : 'Not calculated yet'}
            </div>
        </div>
    );
};

export default KthLargestElement;
