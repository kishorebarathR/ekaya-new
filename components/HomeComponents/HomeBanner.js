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
      <Container fluid className='p-0' style={{ position: 'relative' }}>
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
          <Col lg={4} className="position-absolute end-0 ms-5 me-5 bottom-0  mt-3 z-3">
            <Button className=" text-start me-5 p-lg-3 p-3 px-5 hover-contact  border-0 rounded-0 w-100">
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

      {/* <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=f5f5f5"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=eee"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </>
  )
}

export default HomeBanner
