import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        N'hésitez pas à nous contacter par le biais des informations ci-dessous.
        Nous sommes là pour vous aider à passer à travers le processus de développement.
        Nous nous assurons que nous sommes en mesure de vous assister tout au long du processus.
      </p>
      <div className="footer__contacts">
        <a href="mailto:VisionPlus.vp11@gmail.com" className="footer__contact">
          <span className="footer__contact-label">Email :</span>
          <span className="footer__contact-value">VisionPlus.vp11@gmail.com</span>
        </a>
        <span className="footer__separator">|</span>
        <span className="footer__contact">
          <span className="footer__contact-label">Localisation :</span>
          <span className="footer__contact-value">Soa</span>
        </span>
        <span className="footer__separator">|</span>
        <a href="tel:+237640397531" className="footer__contact">
          <span className="footer__contact-label">Contact :</span>
          <span className="footer__contact-value">+237 640 397 531 / +237 681 668 324</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
