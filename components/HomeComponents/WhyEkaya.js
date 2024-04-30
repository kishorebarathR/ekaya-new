'use client'
import React, { useState } from 'react';
import { Row, Col, Container, Image, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const WhyEkaya = () => {
  const [activeKey, setActiveKey] = useState('profile');

  return (
    <>
      <Container className='mt-5 p-5 ms-5 '>
        <Row className="ms-1 mt-1">
          <Col sm={12} lg={4}>
            <p className='fs-1 mt-4'>Why Ekaya</p>
            <Image src="/images/Tab_img.jpg" className="w-100 " alt="..." />
          </Col>
          <Col lg={8} className=' p-5'>
            <Tabs
              activeKey={activeKey}
              onSelect={(key) => setActiveKey(key)}
              className="mb-3 custom-tabs"
              style={{ width: '100%' }}
            >
              <Tab eventKey="home tab-title" title={<span className="tab-title">Nature’s Embrace<p className='mb-0'></p> in Every Corner</span>}>
                <p className='fs-6 px-5'>
                 Every property we craft is a symphony of exclusivity and grandeur, designed to cater to the most refined tastes. From opulent interiors to breathtaking exteriors, each element is meticulously curated to ensure an ambiance of unparalleled sophistication. We pay attention to the minutest details, creating spaces that epitomize the height of elegance and comfort.
                </p>
              </Tab>

              <Tab eventKey="profile" title={<span className="tab-title ">Elite<p className='mb-0'></p> Sanctuaries </span>}>
                <p className='fs-6 px-5'>
                   Every property we craft is a symphony of exclusivity and grandeur, designed to cater to the most refined tastes. From opulent interiors to breathtaking exteriors, each element is meticulously curated to ensure an ambiance of unparalleled sophistication. We pay attention to the minutest details, creating spaces that epitomize the height of elegance and comfort.
                </p>
              </Tab>
              <Tab eventKey="about" title={<span className="tab-title ">Personalized<p className='mb-0'></p>  elegance
  </span>}>
                <p className='fs-6 px-5'>
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
