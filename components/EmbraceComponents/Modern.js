import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

const Modern = () => {
    return (
        <>
            <Container className='me-3'>
                <p className='justify-content-center mx-4 mt-5 display-6'>Modern idyll in a three-storey block<br></br> with six luxurious homes</p>
                <p className='fs-6 mx-4 mt-5'>Located in the serene yet prestigious Ganga Nagar, Ekaya’s Embrace is a testament to modern luxury, just a gaze away from Bengaluru’s stunning Embassy One. Perfectly positioned off Bellary Main Road, this elegant abode ensures effortless connectivity to Bengaluru International Airport, the essential Columbia Asia Hospital, and vibrant market hubs. At Embrace, luxury is reimagined, offering a unique blend of comfort and elegance, designed to cater to those who aspire for a life beyond the ordinary.</p>
                <p className='fs-6 mx-4 mt-5'>Our homes are designed to create a harmonious flow between interior luxury and the beauty of the outdoors.</p>
            </Container>


            <Container fluid>

            </Container>

            <Container fluid>


                <Container className=' me-1'>
                    <Col className='fs-6 col-lg-3 ms-4  text-center azureish-white p-2'>Project Gallery</Col>
                </Container>
                <Row className='wbg-dark-green'>

                    <Col></Col>

                    <Col className='middle  '>
                        <p className='fs-6 text-white justify-content-center'>Experience the pinnacle of modern living with our spacious homes, featuring thoughtful layouts and upscale amenities.</p>
                    </Col>

                    <Col lg={8} className='p-0'>
                        <Image src="/images/Embrace_img2.jpg " className="img-fluid w-100 " alt="..." />
                    </Col>
                </Row>
            </Container>

            <Container fluid className='' >
            </Container>



            <Container className='me-4'>
                <p className='justify-content-center mx-4 mt-5 display-6'>Spacious, modern homes with thoughtful layouts</p>
                <p className='fs-6 mx-4 mt-3'>Within view of Bengaluru’s newest and hottest landmark destination - Embassy One (Four Seasons Hotel and Residences), Ekaya’s Embrace is just off Bellary Main Road, cocooned in the most sought after, premium residential neighbourhood of Ganga Nagar.</p>
                <p className='fs-6 mx-4 mt-3'>At Embrace compromise is never an option. Only the best of everything has been utilized, Right from the building material, to its 24-power back up, to the maneuver-friendly stilt parking at ground level, to the finish with marble and wooden flooring.</p>

                <p className='fs-6 mx-4 mt-3'>Ideally located, merely a half hour away from the Bengaluru International Airport, via NH7, Embrace also boasts of an easy and hurdle-free access to the area’s prime market place and health care facilities, such as the Columbia Asia hospital. It is strategically situated near the CBD and just about 10 to 15 minutes from Cantonment.</p>
            </Container>

        </>
    )
}

export default Modern
