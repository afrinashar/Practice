import React, { useState } from 'react';

const letterCombinations = (digits) => {
    if (!digits) return [];

    const phone = {
        2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl',
        6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'
    };

    const backtrack = (combination, nextDigits) => {
        if (!nextDigits.length) {
            results.push(combination);
        } else {
            const digit = nextDigits[0];
            const letters = phone[digit];
            for (let i = 0; i < letters.length; i++) {
                backtrack(combination + letters[i], nextDigits.slice(1));
            }
        }
    };

    const results = [];
    backtrack('', digits);
    return results;
};

const LetterCombinations = () => {
    const [digits, setDigits] = useState('');
    const [combinations, setCombinations] = useState([]);

    const handleGenerateCombinations = () => {
        setCombinations(letterCombinations(digits));
    };

    return (
        <div>
            <h3>Letter Combinations of a Phone Number</h3>
            <input
                type="text"
                placeholder="Enter digits"
                value={digits}
                onChange={(e) => setDigits(e.target.value)}
            />
            <button onClick={handleGenerateCombinations}>Generate Combinations</button>
            <div>
                <strong>Combinations:</strong> {combinations.join(', ')}
            </div>
        </div>
    );
};

export default LetterCombinations;
