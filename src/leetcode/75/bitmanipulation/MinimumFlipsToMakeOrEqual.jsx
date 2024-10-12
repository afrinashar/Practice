import  { useState } from 'react';

const minFlips = (a, b, c) => {
    let flips = 0;
    while (a > 0 || b > 0 || c > 0) {
        const bitA = a & 1;
        const bitB = b & 1;
        const bitC = c & 1;

        if (bitC === 0) {
            flips += bitA + bitB;
        } else {
            if (bitA === 0 && bitB === 0) {
                flips += 1;
            }
        }

        a >>= 1;
        b >>= 1;
        c >>= 1;
    }
    return flips;
};

const MinimumFlipsToMakeOrEqual = () => {
    const [a, setA] = useState(2);
    const [b, setB] = useState(6);
    const [c, setC] = useState(5);
    const [result, setResult] = useState(null);

    const calculateMinimumFlips = () => {
        setResult(minFlips(a, b, c));
    };

    return (
        <div>
            <h3>Minimum Flips to Make a OR b Equal to c</h3>
            <input
                type="number"
                value={a}
                onChange={(e) => setA(Number(e.target.value))}
                placeholder="Enter a"
            />
            <input
                type="number"
                value={b}
                onChange={(e) => setB(Number(e.target.value))}
                placeholder="Enter b"
            />
            <input
                type="number"
                value={c}
                onChange={(e) => setC(Number(e.target.value))}
                placeholder="Enter c"
            />
            <button onClick={calculateMinimumFlips}>Calculate</button>
            <div>
                <strong>Result:</strong> {result !== null ? result : 'Not calculated yet'}
            </div>
        </div>
    );
};

export default MinimumFlipsToMakeOrEqual;
