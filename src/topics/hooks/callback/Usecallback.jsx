<<<<<<< HEAD
import { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
}
export default ParentComponent
function ChildComponent({ handleClick }) {
  return<><button onClick={handleClick}>Increment</button>;
  <p>useCallback: The useCallback hook is used to memoize callbacks. It takes a callback function and an array of dependencies and returns a memoized callback. This is beneficial in scenarios where passing callbacks to child components might cause unnecessary re-renders.</p>
</> }
 
=======
import { useState, useCallback } from 'react';
import Data from '../../Data';
import CodeBase from '../../../assets/CodeBase';
function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);  
  const callback = Data.find(item => item.type === 'callback') || { header: 'callback', content: '' };

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent handleClick={handleClick} />
      <div className="col mb-4">
        <div className="col " style={{ backgroundColor: '#6610f2', color: '#fff' }}>
          <h2 className="text-light mb-2">{callback.header}</h2>
          <CodeBase header={callback.header} content={callback.content} />
        </div>
      </div>
    </div>
  );
}
export default ParentComponent
function ChildComponent({ handleClick }) {
  return<><button style={{ backgroundColor: '#6610f2', color: '#fff' }} onClick={handleClick}>Increment</button>
  <p>useCallback: The useCallback hook is used to memoize callbacks. It takes a callback function and an array of dependencies and returns a memoized callback. This is beneficial in scenarios where passing callbacks to child components might cause unnecessary re-renders.</p>
</> }
 
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574
