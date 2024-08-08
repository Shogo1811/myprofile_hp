import React from 'react';
import { Card, Button } from 'react-bootstrap';

const SampleCard: React.FC = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>Sample Card</Card.Title>
        <Card.Text>
          This is a sample card component using React Bootstrap.
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
  );
}

export default SampleCard;
