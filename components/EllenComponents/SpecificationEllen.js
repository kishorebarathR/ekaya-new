import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

const SpecificationEllen = () => {
  return (
    <>
      <Container
        fluid
        className="text-dark px-4"
        style={{ backgroundColor: "#D5F0F0" }}
      >
        <Container>
          <p className="  mt-5 p-1 display-6 px-lg-5 ms-lg-5 p-4">
            Specifications
          </p>
          <div className="border-bottom-green"></div>
          <Row className="border-bottom-green">
            <Col lg={5}>
              <p className="fs-5 px-lg-5 ms-lg-5 p-3">
                <b>STRUCTURE</b>
              </p>
            </Col>
            <Col className="d-flex flex-column fs-6 p-3" lg={5}>
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <Image
                    src="/images/Group 49424.svg "
                    className="m-2"
                    style={{ width: "18px" }}
                    alt="..."
                  ></Image>
                </div>
                <p className="ms-2">RCC framed structure</p>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <Image
                    src="/images/Group 49424.svg "
                    className="m-2"
                    style={{ width: "18px" }}
                    alt="..."
                  ></Image>
                </div>
                <p className="ms-2">
                  Concrete block masonry, wire cut clay bricks
                </p>
              </div>
            </Col>
          </Row>

          <Row className="border-bottom-green">
            <Col lg={5}>
              <p className="fs-5 px-lg-5 ms-lg-5 p-3">
                <b>FLOORING</b>
              </p>
            </Col>
            <Col className="d-flex flex-column p-3" lg={5}>
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <Image
                    src="/images/Group 49424.svg "
                    className="m-2"
                    style={{ width: "18px" }}
                    alt="..."
                  ></Image>
                </div>

                <p className="fs-6 ms-2">
                  Lift lobbies and wall cladding - marble Living and dining -
                  marble Bedrooms - wooden laminate Master bedroom -wooden
                  laminate Kitchen - Porcelene tile Balcony - Antiskid vetrified
                  tiles. Toilet – Anti skid tile
                </p>
              </div>
            </Col>
          </Row>

          <Row className="border-bottom-green">
            <Col lg={5}>
              <p className="fs-5 px-lg-5 ms-lg-5 p-3">
                <b>PAINTING</b>
              </p>
            </Col>

            <Col className="d-flex flex-column fs-6 p-3" lg={5}>
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <Image
                    src="/images/Group 49424.svg "
                    className="m-2"
                    style={{ width: "18px" }}
                    alt="..."
                  ></Image>
                </div>

                <p className="ms-2">
                  Interiors - premium acrylic/plastic emulsion Exterior -
                  Premium exterior emulsion
                </p>
              </div>
            </Col>
          </Row>

          <Row className="border-bottom-green">
            <Col lg={5}>
              <p className="fs-5 px-lg-5 ms-lg-5 p-3">
                <b>KITCHEN</b>
              </p>
            </Col>
            <Col className="d-flex flex-column fs-6 p-3" lg={5}>
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <Image
                    src="/images/Group 49424.svg "
                    className="m-2"
                    style={{ width: "18px" }}
                    alt="..."
                  ></Image>
                </div>

                <p className="ms-2">
                  {" "}
                  Provision for modular kitchen Provision for electric chimney,
                  hob and water purifier Utility room with private drying area
                  along with points for dishwasher and washing machine 3 bedroom
                  apartments will have a separate staff room with a bathroom
                  attached
                </p>
              </div>
            </Col>
          </Row>

          <Row className="border-bottom-green">
            <Col lg={5}>
              <p className="fs-5 px-lg-5 ms-lg-5 p-3">
                <b>DOORS</b>
              </p>
            </Col>

            <Col className="d-flex flex-column fs-6 p-3" lg={5}>
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <Image
                    src="/images/Group 49424.svg "
                    className="m-2"
                    style={{ width: "18px" }}
                    alt="..."
                  ></Image>
                </div>

                <p className="ms-2">
                  {" "}
                  All doors with veneer on both sides and teak wood framing.
                  Hardware used will be Godrej or equivalent. UPVC/High density
                  aluminum windows
                </p>
              </div>
            </Col>
          </Row>

          <Row className=" border-bottom-green">
            <Col lg={5}>
              <p className="fs-5 px-lg-5 ms-lg-5 p-3">
                <b>ELECTRICAL</b>
              </p>
            </Col>

            <Col className="d-flex flex-column fs-6 p-3" lg={5}>
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <Image
                    src="/images/Group 49424.svg "
                    className="m-2"
                    style={{ width: "18px" }}
                    alt="..."
                  ></Image>
                </div>
                <div className="fs-6 mb-0">
                  <p className="fs-6 mb-0 ms-2">
                    - 100% ,24 hour sound proof generator power back up for all
                    apartments - Elevator - Schindler, KONE or equivalent with
                    power back up - Switches - Anchor , LeGrand or equivalent.
                    Telephone points in all bedrooms and living areas
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="">
            <Col lg={5}>
              <p className="fs-5 px-lg-5 ms-lg-5 p-3">
                <b>SECURITY</b>
              </p>
            </Col>
            <Col className="d-flex flex-column fs-6 p-3" lg={5}>
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <Image
                    src="/images/Group 49424.svg "
                    className="m-2"
                    style={{ width: "18px" }}
                    alt="..."
                  ></Image>
                </div>
                <div className="fs-6 mb-0 ">
                  <p className="fs-6 mb-0 ms-2">
                    - Biometric locks for all main doors
                  </p>
                  <p className="mb-0 ms-2">- Yale or equivalent </p>
                  <p className="mb-0 ms-2">
                    - CCTV surveillance in common areas
                  </p>
                  <p className="mb-0 ms-2">- 24 Hour security</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="border-bottom-green">
            <Col lg={5}>
              <p className="fs-5 px-lg-5 ms-lg-5 p-3">
                <b>GYM</b>
              </p>
            </Col>
            <Col className="d-flex flex-column fs-6 p-3" lg={5}>
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <Image
                    src="/images/Group 49424.svg "
                    className="m-2"
                    style={{ width: "18px" }}
                    alt="..."
                  ></Image>
                </div>
                <div className="fs-6 mb-0 ">
                  <p className="fs-6 mb-0 ms-2">
                    - Air Conditioned Gym with essential equipments
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="border-bottom-green">
            <Col lg={5}>
              <p className="fs-5 px-lg-5 ms-lg-5 p-3">
                <b>MISCELLANEOUS</b>
              </p>
            </Col>
            <Col className="d-flex flex-column fs-6 p-3" lg={5}>
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <Image
                    src="/images/Group 49424.svg "
                    className="m-2"
                    style={{ width: "18px" }}
                    alt="..."
                  ></Image>
                </div>
                <div className="fs-6 mb-0 ">
                  <p className="fs-6 mb-0 ms-2">
                    - Rain water harvesting in multiple areas.
                  </p>
                  <p className="mb-0 ms-2">- Borewells</p>
                  <p className="mb-0 ms-2">- Landscaped entrance area</p>
                  <p className="mb-0 ms-2">- Water softener</p>
                  <p className="mb-0 ms-2">- Effluent treatment plant</p>
                  <p className="mb-0 ms-2">
                    - Multiple hose points in parking areas
                  </p>
                  <p className="mb-0 ms-2">- Biometric locks for lobby doors</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default SpecificationEllen