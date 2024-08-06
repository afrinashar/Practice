import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Hooks = () => {
  const collection =[
    {"name":"useState", "link":"/hooks/usestate"},
    {"name":"useReducer", "link":"/hooks/usereducer"},

  ]
  const collection1 =[
    {"name":"useRef", "link":"/hooks/useref"} 

  ]
  const collection2 =[
    {"name":"useEffect", "link":"/hooks/useeffect"},
    {"name":"useLayout", "link":"/hooks/uselayout"},
    {"name":"useReducer", "link":"/hooks/usereducer"},

  ]
  const collection3 =[
    {"name":"UseContext", "link":"/hooks/usecontext"},

  ]
  const collection4 =[
    {"name":"Callback", "link":"/hooks/callback"},
    {"name":"useMemo", "link":"/hooks/usememo"},

  ]
  return (<>
   <div className=' mt-5'><div>State Hooks</div>

  <div>{  collection.map((data ,index) =>{ return (<Card key={index}><Card.Title>{data.name}</Card.Title>
        <Card.Text>
          Click below
        </Card.Text>
        <Link to={data.link} variant="btn btn-success">Topics</Link></Card>)})}
      </div>  <br></br> <div>Ref Hooks</div>

<div>{  collection1.map((data ,index) =>{ return (<Card key={index}><Card.Title>{data.name}</Card.Title>
     <Card.Text>
       Click below
     </Card.Text>
     <Link to={data.link} variant="btn btn-success">Topics</Link></Card>)})}
   </div> <div>
  <div>State Hooks</div>
{  collection.map((data ,index) =>{ return (<Card key={index}><Card.Title>{data.name}</Card.Title>
     <Card.Text>
       Click below
     </Card.Text>
     <Link to={data.link} variant="btn btn-success">Topics</Link></Card>)})}
   </div>  <div>Effect Hooks</div>

{  collection2.map((data ,index) =>{ return (<Card key={index}><Card.Title>{data.name}</Card.Title>
     <Card.Text>
       Click below
     </Card.Text>
     <Link to={data.link} variant="btn btn-success">Topics</Link></Card>)})}
     <div>Context Hooks</div>

{  collection3.map((data ,index) =>{ return (<Card key={index}><Card.Title>{data.name}</Card.Title>
     <Card.Text>
       Click below
     </Card.Text>
     <Link to={data.link} variant="btn btn-success">Topics</Link></Card>)})}
     <div>Callback Hooks</div>

{  collection4.map((data ,index) =>{ return (<Card key={index}><Card.Title>{data.name}</Card.Title>
     <Card.Text>
       Click below
     </Card.Text>
     <Link to={data.link} variant="btn btn-success">Topics</Link></Card>)})}
 </div>  </> )
}

export default Hooks