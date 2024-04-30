import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

const Highlights = () => {
  return (
    <>
      <h3 className="p-5 ms-lg-5 fs-1">Location Highlights</h3>
      <Container className="p-5">
        <Col className="d-flex flex-column justify-content-center gap-3">
          <Row>
            <Col lg={3} className="position-relative bg-green p-0">
              <span
                id="triangle-right-1"
                className=" position-absolute top-50 start-100 translate-middle ms-1"
              >
              </span>
              <div className="text-center w-100 p-5 fs-6 h-100 d-flex flex-column justify-content-center">
                Hotels & Resorts
              </div>
            </Col>
            <Col lg={5}>
              <ul className="ms-5 p-0">
                <li> Storii by ITC Hotels : 1.9 Km</li>
                <li> The Westin Anjuna: 13Km</li>
                <li>Le Meridian Calangute: 13 Km</li>
                <li>W Hotel, Vegivore: 14km </li>
                <li>Hilton, Candolim: 15 km </li>
                <li>Taj Fort Aguada: 17 Km </li>
                <li>Taj Holiday Village: 17 Km </li>
                <li>Amritara Aura, Mandrim: 21 Km</li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col lg={3} className="position-relative bg-green p-0">
              <span
                id="triangle-right-1"
                className=" position-absolute top-50 start-100 translate-middle ms-1"
              ></span>
              <div className="text-center justify-content-center  w-100 p-5 h-100 fs-6">
                Beaches & Popular Areas
              </div>
            </Col>
            <Col lg={5}>
              <ul className="ms-5 p-0">
                <li>Mapusa: 4.6 Km Dona Paula : 1.9 KM</li>
                <li> Assagao: 8Km </li>
                <li>Arpora: 12 Km </li>
                <li>Calangute: 13 Km</li>
                <li>Candolim : 23 Km</li>
                <li>Baga: 14 Km</li>
                <li>Anjuna: 14 Km</li>
              </ul>
            </Col>
            <Col lg={4}>
              <ul className="ms-5 p-0">
                <li> Vagator: 14 Km</li>
                <li>Candolim: 15 Km </li>
                <li>Panjim: 17Km </li>
                <li>Morjim: 19 Km </li>
                <li>Miramar: 20 Km </li>
                <li>Ashwem: 20 Km</li>
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
                <li> Manipal Hospital : 25 Km</li>
                <li> Goa Medical College Hospital : 20 Km</li>
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
                Schools
              </div>
            </Col>
            <Col lg={5} className="py-4">
              <ul className="ms-5 p-0">
                <li> Sharada Mandir School,Miramar: 21 Km </li>
                <li>The Ardee School, Porvorim : 9.8 Km</li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col lg={3} className="mb-3 position-relative p-0 bg-green">
            <span
                id="triangle-right-1"
                className=" position-absolute top-50 start-100 translate-middle ms-1"
              ></span>
              <div className="text-center justify-content-center  w-100 p-5 h-100 fs-6">
                Airports
              </div>
            </Col>
            <Col lg={5} className="py-4">
              <ul className="ms-5 p-0">
                <li>MOPA : 23 Km </li>
                <li>Dabolim : 42 Km </li>
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
                Railway Stations
              </div>
            </Col>
            <Col lg={5} className="py-4">
              <ul className="ms-5 p-0">
                <li>Thivim: 13Km </li>
                <li> Pernem: 14 Km</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Highlights;
