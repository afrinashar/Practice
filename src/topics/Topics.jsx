import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Topics = () => {
  const collection =[
    {"name":"Hooks", "link":"/hooks"},
    {"name":"Passing Data", "link":"/passdata"},

  ]
  return (<>
    <div>Topics</div>
   {  collection.map((data ,index) =>{ return (<Card key={index}><Card.Title>{data.name}</Card.Title>
        <Card.Text>
          Click below
        </Card.Text>
        <Link to={data.link} variant="btn btn-success">Topics</Link></Card>)})}
    <img  height={200} width={400} src='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*imIl35EDoLGvSQRvDJJiHQ.png'></img>
 </> )
}

export default Topics
