'use client'
import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Propertiesoverview from './Propertiesoverview';
import Goa from './Goa';

const AboutEkaya = () => {
  const [selectedProperty, setSelectedProperty] = useState('Bengaluru');

  const handlePropertyChange = (property) => {
    setSelectedProperty(property);
  };

  return (
    <>
      <Container className="  ">
        <p className='text-center fs-4 mt-5 wbg-green'>ABOUT EKAYA</p>
        <p className='text-center mt-4 display-6'>Homes crafted<p className='mb-0'></p> with passion</p>
        <p className='text-center  fs-6'>At Ekaya, we don’t just build homes; we craft experiences. Nestled in the heart of Bangalore, <p className='mb-0'></p>Ekaya stands as a beacon of luxury and precision in real estate. Our ethos is woven around the<p className='mb-0'></p> artistry of construction, creating not just buildings, but sanctuaries that resonate with<p className='mb-0'></p> elegance and sophistication.</p>
      </Container>

      <Container>
        <p className='text-center mt-5 fs-4  wbg-green'>PROPERTY OVERVIEW</p>
        <p className='text-center mt-4 display-6'>Strategically located <br></br>masterpieces</p>
        <Row>
          <div className='d-flex flex-row mt-3'>
            <Col className='d-flex flex-row-reverse' sm={12} lg={6}>
              <button className={`btn w-25 p-3 rounded-0 ${selectedProperty === 'Bengaluru' ? 'actives' : ''}`} onClick={() => handlePropertyChange('Bengaluru')}>Bengaluru</button>
            </Col>
            <Col sm={12} lg={6}>
              <button className={`btn w-25 p-3 rounded-0 ${selectedProperty === 'Goa' ? 'actives' : ''}`} onClick={() => handlePropertyChange('Goa')}>Goa</button>
            </Col>
          </div>
        </Row>
        {selectedProperty === 'Bengaluru' ? <Propertiesoverview /> : null}
        {selectedProperty === 'Goa' ? <Goa /> : null}
      </Container>
    </>
  );
};

export default AboutEkaya;
