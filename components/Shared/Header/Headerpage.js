"use client";
import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Image,
  Navbar,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsArrowRightShort } from "react-icons/bs";

const Headerpage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const handleMouseOver = () => {
    setShowDropdown(true);
  };

  const handleMouseOut = () => {
    setShowDropdown(false);
  };

  const handleMouseOverProjects = () => {
    setShowProjects(true);
  };

  const handleMouseOutProjects = () => {
    setShowProjects(false);
  };

  return (
    <Container
      fluid
      className="position-absolute border-bottom border-secondary z-3 "
    >
      <Container>
        <Row className="align-items-center py-3">
          <Col lg={4}>
            <Row className="d-flex flex-row ms-5">
              <Col lg={5}>
                <Navbar expand="lg">
                  <NavDropdown
                    className="text-light fs-6"
                    title="Our Projects"
                    id="basic-nav-dropdown"
                    show={showProjects}
                    onMouseOver={handleMouseOverProjects}
                    onMouseOut={handleMouseOutProjects}
                  >
                    <Row className="row d-flex flex-colum p-0 ">
                      <Col sm={12} lg={3}>
                        <div className="d-flex flex-row p-0">
                          <div>
                            <NavDropdown.Item disabled className="text-black">
                              Ongoing Projects
                            </NavDropdown.Item>
                            <hr />
                            <NavDropdown.Item
                              href="Donal"
                              className="wbg-txt-green"
                            >
                              Goa - Dona Paula
                            </NavDropdown.Item>
                            <NavDropdown.Item href="vista-do-mar">
                              - Vista Do Mar
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              className="wbg-txt-green"
                              disabled
                            >
                              Bangalore
                            </NavDropdown.Item>
                            <NavDropdown.Item href="../takshavi">
                              - Takshavi
                            </NavDropdown.Item>
                          </div>
                          <div className="light-gray m-0 p-0">
                            <NavDropdown.Item disabled className="text-black">
                              Completed Projects
                            </NavDropdown.Item>
                            <hr />
                            <NavDropdown.Item
                              disabled
                              className="wbg-txt-green"
                            >
                              Bangalore
                            </NavDropdown.Item>
                            <NavDropdown.Item href="embrace">
                              - Embrace
                            </NavDropdown.Item>
                            <NavDropdown.Item
                              className="wbg-green"
                              href="ellen"
                            >
                              - Ellen
                            </NavDropdown.Item>
                          </div>
                          <div>
                            <NavDropdown.Item disabled className="text-black">
                              upcoming Projects
                            </NavDropdown.Item>
                            <hr />
                            <NavDropdown.Item
                              href="moira"
                              className="wbg-txt-green"
                            >
                              Goa - Moira
                            </NavDropdown.Item>
                            <NavDropdown.Item href="amora">
                              - Amora
                            </NavDropdown.Item>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </NavDropdown>
                </Navbar>
              </Col>
              <Col className='ms-4'>
                <Navbar expand="lg">
                  <NavDropdown
                    className="text-light fs-6"
                    title="About Ekaya"
                    id="basic-nav-dropdown"
                    show={showDropdown}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <NavDropdown.Item href="about-us">
                      Our Story
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Our Team
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Why Ekaya
                    </NavDropdown.Item>
                    <NavDropdown.Item href="Sustainability">
                      Sustainability
                    </NavDropdown.Item>
                  </NavDropdown>
                </Navbar>
              </Col>
            </Row>
          </Col>
        
          <Col lg={5} className="text-center ">
            <a href="/">
              <Image
                src="/images/Homepage_logo.svg"
                className="img-fluid float-start ms-5"
                alt="..."
              />
            </a>
          </Col>
          <Col lg={3} className="d-flex flex-row justify-content-end">
            <Button className="rounded-pill bg-white border-0 wbg-txt-green text-center px-3 me-5 d-flex flex-row justify-content-center align-items-center">
              INQUIRE <BsArrowRightShort className="fs-3 text-center" />
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Headerpage;
