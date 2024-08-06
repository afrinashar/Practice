import   { useState, useEffect } from 'react';

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
