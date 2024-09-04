const Data=[
{
    type:"usestate", header:"useState", content:`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>


      ‘useState’: It is the most commonly used React Hook. It allows functional components to have state variables. It takes an initial state value as the argument and returns an array with two elements — the current state value and a function to update that state.
    </div>
  );
}
export default Counter`
},
{
    type:"callback", header:"Use Callback", content:`import { useState, useCallback } from 'react';

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
 
`
},
{
    type:"usememo", header:"Use Memo", content:`import  { useState, useMemo } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

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
    </div>
  );
}

export default Example;`
},
{
    type:"usecontext", header:"usecontext", content:`import   { useContext } from 'react';
import MyContext from './createContext';

function ChildComponent() {
  const contextValue = useContext(MyContext);

  return <div>{contextValue} </div>;
}
export default ChildComponent`
},
{
    type:"useeffect", header:"Use Effect", content:`import   { useState, useEffect } from 'react';

function Example() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This effect runs after the component has rendered

    const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/products?limit=100");
        const json = await response.json();
        setData(json);
      };
    fetchData()
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    // Clean up the effect
    return () => {
      // Perform any necessary cleanup here
      // This is optional but important to prevent memory leaks
    };
  }, []); // Empty dependency array, so the effect runs only once on component mount

  return <div>{data ? <p>Data: {data}</p> : <p>Loading data...</p>}</div>;
}

export default Example;
`
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
{
    type:"", header:"", content:``
},
]
export default Data