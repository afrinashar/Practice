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
              title="Topics"
              text="Learn about different methods and techniques."
              link="/topics"
              linkText="Go to Methods"
              cardStyle={{ borderColor: '#17a2b8', borderWidth: '2px' }}
              buttonStyle={{ backgroundColor: '#17a2b8', color: '#fff' }}
            />
          </Col>
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card
              title="Chat GPT"
              text="React JS example from Chat GPT."
              link="/gpt"
              linkText="Go to GPT"
              cardStyle={{ borderColor: '#92920B', borderWidth: '2px' }}
              buttonStyle={{ backgroundColor: '#92920B', color: '#fff' }}
            />
          </Col>
          
        </Row>
        <Row>
        <Col sm={12} md={6} lg={4} className="mb-4">
            <Card
              title="Javascript"
              text="Javascript loics."
              link="/javascript"
              linkText="Go to JS"
              cardStyle={{ borderColor: '#B90053', borderWidth: '2px' }}
              buttonStyle={{ backgroundColor: '#B90053', color: '#fff' }}
            />
          </Col>
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card
              title="DSA"
              text="Javascript loics."
              link="/dsa"
              linkText="Go to DSA"
              cardStyle={{ borderColor: '#D034FD', borderWidth: '2px' }}
              buttonStyle={{ backgroundColor: '#D034FD', color: '#fff' }}
            />
          </Col> 
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card
              title="Node"
              text="Node js questions."
              link="/node"
              linkText="Go to node"
              cardStyle={{ borderColor: '#6600B9', borderWidth: '2px' }}
              buttonStyle={{ backgroundColor: '#6600B9', color: '#fff' }}
            />
          </Col> 
        </Row>
        <Row>
        <Col sm={12} md={6} lg={4} className="mb-4">
            <Card
              title="Native"
              text="react native loics."
              link="/native"
              linkText="Go to native"
              cardStyle={{ borderColor: '#B96301', borderWidth: '2px' }}
              buttonStyle={{ backgroundColor: ' #B96301', color: '#fff' }}
            />
          </Col>
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card
              title="AI"
              text="AI conceptsai."
              link="/ai"
              linkText="Go to AI"
              cardStyle={{ borderColor: '#FF1111', borderWidth: '2px' }}
              buttonStyle={{ backgroundColor: '#FF1111', color: '#fff' }}
            />
          </Col> 
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card
              title="What i learn today "
              text="new things i learn from daytoday "
              link="/today"
              linkText="Go to today"
              cardStyle={{ borderColor: '#11FFA0', borderWidth: '2px' }}
              buttonStyle={{ backgroundColor: '#11FFA0', color: '#fff' }}
            />
          </Col> 
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card
              title="Links "
              text="website links "
              link="/links"
              linkText="Add link"
              cardStyle={{ borderColor: '#6F0D06', borderWidth: '2px' }}
              buttonStyle={{ backgroundColor: '#6F0D06', color: '#fff' }}
            />
          </Col> 
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
          </Col><Col sm={12} md={6} lg={4} className="mb-4">
            <Card
              title="CSS"
              text="Basic css ."
              link="/css"
              linkText="Go to CSS"
              cardStyle={{ borderColor: '#011655', borderWidth: '2px' }}
              buttonStyle={{ backgroundColor: '#011655', color: '#fff' }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
