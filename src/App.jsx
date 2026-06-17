import React from 'react'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Services from './components/Services'
import Gallery  from './components/Gallery'
import WhyUs    from './components/WhyUs'
import Cta      from './components/Cta'
import Footer   from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyUs />
      <Cta />
      <Footer />
    </>
  )
}
