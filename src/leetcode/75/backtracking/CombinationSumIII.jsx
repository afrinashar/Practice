import  { useState } from 'react';

const combinationSum3 = (k, n) => {
    const result = [];

    const backtrack = (start, k, n, path) => {
        if (k === 0 && n === 0) {
            result.push([...path]);
            return;
        }
        if (k === 0 || n < 0) return;

        for (let i = start; i <= 9; i++) {
            path.push(i);
            backtrack(i + 1, k - 1, n - i, path);
            path.pop();
        }
    };

    backtrack(1, k, n, []);
    return result;
};

const CombinationSumIII = () => {
    const [k, setK] = useState(0);
    const [n, setN] = useState(0);
    const [combinations, setCombinations] = useState([]);

    const handleFindCombinations = () => {
        setCombinations(combinationSum3(k, n));
    };

    return (
        <div>
            <h3>Combination Sum III</h3>
            <input
                type="number"
                placeholder="Enter k"
                value={k}
                onChange={(e) => setK(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Enter n"
                value={n}
                onChange={(e) => setN(Number(e.target.value))}
            />
            <button onClick={handleFindCombinations}>Find Combinations</button>
            <div>
                <strong>Combinations:</strong> {combinations.map(combo => `(${combo.join(', ')})`).join(', ')}
            </div>
        </div>
    );
};

export default CombinationSumIII;
