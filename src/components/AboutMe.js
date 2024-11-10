import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutme from '../assets/img/aboutme.png'
import aboutmebox from '../assets/img/aboutme-box.png'

export const AboutMe = () => {
  return (
    <Container className="py-5" id='about'>
      <Row>
        {/* Column 1 */}
        <Col xs={12} md={12} xl={6}>
          <img src={aboutme} className="img-fluid" alt="About Me" />
        </Col>

        {/* Column 2 */}
        <Col xs={12} md={12} xl={6} className="d-flex flex-column align-items-start">
          <div className="aboutmebox mb-3 mt-4">
            <img src={aboutmebox} alt="About me content" className="img-fluid" />
          </div>
          <div className="aboutmebubble mt-3 p-5">
            <p className="mb-0 fw-bold fs-5 ps-5 py-3 color-purple">
              Hi there! I’m Illy, an artist on a journey through digital art and mixed media. What started with a simple set of color pencils has grown into a deep exploration of cartoon and semi-realism styles. To me, each piece is an adventure and a chance to discover something new. I hope my work connects with you as much as it does with me, capturing stories and emotions along the way.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};