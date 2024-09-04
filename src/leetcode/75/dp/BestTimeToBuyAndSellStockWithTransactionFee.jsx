import   { useState } from 'react';

const maxProfitWithFee = (prices, fee) => {
    let cash = 0; // Max profit we can have if we don't have stock at day i
    let hold = -prices[0]; // Max profit we can have if we hold stock at day i

    for (let i = 1; i < prices.length; i++) {
        cash = Math.max(cash, hold + prices[i] - fee);
        hold = Math.max(hold, cash - prices[i]);
    }

    return cash;
};

const BestTimeToBuyAndSellStockWithTransactionFee = () => {
    const [prices, setPrices] = useState([1, 3, 2, 8, 4, 9]);
    const [fee, setFee] = useState(2);
    const [result, setResult] = useState(null);

    const calculateMaxProfit = () => {
        setResult(maxProfitWithFee(prices, fee));
    };

    return (
        <div>
            <h3>Best Time to Buy and Sell Stock with Transaction Fee</h3>
            <input
                type="text"
                value={prices.join(',')}
                onChange={(e) => setPrices(e.target.value.split(',').map(Number))}
                placeholder="Enter prices (comma separated)"
            />
            <input
                type="number"
                value={fee}
                onChange={(e) => setFee(Number(e.target.value))}
                placeholder="Enter fee"
            />
            <button onClick={calculateMaxProfit}>Calculate</button>
            <div>
                <strong>Result:</strong> {result !== null ? result : 'Not calculated yet'}
            </div>
        </div>
    );
};

export default BestTimeToBuyAndSellStockWithTransactionFee;
