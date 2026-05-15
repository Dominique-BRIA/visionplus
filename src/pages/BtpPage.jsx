import React from 'react'
import "./AcademyPage.css"

function BackButton({ onNavigate }) {
  return (
    <button className="ac-back" onClick={() => onNavigate('home')}>
      ← Retour à l'accueil
    </button>
  )
}

function BtpHero() {
  return (
    <div className="ac-hero">
      
      <div className="ac-hero__right">
        <h1 className="ac-hero__title">
          VISION PLUS<br />
          <span className="ac-hero__brand"><em>BTP</em></span>
        </h1>
        <p className="ac-hero__sub">La perfection n'est pas de faire des choses extraordinaires, mais de faire des choses ordinaires de façon extraordinaire.</p>
      </div>
    </div>
  )
}

function BtpFlyer()
{
  return (
    <div className = "ac-flyer">
        <img 
        src="/images/btpPresentation.jpg" 
        alt="Bannière" 
        className="hero__bg-img" 

        /> 
    </div>
  )
}

function BtpTagline() {
  return (
    <div className="ac-tagline">
      <div className="ac-tagline__quote">
        <span className="ac-tagline__guillemet">"</span>
        <div>
          <p className="ac-tagline__main">PLUS QU'UNE ÉCOLE…</p>
          <p className="ac-tagline__accent">UN AVENIR<br />POUR VOTRE ENFANT.</p>
          <p className="ac-tagline__sub">
            Parce que chaque enfant mérite<br />
            un encadrement sécurisé,<br />
            bienveillant et de qualité.
          </p>
        </div>
      </div>
      <div className="ac-valeurs">
        {valeurs.map((v, i) => (
          <div key={i} className="ac-valeur">
            <span className="ac-valeur__icon">{v.icon}</span>
            <span className="ac-valeur__label">{v.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function BtpBanner() {
  return (
    <div className="ac-banner">
      <span>✦</span>
      <span>EXCELLENCE</span>
      <span className="ac-banner__dot">•</span>
      <span>AMBITION</span>
      <span className="ac-banner__dot">•</span>
      <span>AVENIR</span>
      <span>✦</span>
    </div>
  )
}

function BtpPage({ onNavigate }) {
  return (
    <section style={{ padding: '40px 20px', background: '#0A1628', minHeight: '60vh' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <BackButton onNavigate={onNavigate} />
        <BtpHero />
        <BtpFlyer />
      </div>
    </section>
  )
}


export default BtpPage