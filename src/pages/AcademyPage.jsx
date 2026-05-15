import React from 'react'
import './AcademyPage.css'

/* ── Data ── */
const pourquoiNousChoisir = [
  { icon: '👨‍🏫', text: 'Enseignants bilingues qualifiés' },
  { icon: '👁️', text: 'Suivi personnalisé de chaque enfant' },
  { icon: '🏫', text: 'Classes à effectif réduit' },
  { icon: '💻', text: 'Éducation numérique et robotique' },
  { icon: '🎭', text: 'Activités culturelles et sportives' },
  { icon: '🔒', text: 'Environnement sécurisé et discipliné' },
  { icon: '📹', text: 'Caméras de surveillance 24h/24 pour la sécurité des enfants' },
]

const nosOffres = [
  { icon: '🚌', text: 'Transport scolaire sécurisé et ponctuel' },
  { icon: '🍽️', text: 'Cantine scolaire équilibrée et hygiénique' },
  { icon: '🎵', text: 'Activités parascolaires : Sport, Théâtre, Robotique, Musique, Arts…' },
  { icon: '🧸', text: 'Garderie après l\'école pour les parents actifs (jusqu\'à 17h)' },
]

const nosObjectifs = [
  'Développer le leadership et la confiance en soi',
  'Encourager la créativité et l\'esprit d\'équipe',
  'Former des enfants bilingues, indépendants et responsables',
  'Préparer les enfants au monde numérique et aux défis de demain',
]

const valeurs = [
  { icon: '👑', label: 'Leadership & Confiance' },
  { icon: '📚', label: 'Excellence Académique' },
  { icon: '🌍', label: 'Ouverture au Monde' },
  { icon: '🖥️', label: 'Maîtrise du Numérique' },
  { icon: '🛡️', label: 'Sécurité 24h/24 — Caméras de Surveillance' },
]

const infirmerie = [
  'Infirmière qualifiée et expérimentée',
  'Soins et première secours en cas de besoin',
  'Suivi de la santé des élèves',
  'Interventions rapides et sécurisantes',
]

/* ── Sub-components ── */

function BackButton({ onNavigate }) {
  return (
    <button className="ac-back" onClick={() => onNavigate('home')}>
      ← Retour à l'accueil
    </button>
  )
}

function AcademyHero() {
  return (
    <div className="ac-hero">
      
      <div className="ac-hero__right">
        <p className="ac-hero__quote">« ÉLEVEZ VOS ENFANTS AU RANG DE <span>LEADERS</span> »</p>
        <h1 className="ac-hero__title">
          GROUPE SCOLAIRE<br />BILINGUE PANAFRICAIN<br />
          <span className="ac-hero__brand">Les <em>leaders</em></span>
        </h1>
        <p className="ac-hero__sub">FORMER AUJOURD'HUI LES LEADERS AFRICAINS DE DEMAIN</p>
      </div>
    </div>
  )
}

function AcademyFlyer()
{
  return (
    <div className = "ac-flyer">
        <img 
        src="/images/logo-school.jpg" 
        alt="Bannière" 
        className="hero__bg-img" 

        /> 
    </div>
  )
}

function AcademyTagline() {
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

function AcademyBanner() {
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

function AcademyGrid() {
  return (
    <div className="ac-grid">
      {/* Colonne 1 — Pourquoi nous choisir */}
      <div className="ac-col ac-col--dark">
        <h3 className="ac-col__title ac-col__title--green">POURQUOI NOUS CHOISIR ?</h3>
        <ul className="ac-list">
          {pourquoiNousChoisir.map((item, i) => (
            <li key={i} className="ac-list__item">
              <span className="ac-list__icon">{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        {/* Infirmerie */}
        <div className="ac-infirmerie">
          <h4 className="ac-infirmerie__title">🏥 INFIRMERIE SCOLAIRE<br /><small>AU SECOURS DES ENFANTS</small></h4>
          <ul className="ac-infirmerie__list">
            {infirmerie.map((it, i) => (
              <li key={i}>✅ {it}</li>
            ))}
          </ul>
          <p className="ac-infirmerie__note">La santé et le bien-être de votre enfant sont notre priorité. ➕</p>
        </div>
      </div>

      {/* Colonne 2 — Offres + Témoignage + Inscription */}
      <div className="ac-col ac-col--mid">
        <h3 className="ac-col__title">NOS OFFRES</h3>
        <ul className="ac-offres">
          {nosOffres.map((o, i) => (
            <li key={i} className="ac-offres__item">
              <span className="ac-offres__icon">{o.icon}</span>
              <span>{o.text}</span>
            </li>
          ))}
        </ul>

        <div className="ac-temoignage">
          <h4 className="ac-temoignage__title">⭐ CE QUE DISENT NOS PARENTS</h4>
          <blockquote className="ac-temoignage__quote">
            "Mes enfants sont plus épanouis. Ils parlent anglais avec aisance et ont gagné en confiance…"
          </blockquote>
          <cite className="ac-temoignage__author">— M. BRIA DOMINIQUE. Yaoundé</cite>
        </div>

        <div className="ac-inscription">
          <p className="ac-inscription__cta">📢 PLACES LIMITÉES !<br /><strong>INSCRIPTIONS OUVERTES</strong></p>
          <p className="ac-inscription__year">RENTRÉE SCOLAIRE 2026-2027</p>
          <p className="ac-inscription__detail">Inscriptions open Back-to-school 2026-2027</p>
          <p className="ac-inscription__niveaux">Maternelle • Primaire</p>
          <p className="ac-inscription__note">Nombre de places limité.</p>
          <p className="ac-inscription__cta2">Réservez la place de votre enfant dès aujourd'hui !</p>
        </div>
      </div>

      {/* Colonne 3 — Objectifs */}
      <div className="ac-col ac-col--dark">
        <h3 className="ac-col__title ac-col__title--gold">NOS OBJECTIFS</h3>
        <ul className="ac-objectifs">
          {nosObjectifs.map((obj, i) => (
            <li key={i} className="ac-objectifs__item">
              <span className="ac-objectifs__check">✓</span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>

        <div className="ac-qr-box">
          <p className="ac-qr-box__title">SCANNEZ POUR<br />NOUS CONTACTER<br />DIRECTEMENT !</p>
          <div className="ac-qr-box__placeholder">
            <span>QR</span>
            <span>Code</span>
          </div>
          <p className="ac-qr-box__note">Rejoignez-nous sur WhatsApp</p>
        </div>
      </div>
    </div>
  )
}

function AcademyFooterPhotos() {
  return (
    <div className="ac-photos">
      <div className="ac-photo ac-photo--bus">🚌 Transport</div>
      <div className="ac-photo ac-photo--class">📖 En classe</div>
      <div className="ac-photo ac-photo--sport">⚽ Sport</div>
      <div className="ac-photo ac-photo--art">🎨 Arts</div>
    </div>
  )
}


/* ── Main page ── */
function AcademyPage({ onNavigate }) {
  return (
    <section className="ac-page">
      <div className="ac-page__inner">
        <BackButton onNavigate={onNavigate} />
        <AcademyHero />
        <AcademyFlyer />
        <AcademyTagline />
        <AcademyBanner />
        <AcademyGrid />
        <AcademyFooterPhotos />
      </div>
    </section>
  )
}

export default AcademyPage
