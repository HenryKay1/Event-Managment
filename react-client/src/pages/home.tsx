// src/components/HomePage.tsx
import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { FaPlusCircle, FaCalendarCheck, FaInfoCircle } from 'react-icons/fa';
import Slideshow from '../Components/SlideShow/slideshow';

const HomePage: React.FC = () => {
  return (
    <Container style={styles.mainContainer}>
      <Slideshow />
      <section style={styles.cardsSection}>
        <Container>
          <Row>
            <Col md={4}>
              <Card style={{ ...styles.card, ...styles.card1 }}>
                <Card.Body>
                  <FaPlusCircle style={styles.icon} />
                  <Card.Title>Creating an Event</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ ...styles.card, ...styles.card2 }}>
                <Card.Body>
                  <FaCalendarCheck style={styles.icon} />
                  <Card.Title>My Events</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ ...styles.card, ...styles.card3 }}>
                <Card.Body>
                  <FaInfoCircle style={styles.icon} />
                  <Card.Title>About the Project</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  mainContainer: {
    padding: '20px',
    minWidth:'75vw'
  },
  cardsSection: {
    padding: '50px 0',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    color: '#fff',
  },
  card1: {
    backgroundColor: '#FF5733', // Color accent for the first card
  },
  card2: {
    backgroundColor: '#33B5E5', // Color accent for the second card
  },
  card3: {
    backgroundColor: '#8E44AD', // Color accent for the third card
  },
  icon: {
    fontSize: '40px',
    color: '#fff',
    marginBottom: '15px',
  },
};

export default HomePage;
