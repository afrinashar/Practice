import React, { useState } from 'react';

const SuccessfulPairsOfSpellsAndPotions = () => {
    const [spells, setSpells] = useState([]);
    const [potions, setPotions] = useState([]);
    const [pairs, setPairs] = useState([]);

    const findPairs = () => {
        // Example implementation
        const result = [];
        for (const spell of spells) {
            for (const potion of potions) {
                if (spell + potion > 10) { // Example condition
                    result.push([spell, potion]);
                }
            }
        }
        setPairs(result);
    };

    return (
        <div>
            <h3>Successful Pairs of Spells and Potions</h3>
            <input
                type="text"
                placeholder="Enter spells (comma-separated)"
                onChange={(e) => setSpells(e.target.value.split(',').map(Number))}
            />
            <input
                type="text"
                placeholder="Enter potions (comma-separated)"
                onChange={(e) => setPotions(e.target.value.split(',').map(Number))}
            />
            <button onClick={findPairs}>Find Pairs</button>
            <div>
                <strong>Pairs:</strong> {pairs.map(pair => `(${pair.join(', ')})`).join(', ')}
            </div>
        </div>
    );
};

export default SuccessfulPairsOfSpellsAndPotions;
