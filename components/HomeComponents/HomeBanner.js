'use client'
import React, { useState } from 'react'
import { Row, Col, Container, Image, Button, Carousel } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa';



const HomeBanner = () => {

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <>
    
       


      <Container fluid className='p-0 '>
        <div id="carouselExampleFade" className="carousel slide carousel-slide z-0 p-0">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image src="/images/Homebanner1.jpg" className="d-block w-100 p-0" alt="..." />
            </div>
            <div className="carousel-item">
              <Image src="/images/Embrace-banner.jpg" className="d-block w-100 p-0" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark rounded-5" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark rounded-5" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

          <Col lg={4} className="position-absolute end-0  me-5 px-3  bottom-0  mt-3 z-3">
            <Button className=" text-start  p-lg-3  px-4 hover-contact  border-0 rounded-0 w-100">
              Contact Us <FaArrowRight className="ms-lg-2" />
            </Button>
          </Col>
          <Col className="position-absolute end-0 ms-4  bottom-0 mt-3 z-3">
            <Button className=" text-center  bg-white p-lg-3  p-3 border-0 rounded-0">
              Contact Us
            </Button>
          </Col>
        </div>
      </Container>

     
     
         </>
  )
}

export default HomeBanner
