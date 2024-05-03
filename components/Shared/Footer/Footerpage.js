import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

const Footerpage = () => {
    return (
        <>
<Container className= 'p-0 z-2 bg-white position-relative '>
           
                <Row className=' px-5 '>
                    <Col lg={12} sm={12} className='d-flex flex-row text-center '>
                        <a href="#" className="  w-100 p-2 fs-6  color-footer border">Facebook <GoArrowUpRight className='fs-3' /></a>
                        <a href="#" className="  w-100 p-2 fs-6 color-footer border">LinkedIn <GoArrowUpRight className='fs-3' /></a>
                        <a href="#" className="  w-100 p-2 fs-6 color-footer border">YouTube <GoArrowUpRight className='fs-3' /></a></Col>
                </Row>
            </Container>
            <Container fluid className='p-0 light-gray z-2 position-relative'>


                <Container className='border-bottom-grey py-4 mb-3 px-5'>
                    <Image src="/images/Footer_logo.svg" className="w-25 mt-3  ms-2" alt="..." />
                </Container>

                <Container className='border-bottom-dark py-3 '>
                    <Row className="px-5">
                        <Col sm={12} lg={4}>
                            <h5>Contact Details</h5>
                        </Col>

                        <Col className='d-flex flex-column' sm={12} lg={4}>
                            <h5 className=''>Our Projects</h5>
                        </Col>

                        <Col className=' d-flex flex-column' sm={12} lg={4}>
                            <h5 className=''>About Ekaya</h5>
                        </Col>
                    </Row>

                </Container>
                <Container className='z-2 position-relative'>
                    <Row className='px-5'>
                        <Col sm={12} lg={4} className='mt-3'>
                            <p className='fs-6'>#36,4th Cross,Nandidurg Road,<br></br>Jayamahal,Bengaluru 560046</p>
                            <div className=''>
                                <p className='fs-6 mb-0 d-flex gap-1'><h5>Phone:<p className='mb-0'></p></h5> +91 98452 47374</p>
                                <p className='ms-lg-5 fs-6 px-lg-4  gap-1'> +91 98440 32022</p>
                            </div>

                            <a href="#" className="text-decoration-none text-dark fs-6 d-flex gap-3"><h5>Email:</h5>contact@ekaya</a>
                        </Col>
                        <Col className='d-flex flex-column mt-3' sm={12} lg={4}>

                            <div className=" fs-6 w-75 rounded-0">
                                <div className="mb-3  w-75 border-green rounded-0 p-2" style={{ background: "#EFF1F3" }}>
                                    Ongoing Projects
                                   
                                </div>
                            </div>
                            <a href="/donal" target='_blank' className="text-decoration-none fs-6 mt-1 mx-2 wbg-txt-green">Goa -Dona Paula</a>
                            <a href="/vista-do-mar" target='_blank' className="text-decoration-none text-dark fs-6 mt-1 mx-2 green-clr">- Vista-Do-Mar</a>
                            <h6 className="text-decoration-none fs-6 mt-1 mx-2  wbg-txt-green">Banglore</h6>
                            <a href="/takshavi" target='_blank' className="text-decoration-none text-dark fs-6 mt-1 mx-2  green-clr">- Takshavi</a>

                            <div className="fs-6 w-75 rounded-0" style={{ backgroundColor: '#EFF1F3' }}>
                                <div className="mb-3 mt-3 border-green rounded-0 w-75 p-2">
                                    Completed Projects
                                   
                                </div>
                            </div>

                            <h6 target='_blank' className="text-decoration-none fs-6 mt-1 mx-2 wbg-txt-green">Bangalore</h6>
                            <a href="/embrace" target='_blank' className="text-decoration-none text-dark fs-6 mt-1 mx-2 green-clr">- Embrace</a>
                            <a href="/ellen" target='_blank' className="text-decoration-none text-dark fs-6 mt-1 mx-2 green-clr">- Ellen</a>
                            <div className="fs-6 w-75 rounded-0" style={{ backgroundColor: '#EFF1F3' }}>
                                <div className="mt-3 mb-3 border-green rounded-0 w-75 p-2">
                                    Upcoming Projects
                                    
                                </div>
                            </div>

                            <a href="/moira" target='_blank' className="text-decoration-none fs-6 mt-1 mx-2 wbg-txt-green">Goa - Moira</a>
                            <a href="/amora" target='_blank' className="text-decoration-none text-dark fs-6 mt-1 mx-2 green-clr">- Amora</a>


                        </Col>
                        <Col className=' d-flex flex-column mt-3' sm={12} lg={4}>

                            <a href="/about-us" target='_blank' className="text-decoration-none text-dark fs-6 mt-1 green-clr">Our Story</a>
                            <a href="#" className="text-decoration-none text-dark fs-6 mt-1 green-clr">Our Team</a>
                            <a href="#" className="text-decoration-none text-dark fs-6 mt-1 green-clr"> Why Ekaya</a>
                            <a href="#" className="text-decoration-none text-dark fs-6 mt-1 green-clr">Sustainability</a>
                        </Col>
                    </Row>
                </Container>

                <Container className='mt-5 px-5 z-2 position-relative'>
                    <p className='border-bottom'></p>

                    <a href="#" className="text-decoration-none text-dark fs-6 mt-1">@2024 Ekaya.All Rights Reserved</a>
                    <div className='float-end'>
                        <a href="#" className="text-decoration-none text-dark fs-6 mt-1 px-1">Teams of Use</a> l
                        <a href="#" className="text-decoration-none text-dark fs-6 mt-1 px-1">Privacy Policy</a> l

                        <a href="#" className="text-decoration-none text-dark fs-6 mt-1 px-1">Disclaimer</a>
                    </div><p className='border-bottom p-2'></p>

                    <p className='py-4'></p>
                </Container>

            </Container>
        </>

    )
}

export default Footerpage
