import React from 'react'
import { Row, Col, Container,Image } from 'react-bootstrap'
import BannerAllPageComponents from '../PropsComponents/BannerAllPageComponents'

const SustainabilityBanner = () => {
    const bgImage = {
        url: '/images/Sustainability-banner.png'
      }
    return (
        <>

          
<BannerAllPageComponents backgroundImage={bgImage} />

<Container>
                <Row>
                    <Col className="position-absolute start-0 bottom-0 mb-5">
                        <h1 className=" px-5 ms-5 py-2 text-white display-1 mb-5">
                            <b> Sustainability</b>
                        </h1>
                       
                    </Col>
                </Row>
            </Container>
           
        

        </>
    )
}

export default SustainabilityBanner