import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

const MoiraPage = () => {
    return (
        <>
            <Container>
                <p className='fs-6 mx-5 mt-5'>Moira, a serene village nestled in the verdant landscapes of Goa, holds a rich historical tapestry woven with Portuguese influence. Initially known as ‘Moiro’ during the colonial era, it stands as a testament to Goa’s cultural amalgamation. The village witnessed Portuguese colonization, reflected in its architecture, cuisine, and lifestyle. Over time, Moira has evolved into a tranquil haven, preserving its colonial charm while embracing modernity.</p>
            </Container>


            <Container  className='mt-5 d-flex flex-column gap-5'>

                <Row className='azureish-white '>
                    <Col className='p-0 position-relative' sm={12} lg={4}>
                        <span id='triangle-left'></span>
                        <Image src="/images/Moira_img1.png" className="img-fluid w-100 h-100  " alt="..." />
                    </Col>
                    <Col className='p-5 d-flex flex-column justify-content-center postion-relative' sm={12} lg={8}>
                        <p className='fs-6 mb-0'>
                            In recent years, Moira has emerged as the new real estate hub for the affluent seeking a retreat from bustling city life. The village’s rustic allure, adorned with winding lanes, lush greenery, and old-world charm, appeals to those craving a blend of luxury and tranquility. The rich and famous are drawn to Moira for its quaint ambience, away from the commercialized bustle of other coastal areas in Goa.
                        </p>
                    </Col>
                </Row>

                <Row className='azureish-white d-flex flex-lg-row flex-column-reverse'>
                    <Col className='p-5 d-flex flex-column justify-content-center ' sm={12} lg={8}>
                        <p className='fs-6 mb-0'>
                            One of Moira’s irresistible charms is its proximity to Goa’s renowned beaches. Just a short drive away, residents and visitors can revel in the sun-kissed shores of Calangute, Baga, and Anjuna beaches. These iconic destinations offer a plethora of water sports, beachfront shacks serving delectable seafood, and vibrant nightlife, ensuring endless entertainment and relaxation.
                        </p>
                    </Col>
                    <Col className='p-0  position-relative' sm={12} lg={4}>
                        <span id='triangle-right'></span>
                        <Image src="/images/Moira_img2.png" className="img-fluid w-100 h-100 " alt="..." />
                    </Col>
                </Row>

                <Row className='azureish-white'>
                    <Col className='p-0 position-relative' sm={12} lg={4}>
                        <span id='triangle-left'></span>
                        <Image src="/images/Moira_img3.png " className="img-fluid w-100 h-100 " alt="..." />
                    </Col>
                    <Col className='p-5 d-flex flex-column justify-content-center' sm={12} lg={8}>
                        <p className='fs-6 mb-0'>Moreover, Moira’s strategic location near Assagao adds to its allure. Assagao, a neighboring village known for its bohemian vibe, hosts an array of chic cafes, boutique stores, and gourmet restaurants. Indulging in a culinary journey through Assagao’s quaint eateries becomes a delightful pastime for residents of Moira, offering a taste of Goa’s diverse gastronomy.</p>
                    </Col>
                </Row>

                <Row className='azureish-white d-flex flex-lg-row flex-column-reverse'>
                    <Col className='p-5 d-flex flex-column justify-content-center' sm={12} lg={8}>
                        <p className='fs-6  mb-0'>Additionally, Moira’s accessibility is enhanced by its proximity to the newly constructed Mopa Airport. The airport, situated in Pernem taluka, significantly reduces travel time for residents and visitors, making Moira an even more desirable destination. With seamless connectivity to domestic and international destinations, Moira becomes a gateway to leisure and luxury, further elevating its status as a premier destination in Goa’s real estate landscape.</p>
                    </Col>
                    <Col className='p-0 position-relative' sm={12} lg={4}>
                        <span id='triangle-right'></span>
                        <Image src="/images/Moira_img4.png" className="img-fluid w-100 h-100 me-0 " alt="..." />
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default MoiraPage
