 import { Container, Row, Col } from 'react-bootstrap';
import Card from './assets/Card'; // Adjust the path as necessary

export const Dashboard = () => {
  return (
    <>
      
      <Container>
        <Row>
          {/* FreeCodeCamp Card */}
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card
              title="FreeCodeCamp"
              text="Explore FreeCodeCamp tutorials and exercises."
              link="/freecodecamp"
              linkText="Go to FreeCodeCamp"
              cardStyle={{ borderColor: '#007bff', borderWidth: '2px' }}
              buttonStyle={{ backgroundColor: '#007bff' }}
            />
          </Col>

          {/* DEV Card */}
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card
              title="DEV Community"
              text="Read and contribute to DEV Community articles."
              link="/dev"
              linkText="Go to DEV"
              cardStyle={{ borderColor: '#28a745', borderWidth: '2px' }}
              buttonStyle={{ backgroundColor: '#28a745' }}
            />
          </Col>

           <Col sm={12} md={6} lg={4} className="mb-4">
            <Card
              title="LeetCode"
              text="Practice coding challenges on LeetCode."
              link="/leetcode"
              linkText="Go to LeetCode"
              cardStyle={{ borderColor: '#ffc107', borderWidth: '2px' }}
              buttonStyle={{ backgroundColor: '#ffc107', color: '#fff' }}
            />
          </Col>

           <Col sm={12} md={6} lg={4} className="mb-4">
            <Card
              title="Methods"
              text="Learn about different methods and techniques."
              link="/methods"
              linkText="Go to Methods"
              cardStyle={{ borderColor: '#fff', borderWidth: '2px' }}
              buttonStyle={{ backgroundColor: '#17a2b8', color: '#fff' }}
            />
          </Col>
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card
              title="Chat GPT"
              text="React JS example from Chat GPT."
              link="/gpt"
              linkText="Go to GPT"
              cardStyle={{ borderColor: '#fff', borderWidth: '2px' }}
              buttonStyle={{ backgroundColor: '#92920B', color: '#fff' }}
            />
          </Col>
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card
              title="CSS"
              text="Basic css ."
              link="/css"
              linkText="Go to CSS"
              cardStyle={{ borderColor: '#fff', borderWidth: '2px' }}
              buttonStyle={{ backgroundColor: '#011655', color: '#fff' }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
