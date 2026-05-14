import React from 'react'
import './SocialBar.css'

// SVG icons inline to avoid external dependencies
const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" width="36" height="36">
    <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.341.63 4.537 1.727 6.432L2.667 29.333l7.12-1.692A13.267 13.267 0 0016.003 29.333c7.366 0 13.334-5.97 13.334-13.333S23.369 2.667 16.003 2.667zm0 24c-2.165 0-4.18-.617-5.882-1.68l-.42-.25-4.223 1.004 1.055-4.105-.274-.432A10.626 10.626 0 015.333 16c0-5.88 4.787-10.667 10.67-10.667C21.88 5.333 26.667 10.12 26.667 16S21.88 26.667 16.003 26.667zm5.84-7.986c-.32-.16-1.893-.933-2.186-1.04-.294-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.254-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.847-1.591-1.893-1.777-2.213-.187-.32-.02-.494.14-.653.145-.143.32-.374.48-.56.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.627-.52-.54-.72-.55l-.613-.013c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.306.16.213 2.253 3.44 5.466 4.827.764.33 1.36.527 1.824.674.766.24 1.464.206 2.015.125.615-.09 1.893-.773 2.16-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" width="36" height="36">
    <path d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333S2.667 8.636 2.667 16c0 6.656 4.876 12.174 11.25 13.175V19.958H10.25V16h3.667v-3.183c0-3.617 2.155-5.617 5.454-5.617 1.58 0 3.23.282 3.23.282V11h-1.82c-1.793 0-2.348 1.112-2.348 2.253V16h3.996l-.639 3.958H18.433v9.217C24.457 28.174 29.333 22.656 29.333 16z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" width="36" height="36">
    <path d="M27.2 7.467a7.733 7.733 0 01-7.733-7.734h-4.8v21.867a3.2 3.2 0 11-3.2-3.2 3.253 3.253 0 01.8.106V13.6a8 8 0 100 16 8 8 0 008-8V9.6a12.453 12.453 0 007.733 2.667V7.467h-0.8z"/>
  </svg>
)

const socials = [
  {
    id: 'whatsapp',
    href: 'https://wa.me/VOTRE_NUMERO', // à compléter
    icon: <WhatsAppIcon />,
    label: 'WhatsApp',
    color: '#25D366',
    bgHover: 'rgba(37,211,102,0.12)',
  },
  {
    id: 'facebook',
    href: 'https://facebook.com/VOTRE_PAGE', // à compléter
    icon: <FacebookIcon />,
    label: 'Facebook',
    color: '#1877F2',
    bgHover: 'rgba(24,119,242,0.12)',
  },
  {
    id: 'tiktok',
    href: 'https://tiktok.com/@VOTRE_COMPTE', // à compléter
    icon: <TikTokIcon />,
    label: 'TikTok',
    color: '#ffffff',
    bgHover: 'rgba(255,255,255,0.10)',
  },
]

function SocialBar() {
  return (
    <section className="social-bar">
      <div className="social-bar__inner">
        {socials.map((s) => (
          <a
            key={s.id}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label={s.label}
            style={{ '--s-color': s.color, '--s-bg': s.bgHover }}
          >
            <span className="social-btn__icon">{s.icon}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default SocialBar
