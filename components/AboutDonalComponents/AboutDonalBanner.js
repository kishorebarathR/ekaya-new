'use client'
import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import BannerAllPageComponents from '../PropsComponents/BannerAllPageComponents'

const AboutDonalBanner = () => {
  const bgImage = {
    url: '/images/Donal-banner.jpg'
  }
  return (
    <>


      <BannerAllPageComponents backgroundImage={bgImage} />

      <Container>
                <Row>
                    <Col className="position-absolute start-0 bottom-0 mb-5">
                        <h1 className=" px-5 ms-5 py-2 text-white display-1 mb-5">
                            <b> About <p className='mb-0'>  Dona Paula</p></b>
                        </h1>
                    </Col>
                </Row>
            </Container>

      <Container>
        <p className=' fs-6 mx-4 mt-5'>Nestled along the picturesque coastline of Goa, Dona Paula stands as a testament to the region’s timeless allure and natural beauty. Named after Dona Paula de Menezes, a historical figure enveloped in folklore, this iconic locale captivates visitors with its panoramic vistas of the Arabian Sea and verdant landscapes.</p>
        <p className=' fs-6 mx-4 mt-5'>Renowned as the “Lover’s Paradise,” Dona Paula beckons romantics and adventurers alike to bask in its romantic ambiance and witness the breathtaking confluence of the Mandovi and Zuari rivers. The famed Dona Paula Viewpoint offers a serene retreat, where one can immerse themselves in the tranquil atmosphere and marvel at the scenic splendor that surrounds them.</p>
      </Container>

      <Container fluid className='mt-5 d-flex flex-column gap-5'>

        <Row className=''>

          <Col className='p-0' sm={12} lg={5}>
            <Image src="/images/Donal_img1.jpg  " className="img-fluid w-100 h-100 middle  " alt="..." />
          </Col>

          <Col className='p-5 d-flex flex-column justify-content-center postion-relative' sm={12} lg={7}>
            <p className='fs-6 mb-0'>Dona Paula boasts a rich historical tapestry, with tales dating back to the colonial era of Portuguese rule in Goa. Legend has it that Dona Paula de Menezes, a noblewoman of Portuguese descent, tragically fell in love with a local fisherman, only to meet her demise by plunging into the Arabian Sea from the precipice now known as the Dona Paula Viewpoint. Her love story has since become the subject of folklore and continues to intrigue visitors to this day.</p>
          </Col>
        </Row>

        <Row className=' d-flex flex-lg-row flex-column-reverse'>
          <Col className='p-5 d-flex flex-column justify-content-center' sm={12} lg={7}>
            <p className='fs-6 mb-0'>Furthermore, Dona Paula’s strategic location along the coast made it a significant port during the colonial era, facilitating trade and commerce between Portugal and other parts of Asia. The remnants of this maritime heritage can still be seen in the quaint fishing villages and historic landmarks that dot the coastline.</p>
          </Col>

          <Col className=' p-0' sm={12} lg={5}>
            <Image src="/images/Donal_img2.jpg  " className="img-fluid w-100 h-100 middle " alt="..." />
          </Col>
        </Row>

        <Row className='mt-5'>

          <Col className='p-0' sm={12} lg={5}>
            <Image src="/images/Donal_img3.jpg   " className="img-fluid w-100 h-100 middle  " alt="..." />
          </Col>

          <Col className='p-5 d-flex flex-column justify-content-center postion-relative' sm={12} lg={7}>
            <p className='fs-6 mb-0'>Rich in cultural heritage, Dona Paula boasts landmarks such as the Cabo Raj Bhavan, once a Portuguese fort and now the official residence of the Governor of Goa. Its vibrant markets and proximity to renowned beaches like Miramar and Vainguinim further elevate its charm, offering a perfect blend of relaxation and exploration.</p>
          </Col>
        </Row>

        <Row className=' d-flex flex-lg-row flex-column-reverse'>
          <Col className='p-5 d-flex flex-column justify-content-center' sm={12} lg={7}>
            <p className='fs-6 mb-0'>With its timeless beauty, affluent ambiance, and enchanting coastal vistas, Dona Paula continues to enchant visitors and residents alike, promising an unforgettable experience amidst the wealth and luxury of Goa’s coastal paradise.</p>
          </Col>

            <Col className='p-0 ' sm={12} lg={5}>
            <Image src="/images/Donal_img3.jpg  " className="img-fluid w-100 h-100 middle  " alt="..." />
          </Col>
        </Row>

      </Container>



    </>
  )
}

export default AboutDonalBanner
