import React from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import HomeBanner from './HomeBanner'
import AboutEkaya from './AboutEkaya'
// import Propertiesoverview from './Propertiesoverview'
import WhyEkaya from './WhyEkaya'
import Insights from './Insights'
import Form from './Form'


const index = () => {
  return (
    <>
      <Header />
      <HomeBanner />
      <AboutEkaya />
      {/* <Propertiesoverview/> */}
      <WhyEkaya />
      <Insights />
      <Form />

      <Footer />
    </>
  )
}

export default index