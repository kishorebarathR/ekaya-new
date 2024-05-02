'use client'
import React, { useState } from 'react';
import { Row, Col, Container, Image, Button, Carousel } from 'react-bootstrap';
import { FaAngleDown, FaAngleUp, FaArrowRight } from 'react-icons/fa';

const Propertiesoverview = () => {
  const [isCollapsed, setCollapse] = useState(true);
  const [showTakshaviContent, setShowTakshaviContent] = useState(true);
  const [showEmbraceContent, setShowEmbraceContent] = useState(false);
  const [showEllenContent, setShowEllenContent] = useState(false);
  const [isCollapsed1, setCollapse1] = useState(true);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const toggleCollapse = () => {
    setCollapse(!isCollapsed);
  };

  const toggleTakshaviContent = () => {
    setShowTakshaviContent(!showTakshaviContent);
    setShowEmbraceContent(false);
    setShowEllenContent(false);
  };

  const toggleEmbraceContent = () => {
    setShowEmbraceContent(!showEmbraceContent);
    setShowTakshaviContent(false);
    setShowEllenContent(false);
  };

  const toggleEllenContent = () => {
    setShowEllenContent(!showEllenContent);
    setShowTakshaviContent(false);
    setShowEmbraceContent(false);
  };

  const toggleCollapse1 = () => {
    setCollapse1(!isCollapsed1);
  };

  return (
    <>


      <Container className='mb-0'>
        <div className='mt-5 d-flex flex-row px-1  ms-4'>
          <div className='p-0 col-lg-4 col-sm-12 pe-3'>
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
                    <div className="btn-group dropend w-100">
                      <button
                        style={{ cursor: "pointer" }}
                        className="btn wbg-green rounded-0"
                        onClick={toggleTakshaviContent}
                      >
                        Takshavi <span className='float-end'></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button
                  className="btn btn-dark w-100 rounded-0 p-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseTwo"
                  onClick={toggleCollapse}
                >
                  Completed Projects
                  <span className='float-end text-white'>{isCollapsed ? <FaAngleDown size={24} className='display-4' /> : <FaAngleUp size={24} className='display-4' />}</span>
                </button>
                <div id="panelsStayOpen-collapseTwo" className={`accordion-collapse collapse ${isCollapsed ? '' : 'show'}`}>
                  <div className="accordion-body ">
                    <div className="btn-group dropend w-100">
                      <button
                        style={{ cursor: "pointer" }}
                        className="btn wbg-green rounded-0 text-decoration-none"
                        onClick={toggleEmbraceContent}
                      >
                        1. Embrace <span className='float-end'></span>
                      </button>
                    </div>

                    <div className="btn-group dropend w-100">
                      <button
                        style={{ cursor: "pointer" }}
                        className="btn wbg-green rounded-0 text-decoration-none"
                        onClick={toggleEllenContent}
                      >
                        2. Ellen <span className='float-end'></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='p-0 me-4'>
            {showTakshaviContent && (
              <Col>
                <Carousel data-bs-theme="light">
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      src="/images/Takshavi-banner.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      src="/images/Takshavi-banner.jpg"
                      alt="Second slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      src="/images/Takshavi-banner.jpg"
                      alt="Third slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>

                <div>
                  <p className='fs-3 mt-4 mx-5'>Takshavi</p>
                  <p className='justify-content-center mx-5 fs-6'>Ekaya Spaces proudly unveils Takshavi, a boutique residential<br></br> enclave nestled in the heart of Frazer Town’s Spencer Road.</p>
                  <button className="btn-outline-dark w-25 p-2 mx-5 btn-color bt">
                    <a href="takshavi" className='nav-link'>Know More</a>
                  </button>
                </div>
              </Col>
            )}

            {showEmbraceContent && (
              <Col>
                <Carousel data-bs-theme="light">
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      src="/images/Embrace-banner.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      src="/images/Embrace-banner.jpg"
                      alt="Second slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      src="/images/Embrace-banner.jpg"
                      alt="Third slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>

                <div>
                  <p className='fs-3 mt-4 mx-5'>Embrace</p>
                  <p className='justify-content-center mx-5 fs-6'>Modern Idyll in a Three-Storey Block with six Luxurious Homes</p>
                  <button className="btn-outline-dark w-25 p-2 mx-5 btn-color bt">
                    <a href="embrace" className='nav-link'>Know More</a>
                  </button>
                </div>
              </Col>
            )}
            {showEllenContent && (
              <Col>
                <Carousel data-bs-theme="light ">
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      src="/images/Ellen-banner.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      src="/images/Ellen-banner.jpg"
                      alt="Second slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="d-block w-100 "
                      src="/images/Ellen-banner.jpg"
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                <div>
                  <p className='fs-3 mt-4 mx-5'>Ellen</p>
                  <p className='justify-content-center mx-5 fs-6'>A premium three-storey apartment block,<p className='mb-0'></p> with a total of 11 spacious modern homes,</p>
                  <button className="btn-outline-dark w-25 p-2 mx-5 btn-color bt">
                    <a href="ellen" className='nav-link'>Know More</a>
                  </button>
                </div>
              </Col>
            )}
          </div>
        </div>
      </Container>
      <Container className='z-3 bg-white position-relative ' >
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

export default Propertiesoverview;
