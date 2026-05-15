import React from 'react'
import './Services.css'

const services = [
  {
    id: 'academy',
    logo: '/images/logo-accademy.jpg',
    title: 'ACADEMY',
    description:
      'Groupe Scolaire Bilingue Panafricain — Former aujourd\'hui les leaders africains de demain. Cliquez pour en savoir plus.',
    page: 'academy',
  },
  {
    id: 'btp',
    logo: '/images/logo-btp.jpg',
    title: 'BTP',
    description:
      "La perfection n'est pas de faire des choses extraordinaires, mais de faire des choses ordinaires de façon extraordinaire.\n Cliquez pour en savoir plus.",
    page: 'btp',
  },
  {
    id: 'immobilier',
    logo: '/images/logo-immobilier.jpg',
    title: 'IMMOBILIER',
    description:
      "L'immobilier est le meilleur investissement sur la terre, car c’est la seule chose qui ne s'en va pas. Cliquez pour en savoir plus.",
    page: null,
  },
  {
    id: 'quincaillerie',
    logo: '/images/logo-quincaillerie.jpg',
    title: 'QUINCAILLERIE',
    description:
      "La quincaillerie est l'art de faire des choses simples de façon efficace.\n Cliquez pour en savoir plus.",
    page: "quincaillerie",
  },
]

function ServiceCard({ logo, title, description, page, onNavigate }) {
  const clickable = !!page
  return (
    <div
      className={`service-card${clickable ? ' service-card--link' : ''}`}
      onClick={() => clickable && onNavigate(page)}
      title={clickable ? `Ouvrir ${title}` : undefined}
    >
      {clickable && <span className="service-card__badge">Voir →</span>}
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

function Services({ onNavigate }) {
  return (
    <section className="services">
      <div className="services__header">
        <h2 className="services__heading">NOS SERVICES</h2>
        <div className="services__heading-line" />
      </div>
      <div className="services__grid">
        {services.map((s) => (
          <ServiceCard key={s.id} {...s} onNavigate={onNavigate} />
        ))}
      </div>
    </section>
  )
}

export default Services
