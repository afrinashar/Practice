import   { useState } from 'react';

const countingBits = (n) => {
    const result = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        result[i] = result[i >> 1] + (i & 1);
    }
    return result;
};

const CountingBits = () => {
    const [num, setNum] = useState(5);
    const [result, setResult] = useState([]);

    const calculateBits = () => {
        setResult(countingBits(num));
    };

    return (
        <div>
            <h3>Counting Bits</h3>
            <input
                type="number"
                value={num}
                onChange={(e) => setNum(Number(e.target.value))}
                placeholder="Enter a number"
            />
            <button onClick={calculateBits}>Calculate</button>
            <div>
                <strong>Result:</strong> {result.length > 0 ? result.join(', ') : 'Not calculated yet'}
            </div>
        </div>
    );
};

export default CountingBits;
