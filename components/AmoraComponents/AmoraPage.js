import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const AmoraPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className="justify-content-center mx-4 ms-lg-5 px-lg-5 mt-5 fs-4 wbg-green">
              ABOUT THE PLOT
            </p>
          </Col>
        </Row>

        <p className="justify-content-center mx-4 display-6 ms-lg-5 px-lg-5">Amora Villas</p>
        <p className=" fs-6 mx-4 mt-3 ms-lg-5 px-lg-5 ">
          Located in the serene coastal town of Moira, nestled amidst the
          verdant landscapes and tranquil ambience, lies the prestigious Amora
          Villas project developed by Ekaya Spaces LLP. Spanning across a
          sprawling expanse of 1250 square meters of prime land, Amora Villas
          epitomises luxury vacation living at its finest. With meticulous
          attention to detail and an unwavering commitment to excellence, this
          project redefines opulence in the heart of Goa.
        </p>
        <p className=" fs-6 mx-4 mt-3 ms-lg-5 px-lg-5"> 
          The name “Amora” itself is derived from the Portuguese and Spanish
          word for love, reflecting the essence of affection and warmth that
          permeates every aspect of this luxurious retreat.
        </p>
        <p className=" fs-6 mx-4 mt-3 ms-lg-5 px-lg-5"> 
          Comprising four exquisite villas, each meticulously designed to offer
          the epitome of comfort and sophistication, Amora Villas presents a
          haven of tranquility and elegance for vacationers. Each villa boasts
          four spacious bedrooms, meticulously crafted to ensure utmost comfort
          and privacy, making them perfect retreats for families and friends
          seeking a luxurious getaway. What sets these bedrooms apart is the
          inclusion of individual gardens or terraces, allowing guests to bask
          in the natural beauty of their surroundings right from the comfort of
          their private quarters.
        </p>
      </Container>

      <Container>
      <div id="demo" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner mb-4">
          <div class="carousel-item active">
            <Row>
              <Col sm={6} >
                <Image src="/images/Amora-Group-1.png" className="d-block w-100" alt="First slide" />
          
              </Col>
              <Col sm={6} >
                <Image src="/images/Amora-Group-2.png" className="d-block w-100 " alt="Second slide" />
              
              </Col>

            </Row>
          </div>
          <div class="carousel-item ">
            <Row>
              <Col sm={6} >
                <Image src="/images/Amora-Group-1.png" className="d-block w-100" alt="First slide" />
          
              </Col>
              <Col sm={6} >
                <Image src="/images/Amora-Group-2.png" className="d-block w-100 " alt="Second slide" />
              
              </Col>

            </Row>
          </div>
          
        </div>
        <center>
          <button type="button" data-bs-target="#demo" data-bs-slide="prev" className='rounded-circle btn bg-secondary text-white fs-4 me-2'>
          <MdArrowBackIos className="ms-1" />
          </button>
          <button type="button" data-bs-target="#demo" data-bs-slide="next" className='rounded-circle btn text-white fs-4' style={{backgroundColor:"#5CA2B0"}}>
          <MdArrowForwardIos className="ms-1" />
          </button>
        </center>

      </div>
    
      </Container>
    
      <Container>
        <p className=" fs-6 mx-4 mt-3 ms-lg-5 px-lg-5">
          The spacious bathrooms, adorned with luxurious fittings and fixtures,
          evoke a sense of indulgence and relaxation, adding to the overall
          vacation experience. Stepping outside, vacationers are greeted by lush
          green gardens that provide a serene backdrop for leisurely strolls and
          moments of relaxation. The private pool beckons guests to unwind and
          rejuvenate amidst the tranquil surroundings, offering a perfect
          retreat from the hustle and bustle of everyday life.
        </p>
        <p className="fs-6 mx-4 mt-3 ms-lg-5 px-lg-5">
          For those seeking moments of conviviality and entertainment, the
          rooftop bar offers a chic setting to unwind with friends and family
          while enjoying panoramic views of the surrounding landscape. Whether
          savouring sundowners or hosting intimate gatherings, the rooftop bar
          serves as the perfect venue for creating cherished vacation memories.
        </p>
      </Container>
      <Container>
        <Row className="mt-5">
          <Col lg={5}>
            <Image
              className="h-100 w-100 p-lg-5 ms-lg-5 px-lg-5"
              src="/images/Amora-Group-3.png"
            />
          </Col>
          <Col>
            <p className="fs-6 text-start p-lg-5 mt-5">
              The commitment to ensuring utmost convenience and comfort extends
              to the practical aspects of vacation living as well. Each villa is
              fully air-conditioned, providing a respite from the tropical heat,
              and comes equipped with two spacious car parks, providing guests
              with ample parking space for their vehicles during their stay.
              Moreover, with 100% power backup, guests can rest assured of
              uninterrupted enjoyment of their vacation, enhancing their peace
              of mind.
            </p>
          </Col>
        </Row>
        {/* <Row className="mt-5 d-flex flex-column-reverse"> */}
        <Row className="">
          <Col>
            <p className="fs-6 p-lg-5 mt-5 ms-lg-5 px-lg-5"> 
              One of the most remarkable features of Amora Villas is the
              emphasis on privacy. Each villa is thoughtfully designed to ensure
              seclusion and exclusivity, allowing vacationers to enjoy their
              holiday retreat without any intrusion. Whether lounging by the
              poolside or unwinding in the tranquil confines of their bedrooms,
              guests can revel in the luxury of privacy afforded by this
              exceptional vacation home.
            </p>
          </Col>
          <Col lg={5} className="mb-4">
            <Image
              className="w-100 h-100 p-lg-5 "
              src="/images/Amora-Group-4.png"
            />
          </Col>
        </Row>

        <Row className="">
          <Col lg={5}>
            <Image
              className="h-100 w-100 p-lg-5 ms-lg-5 px-lg-5"
              src="/images/Amora-Group-5.png"
            />
          </Col>
          <Col>
            <p className="fs-6 p-lg-5 mt-5"> 
              Moreover, the strategic location of Amora Villas further enhances
              its allure. Surrounded by some of the finest residential projects
              in Moira, guests benefit from a vibrant community atmosphere while
              enjoying the tranquility and exclusivity of their vacation abode.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="p-0 position-relative">
    <Image className="h-100 w-100" src="/images/Amora-fluid-img.png" />
      <p className="fs-6 bg-white p-4 position-absolute bottom-0 end-0 mb-0  col-lg-6 amora-fluid border"> {/* Changed fs-5 to fs-6 */}
        In essence, Amora Villas stands as a testament to unparalleled luxury
        and sophistication, offering discerning vacationers a rare opportunity
        to experience the epitome of coastal living in the idyllic setting of
        Moira, Goa. With its impeccable craftsmanship, exquisite amenities,
        and unparalleled attention to detail, Amora Villas sets a new
        benchmark for luxury vacation living in the heart of Goa’s coastal
        paradise.
      </p>
    </Container>
    </>
  );
};

export default AmoraPage;
