import React, { useState } from 'react'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import SocialBar from './components/SocialBar.jsx'
import Footer from './components/Footer.jsx'
import AcademyPage from './pages/AcademyPage.jsx'
import QuincailleriePage from './pages/QuincailleryPage.jsx'
import BtpPage from './pages/BtpPage.jsx'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigate = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* ── En-tête commun ── */}
      <Hero
        bgImage={currentPage === 'academy' ? '/images/logo-school.jpg' : currentPage === 'btp' ? '/images/btpPresentation.jpg' : '/images/team.jpg'}
        logoImg={currentPage === 'academy' ? '/images/logo-accademy.jpg' : '/images/logo-vp.jpg'}
        title={currentPage === 'academy' ? 'GROUPE SCOLAIRE BILINGUE PANAFRICAIN LES LEADERS' : "L'EXCELLENCE AU SERVICE DE VOS BESOINS"}
      />

      {/* ── Contenu variable selon la page ── */}
      {currentPage === 'home' && (
        <Services onNavigate={navigate} />
      )}

      {currentPage === 'academy' && (
        <AcademyPage onNavigate={navigate} />
      )}

      {currentPage === 'quincaillerie' && (
        <QuincailleriePage onNavigate={navigate} />
      )}
      
      {currentPage === 'btp' && (
        <BtpPage onNavigate={navigate} />
      )}

      {/* ── Pied de page commun ── */}
      <SocialBar />
      <Footer />
    </div>
  )
}

export default App

