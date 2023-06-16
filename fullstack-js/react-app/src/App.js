import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [attractions, setAttractions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3333/attractions")
      .then(res => res.json())
      .then(
        (result) => {
          setAttractions(result);
        }
      )
  }, [])
  return (
    <Container>
      <Row>
        {attractions.map(attraction => (
          <Col xs={12} sm={4} key={attraction.id}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={attraction.coverimage} />
              <Card.Body>
                <Card.Title>{attraction.name}</Card.Title>
                <Card.Text className="text-truncate">
                  {attraction.detail}
                </Card.Text>
                <Button variant="primary">See more</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
