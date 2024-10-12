<<<<<<< HEAD
import  { useState, useMemo } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>useMemo, React remembers the result of that function as long as its inputs stay the same. So, if your inputs don't change, React just grabs the stored result instead of recalculating it every time. This saves time and makes your app snappier.</p>
   <p>useMemo:
useMemo is used for memoizing expensive computations within functional components.
It caches the result of a function and returns the cached result when the inputs to the function remain unchanged.
Unlike useState and useEffect, which manage state and side effects respectively, useMemo focuses solely on optimizing performance by avoiding unnecessary recalculations.</p>
    </div>
  );
}

=======
import  { useState, useMemo } from 'react';
import Data
 from '../../Data';
 import CodeBase from '../../../assets/CodeBase';
function Example() {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);
  const usememo = Data.find(item => item.type === 'usememo') || { header: 'usememo', content: '' };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button style={{ backgroundColor: '#6610f2', color: '#fff' }} onClick={() => setCount(count + 1)}>Increment</button>
      <p>useMemo, React remembers the result of that function as long as its inputs stay the same. So, if your inputs don't change, React just grabs the stored result instead of recalculating it every time. This saves time and makes your app snappier.</p>
   <p>useMemo:
useMemo is used for memoizing expensive computations within functional components.
It caches the result of a function and returns the cached result when the inputs to the function remain unchanged.
Unlike useState and useEffect, which manage state and side effects respectively, useMemo focuses solely on optimizing performance by avoiding unnecessary recalculations.</p>
<div className="col mb-4">
        <div className="col " style={{ backgroundColor: '#6610f2', color: '#fff' }}>
          <h2 className="text-light mb-2">{usememo.header}</h2>
          <CodeBase header={usememo.header} content={usememo.content} />
        </div>
      </div> </div>
  );
}

>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574
export default Example;