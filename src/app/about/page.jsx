import React from 'react'
import AboutUs from '../Sections/AboutUs/page'
import HeroSection from '../Sections/HeroSection/page'
import VisionSection from '../Sections/VisionSection/page'
import AboutEndSection from '../Sections/AboutEndSection/page'


const about = () => {
  return (
    <>
    <HeroSection />
    <div className='my-20'>
      <h1 className='text-3xl text-center'>About Us</h1>
    </div>
    <AboutUs />
    <VisionSection />
    <AboutEndSection />
    </>
  )
}

export default about
