 import Card from '../../assets/Card';
const PassData = () => {
    const collection = [
        { "name": "useState", "link": "/hooks/usestate" },
        { "name": "useReducer", "link": "/hooks/usereducer" },
      ];
  return (
    <div>
      <div className='section-header'>Effect Hooks</div>
        <div className='card-container'>
          {collection.map((data, index) => (
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
    </div>
  )
}

export default PassData
