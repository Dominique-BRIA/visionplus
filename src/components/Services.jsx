import React from 'react'
import './Services.css'

const services = [
  {
    id: 'academy',
    logo: '/images/logo-accademy.jpg',
    title: 'ACADEMY',
    description:
      'Comment faites-vous remarquer votre entreprise ? Nous fournissons des solutions de marketing numérique pour que les gens puissent facilement trouver votre entreprise.',
  },
  {
    id: 'btp',
    logo: '/images/logo-btp.jpg',
    title: 'BTP',
    description:
      'Faites entrer votre marketing dans l\'ère moderne en utilisant des canaux tels que les médias sociaux et le Web.',
  },
  {
    id: 'immobilier',
    logo: '/images/logo-immobilier.jpg',
    title: 'IMMOBILIER',
    description:
      'Faites entrer votre marketing dans l\'ère moderne en utilisant des canaux tels que les médias sociaux et le Web.',
  },
  {
    id: 'quincaillerie',
    logo: '/images/logo-quincaillerie.jpg',
    title: 'QUINCAILLERIE',
    description:
      'Faites entrer votre marketing dans l\'ère moderne en utilisant des canaux tels que les médias sociaux et le Web.',
  },
]

function ServiceCard({ logo, title, description }) {
  return (
    <div className="service-card">
      <div className="service-card__logo-wrap">
        <img src={logo} alt={title} className="service-card__logo" />
        <div className="service-card__logo-glow" />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
      <div className="service-card__bar" />
    </div>
  )
}

function Services() {
  return (
    <section className="services">
      <div className="services__header">
        <h2 className="services__heading">NOS SERVICES</h2>
        <div className="services__heading-line" />
      </div>
      <div className="services__grid">
        {services.map((s) => (
          <ServiceCard key={s.id} {...s} />
        ))}
      </div>
    </section>
  )
}

export default Services
