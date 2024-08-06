import  { useEffect } from 'react';

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

export default Example;