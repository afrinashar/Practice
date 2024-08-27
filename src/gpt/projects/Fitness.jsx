import { useState } from 'react';
import Button from '../../assets/Button';
 
const Fitness = () => {
  const [exercises, setExercises] = useState([]);
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');

  const handleAddExercise = () => {
    setExercises([...exercises, { exercise, duration: parseFloat(duration) }]);
    setExercise('');
    setDuration('');
  };

  const totalDuration = exercises.reduce((sum, ex) => sum + ex.duration, 0);

  return (
    <div style={{backgroundColor:"#D04CE4", color:"white"}}>
      <h1>Fitness Tracker</h1>
      <div>
        <input
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          placeholder="Exercise"
        />
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration (mins)"
        />
        <Button style={{backgroundColor:"#88059C", color:"white"}} onClick={handleAddExercise} text="Add Exercise"/>
      </div>
      <ul>
        {exercises.map((ex, index) => (
          <li key={index}>
            {ex.exercise}: {ex.duration} mins
          </li>
        ))}
      </ul>
      <h2 style={{color:"white"}}>Total Duration: {totalDuration} mins</h2>
    </div>
  );
};

export default Fitness;
