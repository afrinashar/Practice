import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
export const Dashboard = () => {
 
  return (<>
    <h1>Dashboard</h1>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="beginner">Beginner</Dropdown.Item>
        <Dropdown.Item href="medium">Medium</Dropdown.Item>
        <Dropdown.Item href="advance">Advance</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>      
  </>)
}
