import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero3 from '../components/hero3'
import Gallery1 from '../components/gallery1'
import Features171 from '../components/features171'
import Features18 from '../components/features18'
import Layout349 from '../components/layout349'
import CTA1 from '../components/cta1'
import FAQ1 from '../components/faq1'
import Contact4 from '../components/contact4'
import Footer15 from '../components/footer15'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Pixel Pet Photography</title>
        <meta property="og:title" content="Pixel Pet Photography" />
      </Helmet>
      <div className="home-navbar1">
        <Navbar4 rootClassName="navbar4-root-class-name"></Navbar4>
      </div>
      <div className="home-hero2">
        <Hero3></Hero3>
      </div>
      <div className="home-gallery4">
        <Gallery1></Gallery1>
      </div>
      <div className="home-features5">
        <Features171></Features171>
      </div>
      <div className="home-features6">
        <Features18></Features18>
      </div>
      <div className="home-features7">
        <Layout349></Layout349>
      </div>
      <div className="home-cta8">
        <CTA1></CTA1>
      </div>
      <div className="home-faq9">
        <FAQ1></FAQ1>
      </div>
      <div className="home-contact10">
        <Contact4></Contact4>
      </div>
      <div className="home-footer11">
        <Footer15></Footer15>
      </div>
    </div>
  )
}

export default Home
