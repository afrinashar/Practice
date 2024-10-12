import React, { useState } from 'react';

const TotalCostToHireKWorkers = ({ costs, k }) => {
    const [result, setResult] = useState(null);

    const calculateTotalCost = () => {
        // Sort the costs array
        const sortedCosts = [...costs].sort((a, b) => a - b);
        
        // Calculate the total cost of hiring k workers
        let totalCost = 0;
        for (let i = 0; i < k; i++) {
            totalCost += sortedCosts[i];
        }
        setResult(totalCost);
    };

    return (
        <div>
            <h3>Total Cost to Hire K Workers</h3>
            <button onClick={calculateTotalCost}>Calculate Total Cost</button>
            <div>
                <strong>Costs:</strong> {costs.join(', ')}
            </div>
            <div>
                <strong>K:</strong> {k}
            </div>
            <div>
                <strong>Total Cost:</strong> {result !== null ? `$${result}` : 'Not calculated yet'}
            </div>
        </div>
    );
};

export default TotalCostToHireKWorkers;
