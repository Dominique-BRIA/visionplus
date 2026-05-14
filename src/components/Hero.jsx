import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      {/* Background team photo */}
      <div className="hero__bg">
        <img
          src="/images/team.jpg"
          alt="Équipe Vision Plus"
          className="hero__bg-img"
        />
        <div className="hero__overlay" />
      </div>

      {/* Logo card overlaid on photo */}
      <div className="hero__logo-card">
        <img src="/images/logo-vp.jpg" alt="Vision Plus Logo" className="hero__logo-img" />
        <h2 className="hero__logo-name">VISION PLUS</h2>
        <p className="hero__logo-tagline">L'EXCELLENCE AU SERVICE DE VOS BESOINS</p>
      </div>

      {/* Gold headline below image */}
      <div className="hero__headline">
        <h1 className="hero__title">L'EXCELLENCE AU SERVICE DE VOS BESOINS</h1>
      </div>
    </section>
  )
}

export default Hero
