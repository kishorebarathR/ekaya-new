'use client'
// import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Image,Col,Button } from 'react-bootstrap';

const BannerAllPageComponents = ({backgroundImage}) => {
    const [isMobile, setIsMobile] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(0);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setViewportWidth(window.innerWidth);
    //         setIsMobile(window.innerWidth <= 768);
    //     };

    //     // Check if window is available before adding event listener
    //     if (typeof window !== 'undefined') {
    //         handleResize(); // Call it initially to set the initial state
    //         window.addEventListener('resize', handleResize);

    //         return () => {
    //             window.removeEventListener('resize', handleResize);
    //         };
    //     }
    // }, []);


    return (
        <>
        <div
            className='d-flex flex-column h-100vh position-relatives'
            style={{
                // backgroundImage: isMobile ? url(${mobileBackgroundImage.url}) : url(${backgroundImage.url}), // Access the URL from the object
                backgroundImage: `url(${backgroundImage.url})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh',
            }}
        >

            {/* <Image src={`url(${backgroundImage.url})`} alt='' fluid className='img-fluid w-100 h-100 '/> */}
            {/* <Image src={`${backgroundImage.url}`} alt='' fluid className='img-fluid w-100 h-100' /> */}

            {/* <Col className="position-absolute start-50 ms-5 bottom-0 ">
              
                <Button className="px-5 text-center py-2 bg-white text-black border-0 rounded-0">
                    Contact Us
                </Button>
            </Col>
           */}
        </div>
    </>
    )
}

export default BannerAllPageComponents