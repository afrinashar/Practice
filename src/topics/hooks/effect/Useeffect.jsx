<<<<<<< HEAD
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
=======
import   { useState, useEffect } from 'react';
import Data from '../../Data';
import CodeBase from '../../../assets/CodeBase';
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
  const useeffect = Data.find(item => item.type === 'useeffect') || { header: 'useeffect', content: '' };

  return <div>{data ? <p>Data: {data}</p> : <p>Loading data...</p>}
  
  <div className="col mb-4">
        <div style={{ backgroundColor: '#ffc107', color: '#fff' }} className="col ">
          <h2 className="text-light mb-2">{useeffect.header}</h2>
          <CodeBase header={useeffect.header} content={useeffect.content} />
        </div>
      </div>
  </div>;
}

export default Example;
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574
