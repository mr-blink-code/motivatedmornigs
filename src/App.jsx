import React from "react"
import { Routes, Route } from 'react-router-dom';
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import IntroandBenefits from "./sections/IntroandBenefits"
import FeatureHighlights from "./sections/FeatureHighlights"
import PricingPlans from "./sections/PricingPlans"
import DownloadableGuide from "./sections/DownloadableGuide"
import Footer from "./sections/Footer"
import Project from "./sections/Project";


function App() {
  

  return (
    <>
    
    <Header/>
    <Hero/>
    <IntroandBenefits/>
    <FeatureHighlights/>
    <PricingPlans/>
    <Project/>
    <DownloadableGuide/>
    <Footer/>
    
    </>
      )
}

export default App
