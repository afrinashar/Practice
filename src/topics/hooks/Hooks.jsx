 import { Link } from 'react-router-dom';
import Card from '../../assets/Card'; // Import the custom card component
import './Hooks.css'; // Import custom CSS

const Hooks = () => {
  const collection = [
    { "name": "useState", "link": "/hooks/usestate" },
    { "name": "useReducer", "link": "/hooks/usereducer" },
  ];

  const collection1 = [
    { "name": "useRef", "link": "/hooks/useref" }
  ];

  const collection2 = [
    { "name": "useEffect", "link": "/hooks/useeffect" },
    { "name": "useLayout", "link": "/hooks/uselayout" },
    { "name": "useReducer", "link": "/hooks/usereducer" },
  ];

  const collection3 = [
    { "name": "UseContext", "link": "/hooks/usecontext" },
  ];

  const collection4 = [
    { "name": "Callback", "link": "/hooks/callback" },
    { "name": "useMemo", "link": "/hooks/usememo" },
  ];

  return (
    <>
      <div className='mt-5'>
        <div className='section-header'>State Hooks</div>
        <div className='card-container'>
          {collection.map((data, index) => (
            <Card
              key={index}
              title={data.name}
              text="Click below"
              link={data.link}
              linkText="Topics"
              cardStyle={{ borderColor: '#007bff', borderWidth: '2px' }} // Example customization
              buttonStyle={{ backgroundColor: '#007bff', color: '#fff' }} // Button style customization
            />
          ))}
        </div>

        <div className='section-header'>Ref Hooks</div>
        <div className='card-container'>
          {collection1.map((data, index) => (
            <Card
              key={index}
              title={data.name}
              text="Click below"
              link={data.link}
              linkText="Topics"
              cardStyle={{ borderColor: '#28a745', borderWidth: '2px' }} // Example customization
              buttonStyle={{ backgroundColor: '#28a745', color: '#fff' }} // Button style customization
            />
          ))}
        </div>

        <div className='section-header'>Effect Hooks</div>
        <div className='card-container'>
          {collection2.map((data, index) => (
            <Card
              key={index}
              title={data.name}
              text="Click below"
              link={data.link}
              linkText="Topics"
              cardStyle={{ borderColor: '#ffc107', borderWidth: '2px' }} // Example customization
              buttonStyle={{ backgroundColor: '#ffc107', color: '#fff' }} // Button style customization
            />
          ))}
        </div>

        <div className='section-header'>Context Hooks</div>
        <div className='card-container'>
          {collection3.map((data, index) => (
            <Card
              key={index}
              title={data.name}
              text="Click below"
              link={data.link}
              linkText="Topics"
              cardStyle={{ borderColor: '#17a2b8', borderWidth: '2px' }} // Example customization
              buttonStyle={{ backgroundColor: '#17a2b8', color: '#fff' }} // Button style customization
            />
          ))}
        </div>

        <div className='section-header'>Callback Hooks</div>
        <div className='card-container'>
          {collection4.map((data, index) => (
            <Card
              key={index}
              title={data.name}
              text="Click below"
              link={data.link}
              linkText="Topics"
              cardStyle={{ borderColor: '#6610f2', borderWidth: '2px' }} // Example customization
              buttonStyle={{ backgroundColor: '#6610f2', color: '#fff' }} // Button style customization
            />
          ))}
        </div>
      </div>
      <img
        height={200}
        width={400}
        src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*imIl35EDoLGvSQRvDJJiHQ.png"
        alt="Sample"
      />
    </>
  );
};

export default Hooks;
