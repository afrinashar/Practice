import React, { useState } from 'react';

const KokoEatingBananas = () => {
    const [piles, setPiles] = useState([]);
    const [hours, setHours] = useState(0);
    const [minSpeed, setMinSpeed] = useState(null);

    // Function to check if Koko can eat all bananas within given hours at a specific speed
    const canEatAllBananas = (speed) => {
        let totalHours = 0;
        for (const pile of piles) {
            totalHours += Math.ceil(pile / speed);
        }
        return totalHours <= hours;
    };

    // Function to find the minimum speed Koko needs to eat all bananas
    const findMinSpeed = () => {
        let left = 1; // Minimum possible speed
        let right = Math.max(...piles); // Maximum possible speed (at least one pile of bananas)
        let result = right;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (canEatAllBananas(mid)) {
                result = mid;
                right = mid - 1; // Try for a smaller speed
            } else {
                left = mid + 1; // Increase speed
            }
        }

        setMinSpeed(result);
    };

    return (
        <div>
            <h3>Koko Eating Bananas</h3>
            <input
                type="text"
                placeholder="Enter piles (comma-separated)"
                onChange={(e) => setPiles(e.target.value.split(',').map(Number))}
            />
            <input
                type="number"
                placeholder="Enter hours"
                onChange={(e) => setHours(Number(e.target.value))}
            />
            <button onClick={findMinSpeed}>Find Minimum Speed</button>
            <div>
                <strong>Minimum Speed:</strong> {minSpeed !== null ? minSpeed : 'Not calculated yet'}
            </div>
        </div>
    );
};

export default KokoEatingBananas;
