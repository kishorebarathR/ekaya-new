import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

const Highlights = () => {
  return (
    <>
    <Container>
      <h2 className="p-5 ms-lg-5 mx-4 px-lg-5 fs-1">Location Highlights</h2>
    </Container>
      
      <Container className="p-5">
        <Row>
        <Col lg={3} className="mb-3 position-relative bg-green p-0">
            <span
                id="triangle-right-1"
                className=" position-absolute top-50 start-100 translate-middle ms-1"
              ></span>
              <div className="text-center justify-content-center  w-100 p-5 h-100 fs-6">
              Hotels
            </div>
          </Col>
          <Col lg={5}className="py-4">
            <ul className="ms-5 p-0">
              <li> Taj Cidade De Goa : 1.4 Km</li>
              <li> Goa Marriott Resort & Spa : 5.6 Km</li>
              <li>Grand Hyatt Goa : 5.6 Km</li>
            </ul>
          </Col>
        </Row>
        <Row>
        <Col lg={3} className="mb-3 position-relative bg-green p-0">
            <span
                id="triangle-right-1"
                className=" position-absolute top-50 start-100 translate-middle ms-1"
              ></span>
              <div className="text-center justify-content-center  w-100 p-5 h-100 fs-6">
              Beaches
            </div>
          </Col>
          <Col lg={5}>
          <ul className="ms-5 p-0">
              <li> Dona Paula : 1.9 KM</li>
              <li> Vainguinim : 1.1 Km </li>
              <li>Odxel : 2.5 Km </li>
              <li>Miramar : 4.6 Km </li>
              <li>Candolim : 23 Km</li>
              <li>Calangute : 23 Km</li>
              <li>Baga : 26 Km</li>
            </ul>
          </Col>
          <Col lg={3}>
          <ul className="ms-5 p-0">
              <li> Anjuna : 30 Km </li>
              <li>Vagator : 29 Km </li>
              <li>Ashwem : 38 Km</li>
              <li>Colva : 33 Km </li>
              <li>Majorda : 30Km </li>
              <li>Benauim : 36 Km</li>
              <li>Varca : 41Km</li>
            </ul>
          </Col>
        </Row>

        <Row>
          
        <Col lg={3} className="mb-3 position-relative bg-green p-0">
            <span
                id="triangle-right-1"
                className=" position-absolute top-50 start-100 translate-middle ms-1"
              ></span>
              <div className="text-center justify-content-center  w-100 p-5 h-100 fs-6">

              Hospitals
            </div>
          </Col>
          <Col lg={5} className="py-4">
          <ul className="ms-5 p-0">
            <li> Manipal Hospital : 1 Km</li>
            <li> Goa Medival College Hospital : 5.6 Km</li>
          </ul>
          </Col>
        </Row>

        <Row>
        <Col lg={3} className="mb-3 position-relative bg-green p-0">
            <span
                id="triangle-right-1"
                className=" position-absolute top-50 start-100 translate-middle ms-1"
              ></span>
              <div className="text-center justify-content-center  w-100 p-5 h-100 fs-6">
                Schools</div> 
          </Col>
          <Col lg={5} className="py-4">
          <ul className="ms-5 p-0">
            <li> Sharada Mandir School : 4.6 Km </li>
            <li> Maple Bear Canadian Pre School : 1.1 Km</li>
          </ul>
          </Col>
        </Row>

        <Row>
        <Col lg={3} className="mb-3 position-relative bg-green p-0">
            <span
                id="triangle-right-1"
                className=" position-absolute top-50 start-100 translate-middle ms-1"
              ></span>
              <div className="text-center justify-content-center  w-100 p-5 h-100 fs-6">
                Airports</div> 
                
          </Col>
          <Col lg={5} className="py-4">
          <ul className="ms-5 p-0">
          <li> Dabolim : 27 Km </li>
            <li> MOPA : 42 Km</li>
          </ul>
          </Col>
        </Row>

        <Row>
        <Col lg={3} className="mb-3 position-relative bg-green p-0">
            <span
                id="triangle-right-1"
                className=" position-absolute top-50 start-100 translate-middle ms-1"
              ></span>
              <div className="text-center justify-content-center  w-100 p-5 h-100 fs-6">
                Railway Stations</div>
          </Col>
          <Col lg={5} className="py-4">
          <ul className="ms-5 p-0">
          <li> Karmali : 19 Km </li>
            <li> Madgaon : 37 Km</li>
          </ul>
          </Col>
        </Row>
    
      </Container>
    </>
  );
};

export default Highlights;
