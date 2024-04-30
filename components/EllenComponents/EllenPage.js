import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

const EllenPage = () => {
    return (
        <>
            <Container>
                <p className='justify-content-center mx-4 mt-5 display-6 ms-lg-5 px-lg-5'>Truly a home for your future!</p>
                <p className=' fs-6 mx-4 mt-3 ms-lg-5 px-lg-5'>Ekaya brings you its prestigious project, ELLEN - a premium three-storey apartment block, with a total of 11 spacious modern homes, abound with new age luxuries.</p>
                <p className=' fs-6 mx-4 mt-3 ms-lg-5 px-lg-5'>Every floor houses just two, 2 bedroom and one, 3 bedroom home. Each unit has an open kitchen with a spacious utility area, an exclusive dining area, and a spacious balcony. All Vaastu-compliant homes are thoughtfully designed, keeping in mind the most primary need of the day - space and privacy. The residences are beautifully weaved into the very fiber of ELLEN’s design structure.</p>
                <p className=' fs-6 mx-4 mt-3 ms-lg-5 px-lg-5'>At ELLEN compromise was never an option. Only the best of everything has been utilized, right from the building material, to its 24 hrs - power back up,the gym, to the maneuver-friendly stilt ( ground level ) and basement parking , to the finish with marble and wooden flooring.</p>
            </Container>
            <Container>
                <Row className='d-flex flex-row ms-lg-5 px-lg-5 '>                   
                    <Col lg={8} className=''>
                    <Col className='fs-6 p-0 d-lg-inline-block px-4 p-2 wbg-green-dark' >
                        Project Gallery
                    </Col>
                        <div id="carouselExampleFade" class="carousel slide carousel-fade">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <Image src="/images/carousle.jpg" class="d-block w-100 h-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <Image src="/images/carousel-img.jpg" class="d-block w-100 h-100" alt="..." />
                                </div>

                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden ">Next</span>
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <p className='justify-content-center mx-4 mt-5 display-6 ms-lg-5 px-lg-5'>LOCATION</p>
                <p className=' fs-6 mx-4 mt-3 ms-lg-5 px-lg-5'>With in a few minutes drive of Bengaluru’s hottest landmark destinations – UB city, Bangalore club, Ritz Carlton hotel, JW Marriot, Lalbagh Botanical Gardens, Cubbon park and many more, Ekaya’s ELLEN is just off Langford Main Road, cocooned in the most sought after, premium residential neighbourhood of Richmond town in central bangalore.</p>
                <p className=' fs-6 mx-4 mt-3 ms-lg-5 px-lg-5'>It is strategically situated in the Central Business District (CBD) and just about 5 minutes from the upcoming metro station at Vellara junction.</p>
            </Container>

        </>
    )
}

export default EllenPage
