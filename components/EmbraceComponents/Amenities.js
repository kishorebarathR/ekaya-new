import React from 'react'
import { Row, Col, Container,Image } from 'react-bootstrap'

const Amenities = () => {
    return (
        <>

<Container fluid className='text-white wbg-light-yellow'>
                <Container>
                    <Row >
                    <Col><p className='justify-content-center mx-4  display-6 ms-5 px-3'><b> Amenities</b></p></Col>
                    <Col className='d-flex flex-column fs-6 '>
                    <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/Ellipse 147.svg  " className="m-2" style={{ width: '8px' }} alt="..."></Image>
                                </div>
                                <p> Children’s Play Area.</p>
                            </div>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/Ellipse 147.svg  " className="m-2" style={{ width: '8px' }} alt="..."></Image>
                                </div>
                                <p>   Gymnasium.</p>
                            </div>
                    </Col>
                    </Row>
                </Container>
            </Container>

</>
)
}
export default Amenities