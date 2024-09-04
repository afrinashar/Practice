import  { useState } from 'react';

// Function to compute the N-th Tribonacci number
const nthTribonacci = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;

    let a = 0, b = 1, c = 1, d;
    for (let i = 3; i <= n; i++) {
        d = a + b + c;
        a = b;
        b = c;
        c = d;
    }
    return d;
};

const NThTribonacciNumber = ({ n }) => {
    const [result, setResult] = useState(null);

    const calculateTribonacci = () => {
        const res = nthTribonacci(n);
        setResult(res);
    };

    return (
        <div>
            <h3>N-th Tribonacci Number</h3>
            <input
                type="number"
                value={n}
                onChange={(e) => setResult(nthTribonacci(Number(e.target.value)))}
                min="0"
            />
            <button onClick={calculateTribonacci}>Calculate</button>
            <div>
                <strong>Result:</strong> {result === null ? 'Not calculated yet' : result}
            </div>
        </div>
    );
};

export default NThTribonacciNumber;
