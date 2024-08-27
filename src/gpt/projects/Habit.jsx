import  { useState } from 'react';
import Button from '../../assets/Button';

const Habit = () => {
  const [habit, setHabit] = useState('');
  const [habits, setHabits] = useState([]);

  const addHabit = () => {
    if (habit) {
      setHabits([...habits, { name: habit, completed: false }]);
      setHabit('');
    }
  };

  const toggleCompletion = (index) => {
    setHabits(habits.map((h, i) => i === index ? { ...h, completed: !h.completed } : h));
  };

  return (
    <div style={{backgroundColor:"#D44A05", color:"white"}}>
      <h1>Habit Tracker</h1>
      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
      />
      <Button onClick={addHabit} style={{backgroundColor:"#722803", color:"white"}} text="Add Habit"/>
      <ul>
        {habits.map((h, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={h.completed}
              onChange={() => toggleCompletion(index)}
            />
            {h.name}
          </div >
        ))}
      </ul>
    </div>
  );
};

export default Habit;
