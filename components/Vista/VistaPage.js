import React from "react";
import { Row, Col, Container, Image, Carousel } from "react-bootstrap";
import VistaDoMar from "./VistaJson";
// import { IoIosArrowDroprightCircle } from "react-icons/io";
// import { IoIosArrowDropleftCircle } from "react-icons/io";
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

import Link from "next/link";

const VistaPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className="justify-content-center ms-lg-5 mx-4 px-lg-5 mt-5 fs-3 wbg-green">
              ABOUT THE PLOT
            </p>
          </Col>
        </Row>

        <p className="justify-content-center mx-4 display-6 ms-lg-5 px-lg-5">
          Alvit and Esmeralda’s Journey
        </p>
        <p className=" fs-6 mx-4 mt-3 ms-lg-5 px-lg-5">
          In the vibrant city of Dar es Salaam, nestled in East Africa, Alvit
          and Esmeralda began their life together. Over the span of five years,
          their family blossomed with the arrival of two daughters, Siandra and
          Jennifer. However, as the tumultuous East African revolution unfolded
          in 1965, the family migrated to Bangalore, India.
        </p>
        <p className=" fs-6 ms-lg-5 px-lg-5 mt-3 mx-4">
          In Bangalore, amidst the bustling streets and new beginnings, Alvit
          and Esmeralda found themselves embracing fresh opportunities. When an
          enticing offer came from Oman, they eagerly seized it. Alvit was
          tasked with spearheading the establishment of the modern Marine patrol
          police division, while Esmeralda took on the responsibility of
          landscaping the vast Royal Oman Police establishments across the
          country.
        </p>
        <p className=" fs-6 ms-lg-5 px-lg-5 mt-3 mx-4">
          A decade of dedication and success later, Alvit and Esmeralda returned
          to Bangalore, their hearts filled with memories of Oman’s beauty and
          prosperity. It was then that Alvit began to dream of building their
          dream villa in Dona Paula, a picturesque coastal town. Meanwhile,
          Siandra embarked on her own journey, finding employment in the
          enchanting state of Goa.
        </p>
        <p className=" fs-6 ms-lg-5 px-lg-5 mt- mx-4">
          When the time came for Siandra’s wedding, her parents asked her what
          she desired as a gift. Without hesitation, Siandra expressed her wish
          for a plot of land in Goa.
        </p>
        <p className=" fs-6 ms-lg-5 px-lg-5 mt-3 mx-4">
          Throughout the years, whenever Alvit and Esmeralda visited Goa, they
          would drive from Loutolim, Esmeralda’s grandmother’s home, to Dona
          Paula. Standing on a particular spot overlooking the majestic Marmagoa
          harbor, Alvit would declare, “One day, I will build a house here!”
        </p>
        <p className=" fs-6 ms-lg-5 px-lg-5 mt-3 mx-4">
          Fate intervened, and Alvit finally found three plots in Dona Paula.
          One was gifted to Siandra, another was designated as an orchard, and
          the third became the site of their dream home, named Vista do Mar,
          meaning “views of the sea” in Portuguese.
        </p>
        <p className=" fs-6 ms-lg-5 px-lg-5 mt-3 mx-4">
          Today, the villa still stands proudly as a symbol of Alvit’s vision
          and determination. Ekaya Spaces has collaborated with the family to
          develop a luxury apartment project, aptly named Vista do Mar, ensuring
          that Alvit’s legacy lives on, even though he may no longer be with us.
        </p>
      </Container>

      <Container>
    
      <div id="demo" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner mb-4">
          <div class="carousel-item active">
            <Row>
              <Col sm={6} >
                <Image src="/images/vista_group-1.png" className="d-block w-100" alt="First slide" />
          
              </Col>
              <Col sm={6} >
                <Image src="/images/vista_group-2.png" className="d-block w-100 " alt="Second slide" />
              
              </Col>

            </Row>
          </div>
          <div class="carousel-item ">
            <Row>
              <Col sm={6} >
                <Image src="/images/vista_group-1.png" className="d-block w-100" alt="First slide" />
          
              </Col>
              <Col sm={6} >
                <Image src="/images/vista_group-2.png" className="d-block w-100 " alt="Second slide" />
              
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
        <h4 className="text-center p-5">
          <span className=" p-3 border-green bg-white fs-6">
            <Link className="wbg-green fs-6" href="#">
              Click here
            </Link> to fill the form for the project brochure
          </span>
        </h4>
      </Container>

      <Container>
        <p className="justify-content-center mx-lg-5 mt-5 text-center fs-1">
          Luxurious Amenities at Oceanfront Apartments
        </p>
        <p className="fs-5 ms-lg-5 mt-3 text-center px-lg-5">
          Indulge in the ultimate luxury living experience with a comprehensive
          array of amenities designed to exceed your expectations:
        </p>
      </Container>
      <Container>
        <Row className="p-5 d-flex flex-grow-1 ms-lg-5">
          {VistaDoMar.map((items, index) => (
            <>
              <Col lg={4} className=" p-4">
                <Image className="h-25 w-25" src={items.svg} />
                <div className="p-2">
                  <h3 className="mt-3 fs-5">{items.title}</h3>
                  <p className="fs-6">{items.text}</p>
                </div>
              </Col>
            </>
          ))}
        </Row>
        <Container>
          <p className="wbg-green fs-2 text-center px-lg-5 ms-lg-5">
            Experience the epitome of luxury living at our oceanfront paradise,
            where every detail is crafted to perfection.
          </p>
        </Container>

      </Container>
    </>
  );
};

export default VistaPage;
