import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

const Specificy2 = () => {
  return (
    <>
      <Container
        fluid
        className="text-dark p-5"
        style={{ backgroundColor: "#ABD2D3" }}
      >
        <div className="border-bottom-white "></div>
        <Container className="">
          <Row className="border-bottom-white">
            <Col lg={5}>
              <p className="fs-5 px-lg-5 p-3 ms-lg-5 m-0">
                  <h5>SANITARY & PLUMBING</h5>
              </p>
            </Col>
            <Col lg={5} className="d-flex flex-column fs-6 p-3">
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <ul>
                    <li>CP Fittings: Kohler</li>
                    <li>Ceramic Fittings: Kohler</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="border-bottom-white">
            <Col lg={5}>
              <p className="fs-5 px-lg-5 ms-lg-5 p-3 m-0">
                <h5>ELECTRICAL</h5>
              </p>
            </Col>
            <Col lg={5} className="d-flex flex-column fs-6 p-3">
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <ul>
                    <li>
                      All Products such as switch & accessories, PVC conduit,
                      Switchgear, wiring cable etc., are of reputed make &
                      confirming to ISI standards. Brands such as Le grand or
                      equivalent would used. GM Modular Switches
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="border-bottom-white">
            <Col lg={5}>
              <p className="fs-5 px-lg-5 ms-lg-5 p-3 m-0">
                <h5>AIR CONDITIONG</h5>
              </p>
            </Col>

            <Col lg={5} className="d-flex flex-column fs-6 p-3">
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <ul>
                    <li>Provision for Electrical conduit,</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="border-bottom-white">
            <Col lg={5}>
              <p className="fs-5 px-lg-5 ms-lg-5 p-3 m-0">
                <h5>TELEPHONE POINTS</h5>
              </p>
            </Col>
            <Col lg={5} className="d-flex flex-column fs-6 p-3">
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <ul>
                    <li>In Living Room and in all Bedrooms.</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="border-bottom-white">
            <Col lg={5}>
              <p className="fs-5 px-lg-5 ms-lg-5 p-3 m-0">
                <h5>D.G. KIRLOSKAR MAKE</h5>
              </p>
            </Col>

            <Col lg={5} className="d-flex flex-column fs-6 p-3">
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <ul>
                    <li>For common area lighting, lifts and pumps.</li>
                    <li>6 Kva power back-up for each unit</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row className=" border-bottom-white">
            <Col lg={5}>
              <p className="fs-5 px-lg-5 ms-lg-5 p-3 m-0">
                <h5>ELEVATORS</h5>
              </p>
            </Col>

            <Col lg={5} className="d-flex flex-column fs-6 p-lg-3">
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <ul>
                    <li>Lifts - Make Schindler or equivalent. 12 Passenger.</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="">
            <Col lg={5}>
              <p className="fs-5 px-lg-5 ms-lg-5 p-3 m-0">
                <h5>SECURITY</h5>
              </p>
            </Col>
            <Col lg={5} className="d-flex flex-column fs-6 p-3">
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <ul>
                    <li>
                      Round with clock security with CCTV & intercom facility
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Specificy2;
  