import React from 'react'
import Header2 from '../components/Header2'
import Hero from '../components/Hero'
import Gallary from '../components/Gallary'
import Visual from '../components/Visual'
import Personal from '../components/Personal'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Hero/>
      <Gallary/>
      <Visual/>
      <Personal/>
      <Contact/>
      <Footer/>
    
    </div>
  )
}
