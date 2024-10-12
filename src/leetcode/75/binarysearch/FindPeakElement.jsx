import React, { useState } from 'react';

const findPeakElement = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        if ((i === 0 || nums[i] > nums[i - 1]) &&
            (i === nums.length - 1 || nums[i] > nums[i + 1])) {
            return nums[i];
        }
    }
    return null;
};

const FindPeakElement = () => {
    const [nums, setNums] = useState([]);
    const [peak, setPeak] = useState(null);

    const handleFindPeak = () => {
        setPeak(findPeakElement(nums));
    };

    return (
        <div>
            <h3>Find Peak Element</h3>
            <input
                type="text"
                placeholder="Enter nums (comma-separated)"
                onChange={(e) => setNums(e.target.value.split(',').map(Number))}
            />
            <button onClick={handleFindPeak}>Find Peak</button>
            <div>
                <strong>Peak Element:</strong> {peak}
            </div>
        </div>
    );
};

export default FindPeakElement;
