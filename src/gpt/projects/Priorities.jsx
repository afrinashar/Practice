<<<<<<< HEAD
import  { useState } from 'react';

const priorities = ['Low', 'Medium', 'High'];

const Priorities = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState(priorities[0]);
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { task, priority }]);
      setTask('');
    }
  };

  return (
    <div>
      <h1>To-Do List with Priorities</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          {priorities.map((p, index) => (
            <option key={index} value={p}>
              {p}
            </option>
          ))}
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t.task} - {t.priority}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Priorities;
=======
import  { useState } from 'react';

const priorities = ['Low', 'Medium', 'High'];

const Priorities = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState(priorities[0]);
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { task, priority }]);
      setTask('');
    }
  };

  return (
    <div>
      <h1>To-Do List with Priorities</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          {priorities.map((p, index) => (
            <option key={index} value={p}>
              {p}
            </option>
          ))}
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t.task} - {t.priority}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Priorities;
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574
