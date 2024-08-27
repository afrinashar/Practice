import   { useState } from 'react';
import Button from '../../assets/Button';
 
const Expense = () => {
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (expense && amount) {
      setExpenses([...expenses, { expense, amount }]);
      setExpense('');
      setAmount('');
    }
  };

  const totalAmount = expenses.reduce((total, item) => total + parseFloat(item.amount), 0);

  return (
    <div style={{backgroundColor:"#03C02B", color:"white"}}>
      <h1>Expense Tracker</h1>
      <input
        type="text"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        placeholder="Expense"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <Button onClick={addExpense} style={{backgroundColor:"#03721C", color:"white"}}  text="Add Expense"/>
      <ul>
        {expenses.map((item, index) => (
          <li key={index}>
            {item.expense}: ${item.amount}
          </li>
        ))}
      </ul>
      <h2 style={{color:"white"}}>Total: ${totalAmount}</h2>
    </div>
  );
};

export default Expense;
