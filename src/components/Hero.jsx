import React from 'react'
import './Hero.css'


function Hero({ bgImage = '/images/team.jpg', logoImg = '/images/logo-vp.jpg', name = 'VISION PLUS', tagline = "L'EXCELLENCE AU SERVICE DE VOS BESOINS", title = "L'EXCELLENCE AU SERVICE DE VOS BESOINS" }) {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img 
        src={bgImage} 
        alt="Bannière" 
        className="hero__bg-img" 

        />  
        <div className="hero__overlay" />
      </div>
      <div className="hero__logo-card">
        <img src={logoImg} 
        alt={name} 
        className="hero__logo-img"
         />
        <h2 className="hero__logo-name">{name}</h2>
        <p className="hero__logo-tagline">{tagline}</p>
      </div>
      <div className="hero__headline">
        <h1 className="hero__title">{title}</h1>
      </div>
    </section>
  )
}

export default Hero
