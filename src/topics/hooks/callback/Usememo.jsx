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

export default Example;