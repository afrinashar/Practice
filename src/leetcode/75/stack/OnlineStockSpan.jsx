import React, { useState } from 'react';

const OnlineStockSpan = () => {
    const [price, setPrice] = useState('');
    const [prices, setPrices] = useState([]);
    const [span, setSpan] = useState([]);

    const calculateSpan = () => {
        const stack = [];
        const result = [];

        for (let i = 0; i < prices.length; i++) {
            while (stack.length > 0 && prices[i] >= prices[stack[stack.length - 1]]) {
                stack.pop();
            }
            result[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
            stack.push(i);
        }

        setSpan(result);
    };

    const handleAddPrice = () => {
        setPrices([...prices, Number(price)]);
        setPrice('');
    };

    return (
        <div>
            <h3>Online Stock Span</h3>
            <input
                type="number"
                value={price}
                onChange={e => setPrice(e.target.value)}
                placeholder="Enter stock price"
            />
            <button onClick={handleAddPrice}>Add Price</button>
            <button onClick={calculateSpan}>Calculate Span</button>
            <div>
                <strong>Prices:</strong> {prices.join(', ')}
            </div>
            <div>
                <strong>Span:</strong> {span.join(', ')}
            </div>
        </div>
    );
};

export default OnlineStockSpan;
