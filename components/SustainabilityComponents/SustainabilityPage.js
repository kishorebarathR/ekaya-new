import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

const SustainabilityPage = () => {
    return (
        <>
            <Container className=''>
                <p className='mx-4 mt-5 display-6 wbg-green'>Embracing Sustainability:</p>
                <p className='mx-4 display-6'>Our Company’s Environmental <p className='mb-0'></p>Commitment</p>
                <p className='fs-6 mx-4 mt-3'>At our company, we take sustainability seriously. We understand the importance of minimizing our ecological footprint while maximizing positive impacts on the environment. From rainwater harvesting systems to preserving local ecosystems, we’re dedicated to creating a future where business and nature coexist harmoniously.</p>
            </Container>
            <Container className='mt-5 d-flex flex-column gap-5'>
                <Row className='mt-3'>
                    <Col className=' ' sm={12} lg={4}>
                        <Image src="/images/Sustainability_img1.jpg" className="img-fluid w-100 h-100  " alt="..." />
                    </Col>
                    <Col className='p-5 d-flex flex-column justify-content-center' sm={12} lg={8}>
                        <p className='fs-2'>Rainwater Harvesting:<p className='mb-0'></p> Nurturing Nature’s Resources</p>
                        <p className='fs-6 mb-0'>Water conservation is a priority for us. That’s why we’ve implemented rainwater harvesting systems across our facilities. By capturing rainwater runoff, we reduce reliance on traditional water sources and support local ecosystems.</p>
                    </Col>
                </Row>

                <Row className='d-flex flex-lg-row flex-column-reverse'>
                    <Col className='p-5 d-flex flex-column justify-content-center' sm={12} lg={8}>
                        <p className='fs-2'>Preserving Ecological Balance: <p className='mb-0'></p> Minimizing Impact, Maximizing Harmony</p>
                        <p className='fs-6 mb-0'>We prioritize minimizing damage to local ecology in all our endeavors. Whether constructing new facilities or expanding existing ones, we conduct thorough environmental impact assessments to identify and mitigate potential risks to nearby ecosystems.</p>
                    </Col>
                    <Col className='' sm={12} lg={4}>
                        <Image src="/images/Sustainability_img2.jpg" className="img-fluid w-100 h-100 " alt="..." />
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col className='' sm={12} lg={4}>
                        <Image src="/images/Sustainability_img3.jpg" className="img-fluid w-100 h-100 " alt="..." />
                    </Col>
                    <Col className='p-5 d-flex flex-column justify-content-center' sm={12} lg={8}>
                        <p className='fs-2'>Championing Reforestation:<p className='mb-0'></p>  Cultivating a Greener Tomorrow</p>
                        <p className='fs-6 mb-0'>We recognize the crucial role trees play in mitigating climate change. That’s why we’re committed to proactive reforestation efforts in regions affected by deforestation or degradation. Through partnerships with local communities and environmental organizations, we plant and nurture native tree species, restoring habitats and promoting ecological resilience.</p>
                    </Col>
                </Row>

                <Row className='d-flex flex-lg-row flex-column-reverse'>
                    <Col className='p-5 d-flex flex-column justify-content-center' sm={12} lg={8}>
                        <p className='fs-2'>Harnessing Solar Power:<p className='mb-0'></p>  Sustainable Energy Solutions</p>
                        <p className='fs-6  mb-0'>To reduce our reliance on fossil fuels, we utilize solar power through installations like rooftop panels and solar farms. By embracing solar energy, we lower our carbon emissions and contribute to a cleaner, more sustainable future.</p>
                    </Col>
                    <Col className='  ' sm={12} lg={4}>
                        <Image src="/images/Sustainability_img4.jpg" className="img-fluid w-100 h-100" alt="..." />
                    </Col>
                </Row>
            </Container>

            <Image src="/images/Group 49570.jpg" className="img-fluid w-100 h-100  " alt="..." />

            <Container fluid className='text-bg-dark p-5'>
                <Container>
                    <p className='fs-3'>Embracing Local Sourcing: Our Company’s Sustainable<p className='mb-0'></p> Procurement Approach</p>
                    <p className='fs-6'>At our company, sustainability isn’t just about minimizing environmental impact; it’s also about supporting local communities and economies. One of the ways we achieve this is by procuring all building-related materials locally. This commitment not only reduces transportation emissions but also fosters economic growth and strengthens community ties.</p>
                </Container>
            </Container>

            <Container>
                <Row className='mt-5'>
                    <Col sm={12} lg={4}>
                        <Image src="/images/Sustainability_img5.png" className="img-fluid w-25  " alt="..." />
                        <p className='fs-3'>Local Sourcing: <p className='mb-0'></p> Building Stronger <p className='mb-0'></p>Communities</p>
                        <p className='fs-6'>By sourcing materials locally, we reduce the need for long-distance transportation, thereby cutting down on carbon emissions associated with shipping. This approach aligns with our commitment to environmental responsibility by minimizing our carbon footprint.</p>
                    </Col>
                    <Col sm={12} lg={4}>
                        <Image src="/images/Sustainability_img6.png" className="img-fluid w-25  " alt="..." />
                        <p className='fs-3'>Supporting Local Economies: Investing<p className='mb-0'></p> in Communities</p>
                        <p className='fs-6'>By sourcing materials locally, we reduce the need for long-distance transportation, thereby cutting down on carbon emissions associated with shipping. This approach aligns with our commitment to environmental responsibility by minimizing our carbon footprint.</p>
                    </Col>
                    <Col sm={12} lg={4}>
                        <Image src="/images/Sustainability_img7.png" className="img-fluid w-25  " alt="..." />
                        <p className='fs-3'>Quality Assurance<p className='mb-0'></p> and Collaboration: <p className='mb-0'></p>Working Hand in Hand</p>
                        <p className='fs-6'>By sourcing materials locally, we reduce the need for long-distance transportation, thereby cutting down on carbon emissions associated with shipping. This approach aligns with our commitment to environmental responsibility by minimizing our carbon footprint.</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className=''>
                    <Col sm={12} lg={4}>
                        <Image src="/images/Sustainability_img8.png" className="img-fluid w-25  " alt="..." />
                        <p className='fs-3'>Empowering Communities: Driving Positive Change Together</p>
                        <p className='fs-6'>Our commitment to local sourcing extends beyond economic benefits; it’s also about empowering communities. By investing in local businesses and suppliers, we help create opportunities for growth and development. Additionally, by engaging with local stakeholders, we ensure that our projects are aligned with community needs and priorities.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SustainabilityPage
