import { useState } from 'react';
import Data from '../../Data';
import CodeBase from '../../../assets/CodeBase';
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const usestate = Data.find(item => item.type === 'usestate') || { header: 'usestate', content: '' };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>


      ‘useState’: It is the most commonly used React Hook. It allows functional components to have state variables. It takes an initial state value as the argument and returns an array with two elements — the current state value and a function to update that state.
      <div className="col mb-4">
        <div className="col bg-primary">
          <h2 className="text-light mb-2">{usestate.header}</h2>
          <CodeBase header={usestate.header} content={usestate.content} />
        </div>
      </div>
    
    </div>
  );
}
export default Counter