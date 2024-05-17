// src/components/Slideshow.tsx
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const Slideshow: React.FC = () => {
  return (
    <section style={styles.slideshowSection}>
      <Carousel
        prevIcon={<FaChevronCircleLeft style={styles.navIcon} />}
        nextIcon={<FaChevronCircleRight style={styles.navIcon} />}
        controls
        indicators
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="First slide"
            style={styles.carouselImage}
          />
          <Carousel.Caption style={styles.caption}>
            <h3>First Slide Label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Second slide"
            style={styles.carouselImage}
          />
          <Carousel.Caption style={styles.caption}>
            <h3>Second Slide Label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Third slide"
            style={styles.carouselImage}
          />
          <Carousel.Caption style={styles.caption}>
            <h3>Third Slide Label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div style={styles.buttonContainer}>
        <Button variant="primary" size="lg">Explore Events</Button>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  slideshowSection: {
    position: 'relative',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  navIcon: {
    fontSize: '40px',
    color: '#fff',
  },
  carouselImage: {
    opacity: 0.8, // Make images slightly transparent
  },
  caption: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background for text to make it more readable
    padding: '10px',
    borderRadius: '5px',
    color: '#fff',
  },
};

export default Slideshow;
