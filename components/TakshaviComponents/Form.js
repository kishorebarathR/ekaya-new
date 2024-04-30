import { Span } from 'next/dist/trace';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectRegistrationForm = () => {
  return (
    <Container className='px-5 p-1 ms-1'>
    <Container className='mt-5 p-5 mx-5 ' style={{ backgroundColor: '#F1F4F5' }}>

      <p className='mt-5 display-6'>Get in touch</p>
      <p className='fs-6'>*Required fields</p>

      <Row className="">
        <Col md={6}>
          <form>
            <div className="mb-3">
              {/* <label htmlFor="firstName" className="form-label fs-6">First Name*</label> */}
              <input type="text" className="form-control  border-0 bg-transparent border-bottom border-3 custom-input" id="firstName*" placeholder='First Name*' name="firstName" required />
            </div>

            <div className="mb-3">
              {/* <label htmlFor="email" className="form-label fs-6">Email*</label> */}
              <input type="email" className="form-control border-0 bg-transparent border-bottom border-3 custom-input" id="email*" placeholder='Email*' name="email" required />
            </div>

            <div className="mb-3">
              {/* <label htmlFor="project" className="form-label fs-6">Choose Project:</label> */}
              <select className="form-select border-0 bg-transparent border-3 border-bottom custom-input" id="project" name="project" required>
                <option value="Project A">Project A</option>
                <option value="Project B">Project B</option>
                <option value="Project C">Project C</option>
              </select>
            </div>
          </form>
        </Col>

        <Col md={6}>
          <form>
            <div className="mb-3">
              {/* <label htmlFor="lastName" className="form-label fs-6">Last Name*</label> */}
              <input type="text" className="form-control border-0 bg-transparent border-bottom border-3 custom-input" placeholder='Last Name*' id="lastName" name="lastName" required />
            </div>
            <div className="mb-3 ">
              {/* <label htmlFor="phone" className="form-label fs-6">Telephone*</label> */}
              <input type="tel" className="form-control border-0 bg-transparent border-bottom border-3 custom-input" id="phone" placeholder='Telephone*' name="phone" required />
            </div>

            <div className="mb-3">
              {/* <label htmlFor="location" className="form-label fs-6">Your Location:</label> */}
              <input type="text" className="form-control border-0 bg-transparent border-bottom border-3 custom-input" id="location" placeholder='Your Location' name="location" required />
            </div>
          </form>
        </Col>
      </Row>

      <Row>
        <Col className='border-bottom-only'>
          <div className="mb-3 form-check  ">
            <input type="radio" className="form-check-input" id="termsCheckbox" required />
            <label className="form-check-label fs-6" htmlFor="termsCheckbox">I declared that I have read, understood and accept the <a href="#" className="link-dark text-decration-none">Privacy Policy.</a></label>
          </div>
          <button type="submit" className="btn btn text-white p-1 px-5 py-2 rounded-0" style={{ backgroundColor: '#474848' }}>Submit</button>
        </Col>
      </Row>
      <div className='fs-5 text-center p-3'>
        {<span className="tab-title wbg-green">Call:</span>} +91 98440 32022
        <Col className='vr ms-2' style={{ width: '3px', height: '10px',color:"#5CA2B0" }}></Col>
        {<span className="tab-title wbg-green ms-2">Email:</span>}
        <a href="#" className="link-dark text-decoration-none"> Contact@ekaya.in</a>
        </div>
    </Container>
    </Container>
  );
};

export default ProjectRegistrationForm;
