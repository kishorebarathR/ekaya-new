import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import Link from "next/link";

const TakshaviPage = () => {
  return (
    <>
      <Container>
        <p className="justify-content-center mx-4    ms-lg-5 px-lg-5 mt-5 display-6">
          Tranquil Living in{" "}
        </p>
        <p className="justify-content-center mx-4 display-6 ms-lg-5 px-lg-5">
          {" "}
          Frazer Town’s Spencer Road
        </p>
        <p className=" fs-6 mx-4 mt-3 ms-lg-5 px-lg-5">
          Ekaya Spaces proudly unveils Takshavi, a boutique residential enclave
          nestled in the heart of Frazer Town’s Spencer Road. With a modest yet
          sophisticated approach, Takshavi offers seven meticulously crafted
          3-bedroom apartments, each designed to provide residents with a serene
          haven amidst the urban landscape.
        </p>
        <p className=" fs-6 mx-4 mt-3 ms-lg-5 px-lg-5">
          Positioned within the tranquil surroundings of Frazer Town, Takshavi
          enjoys a coveted location that grants easy access to nearby parks,
          esteemed educational institutions, and essential amenities. Its
          integration into the neighborhood fabric reflects a commitment to
          fostering a sense of community and belonging.
        </p>
      </Container>

      <Container>
        <p className="fs-3 mx-3 ms-lg-5 px-lg-5">
          Our homes are designed to create a harmonious flow between interior
          luxury and the beauty of the outdoors.
        </p>
        <Row className="d-flex flex-row  ">
          <Col lg={8} className="ms-3 ms-lg-5 px-lg-5">
            <Col className="fs-6 p-0 d-lg-inline-block px-4 p-2 wbg-green-dark ">
              Project Gallery
            </Col>
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <Image
                    src="/images/carousle.jpg"
                    class="d-block w-100 h-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <Image
                    src="/images/carousel-img.jpg"
                    class="d-block w-100 h-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden ">Next</span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <h4 className="  p-5 ms-lg-5 px-lg-5">
          <span className=" p-3 border-green bg-white">
            <Link className="wbg-green" href="#">
              Click here
            </Link>{" "}
            to fill the form for the project brochure
          </span>
        </h4>
      </Container>

      <Container>
        <p className=" fs-6 mx-3 mt-3 ms-lg-5 px-lg-5">
          In a practical gesture, Takshavi ensures convenience for its residents
          by providing two dedicated parking spots per apartment, alleviating
          the common urban concern of parking scarcity. Additionally, the
          project incorporates essential features such as 100% generator backup
          and rainwater harvesting systems, prioritizing uninterrupted living
          and environmental consciousness without ostentation.
        </p>
        <p className=" fs-6 mx-3 mt-3 ms-lg-5 px-lg-5">
          Takshavi’s architectural design embodies a harmonious blend of
          contemporary elegance and sustainable principles. Through thoughtful
          planning, each apartment maximizes space and natural light, creating a
          welcoming ambiance conducive to relaxation and rejuvenation.
        </p>
        <p className=" fs-6 mx-3 mt-3 ms-lg-5 px-lg-5">
          With just seven 3-bedroom apartments, Takshavi offers a sense of
          exclusivity and intimacy, allowing residents to enjoy a peaceful
          retreat from the bustling city life. Whether unwinding in the comfort
          of their homes or exploring the nearby amenities, residents are
          invited to experience a lifestyle that seamlessly integrates modern
          comforts with understated luxury.
        </p>
        <p className=" fs-6 mx-3 mt-3 ms-lg-5 px-lg-5">
          In summary, Takshavi by Ekaya Spaces presents a modest yet refined
          living experience in Frazer Town’s Spencer Road. With its limited
          collection of 3-bedroom apartments, practical amenities, and
          commitment to sustainability, Takshavi invites residents to embrace a
          tranquil urban lifestyle without extravagance. Welcome to the essence
          of serene living at Takshavi by Ekaya Spaces.
        </p>
      </Container>
    </>
  );
};

export default TakshaviPage;
