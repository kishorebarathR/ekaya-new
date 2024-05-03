import React, { useState } from 'react';
import { Row, Col, Container, Image, Carousel } from 'react-bootstrap';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Goa = () => {
  const [isCollapsed, setCollapse] = useState(true);
  const [showVistaContent, setShowVistaContent] = useState(true); // Change here
  const [isCollapsed1, setCollapse1] = useState(true);

  const toggleCollapse = () => {
    setCollapse(!isCollapsed);
  };

  const toggleVistaContent = () => {
    setShowVistaContent(!showVistaContent);
  };

  const toggleCollapse1 = () => {
    setCollapse1(!isCollapsed1);
  };

  return (
    <>
      <Container className='pb-5'>
        <Row className=' ms-3'>
          <Col className='flex-row-reverse pe-3' sm={12} lg={4}>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <button
                  className="btn btn-dark w-100 rounded-0 p-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                  onClick={toggleCollapse}
                >
                  Ongoing Projects
                  <span className='float-end text-white'>{isCollapsed ? <FaAngleDown size={24} className='display-4' /> : <FaAngleUp size={24} className='display-4' />}</span>
                </button>
                <div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse ${isCollapsed ? '' : 'show'}`}>
                  <div className="accordion-body ">
                    <div className="btn-group dropend w-100 ">
                      <button
                        style={{ cursor: "pointer" }}
                        className="btn  rounded-0 "
                        onClick={toggleVistaContent}
                      >
                       Vista-Do-Mar <span className='float-end '></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={8} className='px-5'>
            {showVistaContent && (
              <>
                <Carousel data-bs-theme="light">
                  <Carousel.Item>
                    <Image
                      className="d-block w-100 "
                      src="/images/vista_banner.png"
                      alt="First slide"
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      src="/images/vista_banner.png"
                      alt="Second slide"
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      src="/images/vista_banner.png"
                      alt="Third slide"
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                <div>
                  <p className='fs-3 mt-4 mx-5'>Vista-Do-Mar</p>
                  <p className='justify-content-center mx-5 fs-6'>A luxury apartment project in Dona Paula -Goa</p>
                  <button className="btn-outline-dark w-25 p-2 mx-5 btn-color bt">
                    <a href="vista-do-mar" className='nav-link'>Know More</a>
                  </button>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
      <Container className='z-3 bg-white position-relative' >
        <Container className=' p-0 border-top  '>
          <p className='text-center fs-5 mt-5  wbg-green'>LET’S HEAR FROM OUR CLIENTS</p>
          <p className='text-center mx-5 p-4 fs-6' style={{ borderBottom: '2px dotted' }}>“Discovering Ekaya was like finding a hidden gem. The attention to detail and personal touch<br></br> they bring to every aspect of the home-buying experience is truly unparalleled.”</p>
        </Container>
        <Container className=' '>
          <div className='text-center mt-4 '>
            <Image src="/images/Group 13190.png" className="img-fluid" alt="..." />
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Goa;
