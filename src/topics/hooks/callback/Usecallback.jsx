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
 
