import   { useReducer } from 'react';
import CodeBase from '../../../assets/CodeBase';
import Data from '../../Data';
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unsupported action type');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  const reset = () => {
    dispatch({ type: 'reset' });
  };
  const usereducer = Data.find(item => item.type === 'usereducer') || { header: 'usereducer', content: '' };

  return (
    <div className='bg-primary text-light'>
      <p>Count: {state.count}</p>
      <button className='bg-light text-primary' onClick={increment}>Increment</button>
      <button className='bg-light text-primary' onClick={decrement}>Decrement</button>
      <button className='bg-light text-primary' onClick={reset}>Reset</button>
      <CodeBase header={usereducer.header} content={usereducer.content} />

    </div>
  );
}
export default Counter;