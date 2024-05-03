import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

const Specifications = () => {
    return (
        <>

            <Container fluid className='text-dark px-4 green'>
                <Container className='px-5'>
                <p className='  mt-5 p-1 display-6 ms-4'>Specifications</p><hr></hr>
                    <Row className='border-bottom-lite '>
                        <Col >
                            <p className='fs-6 ms-5'>
                                <h5>Structure</h5>
                            </p>
                        </Col>
                        <Col className='d-flex flex-column fs-6 '>

                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>
                                <p> RCC structure with concrete/block masonry walls.</p>
                            </div>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>
                                <p>
                                    Open surface parking on Stilt floor.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='border-bottom-lite'>
                        <Col>
                            <p className='fs-6 ms-5'>
                                <h5>Finishes</h5>
                            </p>
                        </Col>
                        <Col className='d-flex flex-column '>
                            <p className=''>
                                <h5>LIVING / DINING</h5>
                            </p>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>
                                <p className='fs-6'>
                                    Vitrified Flooring with Marble Finish.</p>
                            </div>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>

                                <p className='fs-6'>
                                    Oil bound distemper paint for Ceiling and Walls.  </p>
                            </div>

                            <p className=''><h5>MASTER BEDROOM</h5></p>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>

                                <p className='fs-6'>
                                    Wooden Flooring and Tile Skirting.</p>
                            </div>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>

                                <p className='fs-6'>
                                    Oil bound distemper paint for Ceiling and Walls.  </p>
                            </div>
                            <p className=''><h5>OTHER BEDROOMS</h5></p>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>

                                <p className='fs-6'>
                                    Vitrified flooring with Tile Skirting.</p>
                            </div>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>
                                <p className='fs-6'>
                                    Oil bound distemper paint for Ceiling and Walls.  </p>
                            </div>
                        </Col>
                    </Row>


                    <Row className='border-bottom-lite'>
                        <Col >
                            <p className='fs-6 ms-5'>
                                <h5>Toilets</h5>
                            </p>
                        </Col>

                        <Col className='d-flex flex-column fs-6 'sm={6}>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>
                                <p>
                                    Matt finish vitrified Tile Flooring.</p>
                            </div>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg" className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>
                                <p>
                                    Vitrified wall tiling upto 7 ft level.</p>
                            </div>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg" className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>

                                <p>
                                    False Ceiling with Grid panels.</p>
                            </div>

                        </Col>
                    </Row>

                    <Row className='border-bottom-lite'>
                        <Col>
                            <p className='fs-6 ms-5'>
                                <h5>Kitchen</h5>
                            </p>
                        </Col>
                        <Col className='d-flex flex-column fs-6 'sm={6}>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg" className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>

                                <p>
                                    Vitrified Tile flooring.</p>
                            </div>

                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>

                                <p>
                                    Ceramic wall tiling 2 ft above Counter level.</p>

                            </div>

                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>


                                <p>
                                    Oil bound distemper paint for Ceiling and Walls.</p>

                            </div>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>
                                <p >
                                    2 feet wide 19 mm thick Granite counter and SS Sink with Drain board.</p>

                            </div>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>
                                <p >
                                    Provision for Exhaust.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='border-bottom-lite'>
                        <Col>
                            <p className='fs-6 ms-5'>
                                <h5>Balconies/Utilities</h5>
                            </p>
                        </Col>

                        <Col className='d-flex flex-column fs-6 '>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>

                                <p>
                                    Matt finishVitrified tile flooring and skirting.</p>
                            </div>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>
                                <p>
                                    MS Handrail.</p>
                            </div>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg" className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>

                                <p>
                                    Cement based paint for Ceiling.</p>
                            </div>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>

                                <p>
                                    External Emulsion/Textured paint forWalls.</p>
                            </div>
                        </Col>
                    </Row>



                    <Row className=' border-bottom-lite'>
                        <Col>
                            <p className='fs-6 ms-5'>
                                <h5>Common Staircase</h5>
                            </p>
                        </Col>

                        <Col className='d-flex flex-column fs-6 '>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>

                                <p>
                                    Granite for landing, treads & risers from Basement to Fourth floor.</p>
                            </div>

                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>

                                <p>
                                    MS Handrail.</p>
                            </div>

                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>

                                <p>
                                    OBD paint and texture paint for Walls and OBD for Ceiling.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='border-bottom-lite'>
                        <Col>
                            <p className='fs-6 ms-5'>
                                <h5>Common Areas</h5>
                            </p>
                        </Col>
                        <Col className='d-flex flex-column fs-6 '>

                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>

                                <p>
                                    Granite flooring and skirting for Ground floor and Upper floors.</p>

                            </div>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>

                                <p>
                                    OBD/textured paint forWalls.</p>
                            </div>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>

                                <p>
                                    OBD paint for Ceiling.</p>
                            </div>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>

                                <p>
                                    MS Handrail.</p>
                            </div>
                        </Col>
                    </Row>


                    <Row className='border-bottom-lite'>
                        <Col>
                        <p className='fs-6 ms-5'>
                            <h5>Joinery</h5>
                            </p>
                            </Col>
                        <Col className='d-flex flex-column fs-6 '>

                            <p className=''>
                                <h5>Main Door</h5>
                                </p>

                                <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>
                                <p className='fs-6'> Teak wood frame andTeak wood shutter with melamine polish.</p>
                            </div>

                            <p className=''>
                                <h5>Internal Doors</h5>
                                </p>

                                <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>
                                <p className='fs-6'>Hard wood frame with both side Masonite skin shutter with paint.</p>
                            </div>

                           

                           
                           
                            <p className=''>
                                <h5>Toilet Doors</h5>
                                </p>
                                <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg" className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>
                                <p className='fs-6'>  Hard wood frame with Masonite skin shutter on the external side and laminated on the internal side.</p>
                            </div>
                            <div className='d-flex flex-row justify-content-start align-items-start '>
                                <div >
                                    <Image src="/images/specification_img.svg " className="m-2" style={{ width: '18px' }} alt="..."></Image>
                                </div>
                                <p className='fs-6'>UPVC glazed slidingWindows.</p>
                            </div>
                        </Col>
                    </Row>



                </Container>
            </Container>

        </>
    )
}

export default Specifications
