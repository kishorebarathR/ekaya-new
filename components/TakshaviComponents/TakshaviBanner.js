import React from 'react'
import { Row, Col, Container, Image,Button } from 'react-bootstrap'
import BannerAllPageComponents from '../PropsComponents/BannerAllPageComponents'
import { FaArrowRight } from 'react-icons/fa';
const TakshaviBanner = () => {
    const bgImage = {
        url: '/images/Takshavi-banner.jpg'
    }
    return (
        <>

            <BannerAllPageComponents backgroundImage={bgImage} />

            <Container>
                <Row>
                    <Col className="position-absolute start-0 bottom-0">
                        <h1 className=" px-5 ms-5 py-2 text-white display-1 mb-2">
                            <b> Takshavi <p className='mb-0 gray'> by Ekaya Spaces</p></b>
                        </h1>
                        <h5 className=" px-5 ms-5 py-2 text-white display-6  mb-5">
                            Frazer Town l Bengaluru l India
                        </h5>
                    </Col>
                </Row>
            </Container>

            <Col lg={4} className="position-absolute end-0 ms-5 me-5 bottom-0  mt-3">
      <Button className=" text-start me-5 p-lg-3 p-3 px-5 hover-contact  border-0 rounded-0 w-100">
          Contact Us <FaArrowRight className="ms-lg-2" />
        </Button>
      </Col>
      <Col className="position-absolute end-0 ms-4  bottom-0 mt-3">
        <Button className=" text-center  bg-white p-lg-3  p-3 border-0 rounded-0">
          Contact Us
        </Button>
      </Col>

        </>
    )
}

export default TakshaviBanner