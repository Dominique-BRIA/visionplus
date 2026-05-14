import React from 'react'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import SocialBar from './components/SocialBar.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <Services />
      <SocialBar />
      <Footer />
    </div>
  )
}

export default App
