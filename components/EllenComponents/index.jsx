import React from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import EllinBanner from './EllenBanner'
import EllinPage from './EllenPage'
import SpecificationEllin from './SpecificationEllen'
import EllinMap from './EllenMap'
import EllinTab from './EllenTab'
import Form from './Form'

const index = () => {
  return (
    <>
      <Header />
            <EllinBanner />
            <EllinPage />
            <SpecificationEllin/>
            <EllinMap/>  
            <EllinTab/>
            <Form/> 


           
         
    <Footer />
    </>
  )
}

export default index