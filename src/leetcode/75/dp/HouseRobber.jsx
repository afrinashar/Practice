import React, { useState } from 'react';

// Function to compute the maximum money that can be robbed
const houseRobber = (nums) => {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    let prev1 = 0;
    let prev2 = 0;

    for (let num of nums) {
        let temp = prev1;
        prev1 = Math.max(prev2 + num, prev1);
        prev2 = temp;
    }

    return prev1;
};

const HouseRobber = () => {
    const [nums, setNums] = useState([2, 7, 9, 3, 1]);
    const [result, setResult] = useState(null);

    const handleNumsChange = (index, value) => {
        const newNums = [...nums];
        newNums[index] = Number(value);
        setNums(newNums);
    };

    const calculateMaxRob = () => {
        setResult(houseRobber(nums));
    };

    return (
        <div>
            <h3>House Robber</h3>
            {nums.map((value, index) => (
                <input
                    key={index}
                    type="number"
                    value={value}
                    onChange={(e) => handleNumsChange(index, e.target.value)}
                    min="0"
                    style={{ marginRight: '10px' }}
                />
            ))}
            <button onClick={calculateMaxRob}>Calculate</button>
            <div>
                <strong>Result:</strong> {result === null ? 'Not calculated yet' : result}
            </div>
        </div>
    );
};

export default HouseRobber;
