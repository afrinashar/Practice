import React, { useState } from 'react';

const SmallestNumberInfiniteSet = ({ nums }) => {
    const [result, setResult] = useState(null);

    const findSmallestNumber = () => {
        const set = new Set(nums);
        let smallest = 1;
        while (set.has(smallest)) {
            smallest++;
        }
        setResult(smallest);
    };

    return (
        <div>
            <h3>Smallest Number in Infinite Set</h3>
            <button onClick={findSmallestNumber}>Find Smallest Number</button>
            <div>
                <strong>Numbers:</strong> {nums.join(', ')}
            </div>
            <div>
                <strong>Smallest Number:</strong> {result !== null ? result : 'Not calculated yet'}
            </div>
        </div>
    );
};

export default SmallestNumberInfiniteSet;
