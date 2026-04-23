import React, { useState, useEffect } from 'react'
import { Sun, Moon, Sparkles, Phone, Copy, Check, MessageCircle, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa'

const LOGO_PATH = 'https://restaurant-bahtiyor.tj/assets/Logo%20Good-WLfg-rq7.webp'

const ContactPage = () => {
  const { theme, toggleTheme } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [floatingElements, setFloatingElements] = useState([])
  const [copiedPhone, setCopiedPhone] = useState(null)

  useEffect(() => {
    setIsVisible(true)
    setFloatingElements([
      { id: 1, x: '5%', y: '10%', delay: 0, size: 60 },
      { id: 2, x: '90%', y: '85%', delay: 2, size: 80 },
      { id: 3, x: '15%', y: '80%', delay: 4, size: 40 },
      { id: 4, x: '80%', y: '20%', delay: 1, size: 50 },
      { id: 5, x: '50%', y: '50%', delay: 3, size: 70 },
    ])
  }, [])

  const branches = [
    {
      id: 1,
      name: 'Худжанд',
      address: 'Аминчон Шукухи 31б',
      phone: '93 888 24 24',
      phoneRaw: '+992938882424',
      instagram:
        'https://www.instagram.com/restaurant_bakhtier_khujand?igsh=cTkzM29mcWo0aWVl&utm_source=qr',
    },
    {
      id: 2,
      name: 'Худжанд',
      address: 'ул. Сырдаринский 8А',
      phone: '99 300 57 57',
      phoneRaw: '+992993005757',
      instagram:
        'https://www.instagram.com/restaurant_bakhtiyor_sirdaryo_?igsh=MWV4NGV0OWV3a2l3Yg%3D%3D',
    },
  ]

  const handleCopyPhone = (phone, id) => {
    navigator.clipboard?.writeText(phone)
    setCopiedPhone(id)
    setTimeout(() => setCopiedPhone(null), 2000)
  }

  const handleWhatsApp = (phoneRaw) => {
    window.open(`https://wa.me/${phoneRaw.replace(/[^0-9]/g, '')}`, '_blank')
  }

  const handleCall = (phoneRaw) => {
    window.location.href = `tel:${phoneRaw}`
  }

  const handleInstagram = (url) => {
    window.open(url, '_blank')
  }

  const handleSocial = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div
      className='h-screen flex flex-col transition-all duration-500 overflow-hidden relative'
      style={{ background: 'var(--bg-page-gradient)' }}
    >
      {/* Анимированные плавающие элементы (только для десктопа) */}
      {floatingElements.map((el) => (
        <div
          key={el.id}
          className='hidden lg:block absolute rounded-full pointer-events-none'
          style={{
            width: el.size,
            height: el.size,
            left: el.x,
            top: el.y,
            background: 'radial-gradient(circle, var(--accent-gold) 0%, transparent 70%)',
            opacity: 0.03,
            animation: `float ${8 + el.delay}s ease-in-out infinite`,
            animationDelay: `${el.delay}s`,
            filter: 'blur(20px)',
          }}
        />
      ))}

      {/* Мерцающие звёздочки на фоне */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='absolute rounded-full'
            style={{
              width: '2px',
              height: '2px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'var(--accent-gold)',
              opacity: 0.1 + Math.random() * 0.3,
              animation: `twinkle ${3 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className='flex-1 w-full h-full flex flex-col lg:flex-row overflow-hidden relative z-10'>
        {/* МОБИЛЬНАЯ ВЕРСИЯ */}
        <div className='lg:hidden w-full h-full flex flex-col px-4 py-3 overflow-y-auto'>
          {/* Header */}
          <div
            className={`flex items-center justify-between mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
            <Link
              to='/'
              className='p-2 rounded-lg transition-all hover:scale-105'
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
              }}
            >
              <svg width='18' height='18' viewBox='0 0 16 16' fill='none'>
                <path
                  d='M10 12L6 8L10 4'
                  stroke='var(--accent-gold)'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Link>

            <div className='text-center flex-1'>
              <h1 className='text-lg font-serif font-bold' style={{ color: 'var(--text-primary)' }}>
                НАПИШИТЕ НАМ
              </h1>
            </div>

            <button
              onClick={toggleTheme}
              className='w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0'
              style={{
                backgroundColor: 'var(--toggle-bg)',
                color: 'var(--toggle-text)',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border-color)',
              }}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>

          {/* Описание */}
          <div className={`text-center mt-2 mb-4 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div
              className='inline-block px-4 py-2 rounded-full'
              style={{
                background: 'linear-gradient(135deg, var(--bg-card) 0%, transparent 100%)',
                border: '1px solid var(--border-color)',
              }}
            >
              <p className='text-sm font-medium' style={{ color: 'var(--text-secondary)' }}>
                Свяжитесь с нами удобным способом
              </p>
            </div>
          </div>

          {/* Instagram аккаунты */}
          <div className='mb-4'>
            <h3 className='text-sm font-semibold mb-2' style={{ color: 'var(--text-primary)' }}>
              Instagram
            </h3>
            <div className='space-y-2'>
              {branches.map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => handleInstagram(branch.instagram)}
                  className='w-full py-3 rounded-xl font-medium transition-all hover:scale-[1.01] flex items-center justify-center gap-2'
                  style={{
                    background:
                      'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                    color: 'white',
                  }}
                >
                  <FaInstagram size={18} />
                  {branch.address}
                </button>
              ))}
            </div>
          </div>

          {/* Карточки филиалов */}
          <div className='flex-1'>
            <h3 className='text-sm font-semibold mb-2' style={{ color: 'var(--text-primary)' }}>
              Телефоны и WhatsApp
            </h3>
            <div className='space-y-3'>
              {branches.map((branch, index) => (
                <ContactCard
                  key={branch.id}
                  branch={branch}
                  index={index}
                  isVisible={isVisible}
                  copiedPhone={copiedPhone}
                  onCopy={handleCopyPhone}
                  onCall={handleCall}
                  onWhatsApp={handleWhatsApp}
                />
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className={`text-center pt-3 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p
              className='text-[9px] uppercase tracking-[.35em] font-medium'
              style={{ color: 'var(--accent-gold)', opacity: 0.4 }}
            >
              #БАХТИЁР
            </p>
          </div>
        </div>

        {/* ДЕСКТОПНАЯ ВЕРСИЯ */}
        <div className='hidden lg:flex w-full h-full max-w-7xl mx-auto px-8 py-6'>
          {/* Левая колонка — Логотип и информация */}
          <div className='w-1/3 flex flex-col justify-center pr-8'>
            <div
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            >
              {/* Логотип */}
              <div className='relative mb-8 group'>
                <div
                  className='absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl'
                  style={{
                    background: 'radial-gradient(circle, var(--accent-gold) 0%, transparent 70%)',
                  }}
                />
                <div
                  className='w-32 h-30 rounded-2xl overflow-hidden relative mx-auto'
                  style={{
                    boxShadow: 'var(--shadow-gold)',
                    border: '2px solid var(--accent-gold)',
                  }}
                >
                  <img src={LOGO_PATH} alt='Бахтиёр' className='w-full h-full object-cover' />
                  <div
                    className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000'
                    style={{ boxShadow: 'inset 0 0 30px var(--accent-gold)' }}
                  />
                </div>
              </div>

              {/* Название */}
              <h1
                className='text-4xl font-serif font-bold text-center mb-4'
                style={{
                  background:
                    'linear-gradient(135deg, var(--text-primary) 0%, var(--accent-gold) 50%, var(--text-secondary) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'shimmer 3s ease-in-out infinite',
                }}
              >
                НАПИШИТЕ НАМ
              </h1>

              <div className='flex items-center justify-center gap-3 mb-6'>
                <Sparkles
                  size={12}
                  style={{
                    color: 'var(--accent-gold)',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
                <span
                  className='text-xs tracking-[.3em] font-semibold'
                  style={{ color: 'var(--accent-gold)' }}
                >
                  СВЯЗЬ С НАМИ
                </span>
                <Sparkles
                  size={12}
                  style={{
                    color: 'var(--accent-gold)',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
              </div>

              {/* Instagram */}
              <div className='space-y-3 mb-6'>
                <h3 className='text-sm font-semibold mb-2' style={{ color: 'var(--text-primary)' }}>
                  Instagram
                </h3>
                {branches.map((branch) => (
                  <button
                    key={branch.id}
                    onClick={() => handleInstagram(branch.instagram)}
                    className='w-full py-3 rounded-xl font-medium transition-all hover:scale-[1.02] flex items-center justify-center gap-2'
                    style={{
                      background:
                        'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                      color: 'white',
                    }}
                  >
                    <FaInstagram size={20} />
                    {branch.address}
                  </button>
                ))}
              </div>

              {/* Кнопка назад */}
              <Link
                to='/'
                className='mt-4 mx-auto w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:scale-105'
                style={{
                  backgroundColor: 'var(--toggle-bg)',
                  color: 'var(--toggle-text)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <svg width='20' height='20' viewBox='0 0 16 16' fill='none'>
                  <path
                    d='M10 12L6 8L10 4'
                    stroke='currentColor'
                    strokeWidth='1.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </Link>

              {/* Переключатель темы */}
              <button
                onClick={toggleTheme}
                className='mt-4 mx-auto w-12 h-12 rounded-xl flex items-center justify-center'
                style={{
                  backgroundColor: 'var(--toggle-bg)',
                  color: 'var(--toggle-text)',
                  border: '1px solid var(--border-color)',
                }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Правая колонка — Карточки филиалов */}
          <div className='w-2/3 flex items-center pl-8'>
            <div
              className={`w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <h3 className='text-lg font-semibold mb-4' style={{ color: 'var(--text-primary)' }}>
                Телефоны и WhatsApp
              </h3>
              <div className='grid grid-cols-1 gap-5'>
                {branches.map((branch, index) => (
                  <DesktopContactCard
                    key={branch.id}
                    branch={branch}
                    index={index}
                    copiedPhone={copiedPhone}
                    onCopy={handleCopyPhone}
                    onCall={handleCall}
                    onWhatsApp={handleWhatsApp}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS-анимации */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        @keyframes shimmer {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  )
}

// Карточка контакта (мобильная)
const ContactCard = ({ branch, index, isVisible, copiedPhone, onCopy, onCall, onWhatsApp }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative w-full rounded-xl overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        boxShadow: isHovered ? 'var(--shadow-gold)' : 'var(--shadow-md)',
        transform: isHovered ? 'scale(1.01)' : 'scale(1)',
        willChange: 'transform',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='p-5'>
        <h3 className='font-bold text-lg mb-1' style={{ color: 'var(--text-primary)' }}>
          {branch.address}
        </h3>
        <p className='text-xs opacity-70 mb-4' style={{ color: 'var(--text-muted)' }}>
          {branch.name}
        </p>

        <div
          className='flex items-center justify-between mb-4 p-3 rounded-lg'
          style={{ background: 'var(--hover-bg)' }}
        >
          <div className='flex items-center gap-2'>
            <Phone size={16} style={{ color: 'var(--accent-gold)' }} />
            <span className='font-bold text-lg' style={{ color: 'var(--text-primary)' }}>
              {branch.phone}
            </span>
          </div>
          <button
            onClick={() => onCopy(branch.phone, branch.id)}
            className='p-2 rounded-lg transition-all hover:scale-105'
            style={{ background: 'var(--bg-card)' }}
          >
            {copiedPhone === branch.id ? (
              <Check size={16} style={{ color: '#22c55e' }} />
            ) : (
              <Copy size={16} style={{ color: 'var(--text-muted)' }} />
            )}
          </button>
        </div>

        <div className='flex gap-2'>
          <button
            onClick={() => onCall(branch.phoneRaw)}
            className='flex-1 py-3 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] flex items-center justify-center gap-2'
            style={{ background: 'var(--accent-gold)' }}
          >
            <Phone size={16} />
            Позвонить
          </button>
          <button
            onClick={() => onWhatsApp(branch.phoneRaw)}
            className='flex-1 py-3 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] flex items-center justify-center gap-2'
            style={{ background: '#25D366' }}
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}

// Карточка контакта (десктоп)
const DesktopContactCard = ({ branch, index, copiedPhone, onCopy, onCall, onWhatsApp }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className='relative rounded-2xl overflow-hidden transition-all duration-500'
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        boxShadow: isHovered ? 'var(--shadow-gold)' : 'var(--shadow-md)',
        transform: isHovered ? 'scale(1.02) translateY(-4px)' : 'scale(1) translateY(0)',
        animation: `gentleFloat ${5 + index}s ease-in-out infinite`,
        animationDelay: `${index * 0.2}s`,
        willChange: 'transform',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='p-6'>
        <h3 className='font-bold text-xl mb-2' style={{ color: 'var(--text-primary)' }}>
          {branch.address}
        </h3>
        <p className='text-sm mb-4 opacity-70' style={{ color: 'var(--text-muted)' }}>
          {branch.name}
        </p>

        <div
          className='flex items-center justify-between mb-4 p-4 rounded-xl'
          style={{ background: 'var(--hover-bg)' }}
        >
          <div className='flex items-center gap-3'>
            <Phone size={20} style={{ color: 'var(--accent-gold)' }} />
            <span className='font-bold text-2xl' style={{ color: 'var(--text-primary)' }}>
              {branch.phone}
            </span>
          </div>
          <button
            onClick={() => onCopy(branch.phone, branch.id)}
            className='p-2.5 rounded-lg transition-all hover:scale-105'
            style={{ background: 'var(--bg-card)' }}
          >
            {copiedPhone === branch.id ? (
              <Check size={18} style={{ color: '#22c55e' }} />
            ) : (
              <Copy size={18} style={{ color: 'var(--text-muted)' }} />
            )}
          </button>
        </div>

        <div className='flex gap-3'>
          <button
            onClick={() => onCall(branch.phoneRaw)}
            className='flex-1 py-4 rounded-xl font-bold text-white transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-lg'
            style={{ background: 'var(--accent-gold)' }}
          >
            <Phone size={20} />
            Позвонить
          </button>
          <button
            onClick={() => onWhatsApp(branch.phoneRaw)}
            className='flex-1 py-4 rounded-xl font-bold text-white transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-lg'
            style={{ background: '#25D366' }}
          >
            <FaWhatsapp size={22} />
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
