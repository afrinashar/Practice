 import { Link } from 'react-router-dom';
import Card from '../assets/Card'; // Import the custom card component

const Topics = () => {
  const collection = [
    { "name": "Hooks", "link": "/hooks" },
    { "name": "Passing Data", "link": "/passdata" },
  ];

  return (
    <>
      <div>Topics</div>
      {collection.map((data, index) => (
        <Card
          key={index}
          title={data.name}
          text="Click below"
          link={data.link}
          linkText="Topics"
          cardStyle={{ borderColor: '#28a745', borderWidth: '2px' }} // Example of inline style customization
          buttonStyle={{ backgroundColor: '#28a745', color: '#fff' }} // Button style customization
        />
      ))}
      
    </>
  );
};

export default Topics;
