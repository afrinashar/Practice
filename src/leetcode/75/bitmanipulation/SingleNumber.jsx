import  { useState } from 'react';

const singleNumber = (nums) => {
    return nums.reduce((acc, num) => acc ^ num, 0);
};

const SingleNumber = () => {
    const [numbers, setNumbers] = useState([2, 2, 1]);
    const [result, setResult] = useState(null);

    const calculateSingleNumber = () => {
        setResult(singleNumber(numbers));
    };

    return (
        <div>
            <h3>Single Number</h3>
            <input
                type="text"
                value={numbers.join(',')}
                onChange={(e) => setNumbers(e.target.value.split(',').map(Number))}
                placeholder="Enter numbers (comma separated)"
            />
            <button onClick={calculateSingleNumber}>Calculate</button>
            <div>
                <strong>Result:</strong> {result !== null ? result : 'Not calculated yet'}
            </div>
        </div>
    );
};

export default SingleNumber;
