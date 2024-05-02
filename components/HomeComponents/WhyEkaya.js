'use client'
import React, { useState } from 'react';
import { Row, Col, Container, Image, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const WhyEkaya = () => {
  const [activeKey, setActiveKey] = useState('profile');

  return (
    <>
      <Container className='pb-5 p-0 z-2 bg-white position-relative'>
        <Row className="ms-1 mt-1">
          <Col sm={12} lg={4}>
            <p className='fs-1 mt-3 ms-lg-5'>Why Ekaya</p>
            <Image src="/images/Tab_img.jpg" className="w-100 p-lg-3 ms-lg-4 " alt="..." />
          </Col>
          <Col lg={8} className=' mt-5'>
            <Tabs
              activeKey={activeKey}
              onSelect={(key) => setActiveKey(key)}
              className="mb-3 custom-tabs  me-5 pe-5"
              style={{ width: '100%' }}
            >
              <Tab eventKey="home tab-title" title={<span className="tab-title  ">Nature’s Embrace<p className='mb-0'></p> in Every Corner</span>}>
                <p className='fs-6 p-5 me-5 mt-5 justify-content-center'>
                  Every property we craft is a symphony of exclusivity and grandeur, designed to cater to the most refined tastes. From opulent interiors to breathtaking exteriors, each element is meticulously curated to ensure an ambiance of unparalleled sophistication. We pay attention to the minutest details, creating spaces that epitomize the height of elegance and comfort.
                </p>
              </Tab>

              <Tab eventKey="profile" title={<span className="tab-title ">Elite<p className='mb-0'></p> Sanctuaries </span>}>
                <p className='fs-6 p-5 me-5 mt-5 justify-content-center'>
                  Every property we craft is a symphony of exclusivity and grandeur, designed to cater to the most refined tastes. From opulent interiors to breathtaking exteriors, each element is meticulously curated to ensure an ambiance of unparalleled sophistication. We pay attention to the minutest details, creating spaces that epitomize the height of elegance and comfort.
                </p>
              </Tab>
              <Tab eventKey="about" title={<span className="tab-title ">Personalized<p className='mb-0'></p>  elegance
              </span>}>
                <p className='fs-6 p-5 me-5 mt-5 justify-content-center'>
                  Every property we craft is a symphony of exclusivity and grandeur, designed to cater to the most refined tastes. From opulent interiors to breathtaking exteriors, each element is meticulously curated to ensure an ambiance of unparalleled sophistication. We pay attention to the minutest details, creating spaces that epitomize the height of elegance and comfort.
                </p>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WhyEkaya;
