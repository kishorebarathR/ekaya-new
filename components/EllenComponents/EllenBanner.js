import React from 'react'
import { Row, Col, Container, Image, Button } from 'react-bootstrap'
import BannerAllPageComponents from '../PropsComponents/BannerAllPageComponents'
import { FaArrowRight } from 'react-icons/fa';
const EllenBanner = () => {
    const bgImage = {
        url: '/images/Ellen-banner.jpg'
    }
    return (
        <>

            <BannerAllPageComponents backgroundImage={bgImage} />

            <Container>
                <Row className='position-absolute start-0 bottom-0 ms-2'>
                    <Col className=" ">
                        <h1 className=" px-5 ms-5   py-2 text-white display-1 mb-2">
                            <b> Ellen <p className='mb-0 gray'>by Ekaya Spaces</p></b>
                        </h1>
                        <h5 className=" px-5 ms-5 py-2 text-white display-6  mb-5">
                            Off Langford Main Road l Bengaluru l India
                        </h5>
                    </Col>
                </Row>
            </Container>
            <Col lg={4} className="position-absolute end-0  me-5 px-3  bottom-0  mt-3 z-3">
            <Button className=" text-start  p-lg-3  px-4 hover-contact  border-0 rounded-0 w-100">
              Contact Us <FaArrowRight className="ms-lg-2" />
            </Button>
          </Col>
          <Col className="position-absolute end-0 ms-4  bottom-0 mt-3 z-3">
            <Button className=" text-center  bg-white p-lg-3  p-3 border-0 rounded-0">
              Contact Us
            </Button>
          </Col>
        </>
    )
}

export default EllenBanner