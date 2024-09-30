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
    type:"usereducer", header:"Use Reducer", content:`import   { useReducer } from 'react';

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

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Counter;`
},
{
    type:"useref", header:"Use Ref", content:` import { useRef } from "react"
export const Useref = () => {
    const refContainer = useRef(null)
    const divContainer = useRef(null)
    const handleSubmit = (e ) => {
        e.preventDefault()
     console.log(refContainer.current.value)
     console.log(divContainer.current)
    }
     
    return (
      <>
        <form onSubmit= {handleSubmit}>
          <div>
             <input type="text" ref={refContainer} />
          </div>
          <div ref={divContainer}> </div>
        </form>
     {refContainer.current.value} 
     <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"></img>
     </>
    )
    } 
`
},
{
    type:"uselayout", header:"Use Layout", content:`import  { useState, useLayoutEffect } from 'react';

function Example() {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    // This effect runs synchronously after all DOM mutations
    // but before the browser paints

    const updateWidth = () => {
      const newWidth = document.documentElement.clientWidth;
      setWidth(newWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', updateWidth);

    // Initial width update
    updateWidth();

    // Clean up the effect
    return () => {
      // Remove event listener
      window.removeEventListener('resize', updateWidth);
    };
  }, []); // Empty dependency array, so the effect runs only once on component mount

  return <><div>Window width: {width}px</div>‘useLayoutEffect’: Similar to ‘useEffect’, but runs synchronously after all DOM mutations are applied, useful for measuring layout or performing DOM manipulations that require synchronous updates.</>;
}

export default Example;`
},
{
    type:"useeffectonce", header:"UseEffect Once", content:`import  { useEffect } from 'react';

function useEffectOnce(effect) {
  useEffect(effect, []);
}

// Usage:
function Example() {
  useEffectOnce(() => {
    // This effect runs only once on component mount
    console.log('Effect ran only once');
  });

  return <> <div>Example Component</div>‘useEffectOnce’: A custom hook that runs an effect only once when the component mounts.</>;
}

export default Example;`
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