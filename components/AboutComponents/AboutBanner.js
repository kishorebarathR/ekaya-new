
import React from 'react'
import { Row,Col ,Image ,Container} from 'react-bootstrap'
import BannerAllPageComponents from '../PropsComponents/BannerAllPageComponents'


const AboutBanner = () => {
  const bgImage = {
    url: '/images/Ourstory.jpg'
  }
  return (
    <>
  <BannerAllPageComponents backgroundImage={bgImage} />
  
  <Container>
  <Row>
  <Col className="position-absolute start-0 bottom-0">
             
             <h1 className=" px-5 ms-5 py-2 text-white display-1 mb-5">
                <b> Our Story</b>
             </h1>
         </Col>
         </Row>

         </Container>
  

    
    </>
  )
}

export default AboutBanner