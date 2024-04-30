import React, { useState } from 'react';
import { Row, Col, Container, Image ,Carousel} from 'react-bootstrap';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Goa = () => {
  const [isCollapsed, setCollapse] = useState(true);
  const [showVistaContent, setShowVistaContent] = useState(false);
  const [isCollapsed1, setCollapse1] = useState(true);

  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };



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
      <Container>
        <Row className='mt-5'>
          <Col className='flex-row-reverse' sm={12} lg={4}>
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
                  <div className="accordion-body">
                    <div className="btn-group dropend w-100">
                      <a style={{ cursor:"pointer"}} className="wbg-green rounded-0 text-decoration-none" onClick={toggleVistaContent}>
                        1. Vista-Do-Mar <span className='float-end'></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="accordion-item">
                <button className="btn btn-dark w-100 rounded-0 p-3" type="button" onClick={toggleCollapse1} data-bs-toggle="collapse" data-bs-target="#open" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  Completed Projects
                  <span className='float-end text-white'>{isCollapsed1 ? <FaAngleDown size={24} className='display-4' /> : <FaAngleUp size={24} className='display-4' />}</span>
                </button>
                <div id="open" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <strong>This is the first item&apos;s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div> */}
            </div>
          </Col>
          <Col sm={12} lg={8}>
            {showVistaContent && (
              <>
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
      <Container>
        <p className='text-center fs-5 mt-5 wbg-green'>LET’S HEAR FROM OUR CLIENTS</p>
        <p className='text-center mx-5 p-4 fs-6' style={{ borderBottom: '1px dotted' }}>“Discovering Ekaya was like finding a hidden gem. The attention to detail and personal touch<br></br> they bring to every aspect of the home-buying experience is truly unparalleled.”</p>
      </Container>
      <Container>
        <div className='text-center mt-4'>
          <Image src="/images/Group 13190.png" className="img-fluid" alt="..." />
        </div>
      </Container>
    </>
  );
}

export default Goa;
