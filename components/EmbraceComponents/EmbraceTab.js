'use client'
import React, { useState } from 'react';
import { Row, Col, Container, Image, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmbraceTab = () => {
  const [activeKey, setActiveKey] = useState('home');

  const handleTabSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col lg={12} className='mt-5'>
            <Tabs
              activeKey={activeKey}
              onSelect={handleTabSelect}
              className="mb-3 custom-tab border-0 rounded-0"
              style={{ width: '100%' }}
            >
              <Tab eventKey="home" title={<span className="tab-title">3D rendered</span>} className='d-flex flex-row'>
                {activeKey === "home" && (
                  <>
                    <Col><Image src="/images/embrace-tab-img1.png" className="img-fluid mt-4" alt="3D Rendered Image" /></Col>
                    <Col><Image src="/images/embrace-tab-img-2.png" className="img-fluid mt-4" alt="3D Rendered Image" /></Col>
                  </>
                )}
              </Tab>

              <Tab eventKey="profile" title="Floor plan parking">
                {activeKey === "profile" && (
                  <Col><Image src="/images/embrace-floor1.png" className="img-fluid  mt-3" alt="Floor plan parking" /></Col>
                )}
              </Tab>

              <Tab eventKey="about1" title="Floor plan-3 floors">
                {activeKey === "about1" && (
                  <Image src="/images/embrace-floor2.png" className="img-fluid mt-4" alt="Floor plan-3 floors" />
                )}
              </Tab>

              <Tab eventKey="about2" title="Unit floor plan design layout">
                {activeKey === "about2" && (
                  <Row className='d-flex flex-row'>
                    <Col><Image src="/images/embrace-unit1.png" className="img-fluid mt-4  mt-3" alt="Floor plan parking" /></Col>
                    <Col><Image src="/images/embrace-unit-2.png" className="img-fluid mt-4 " alt="Floor plan parking" /></Col>
                  </Row>
                )}
              </Tab>

              <Tab eventKey="about3" title="Features">
                {activeKey === "about3" && (
                  <Image src="/images/embrace-features-map.png" className="img-fluid mt-4" alt="Features" />
                )}
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EmbraceTab;
