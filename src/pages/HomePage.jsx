import React, { useState, useEffect } from 'react'
import {
  Phone,
  Star,
  Gift,
  MapPin,
  Send,
  Menu,
  Sun,
  Moon,
  Sparkles,
  Crown,
  Clock,
  Heart,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const LOGO_PATH = 'https://restaurant-bahtiyor.tj/assets/Logo%20Good-WLfg-rq7.webp'

const HomePage = () => {
  const { theme, toggleTheme } = useTheme()
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [floatingElements, setFloatingElements] = useState([])

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

  // Предзагрузка страницы меню
  const preloadMenu = () => {
    import('./MenuPage')
  }

  const menuItems = [
    {
      icon: Menu,
      label: 'НАШЕ МЕНЮ',
      subtitle: 'Смотреть блюда',
      description: 'Откройте для себя мир восточной кухни',
      link: '/menu',
      delay: 0,
      accent: '#C49A3C',
      badge: 'NEW',
    },
    {
      icon: Phone,
      label: 'ПОЗВОНИТЬ',
      subtitle: 'Бронь столов',
      description: 'Забронируйте столик за минуту',
      action: () => (window.location.href = 'tel:+998901234567'),
      delay: 80,
      accent: '#C49A3C',
      badge: '24/7',
    },
    {
      icon: Star,
      label: 'ОТЗЫВЫ',
      subtitle: 'Читать и оставить',
      description: 'Нас рекомендуют гости',
      action: () => console.log('Отзывы'),
      delay: 160,
      accent: '#C49A3C',
      badge: '4.9★',
    },
    {
      icon: Gift,
      label: 'КЕШБЭК',
      subtitle: 'Telegram Bot',
      description: 'Получайте бонусы с каждого заказа',
      action: () => window.open('https://t.me/baxtiyor_bot', '_blank'),
      delay: 240,
      accent: '#C49A3C',
      badge: '10%',
    },
    {
      icon: MapPin,
      label: 'ЛОКАЦИЯ',
      subtitle: 'Яндекс навигатор',
      description: 'Мы в самом центре города',
      action: () => window.open('https://yandex.ru/navi', '_blank'),
      delay: 320,
      accent: '#C49A3C',
      badge: '📍',
    },
    {
      icon: Send,
      label: 'НАПИШИТЕ НАМ',
      subtitle: 'Telegram',
      description: 'Ответим на все вопросы',
      action: () => window.open('https://t.me/baxtiyor_restaurant', '_blank'),
      delay: 400,
      accent: '#C49A3C',
      badge: '⚡',
    },
  ]

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
        {/* МОБИЛЬНАЯ ВЕРСИЯ — на всю ширину */}
        <div className='lg:hidden w-full h-full flex flex-col px-4 py-3 overflow-y-auto'>
          {/* Header */}
          <div
            className={`flex items-center justify-between mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
            <div
              className='w-13 h-13 rounded-xl overflow-hidden flex-shrink-0 relative'
              style={{
                boxShadow: 'var(--shadow-gold)',
                border: '1.5px solid var(--accent-gold)',
                padding: '2px',
                background: 'var(--bg-card)',
              }}
            >
              <img
                src={LOGO_PATH}
                alt='Бахтиёр'
                className='w-full h-full object-cover rounded-lg'
              />
            </div>

            <div className='text-center flex-1'>
              <h1
                className='text-xl font-serif font-bold tracking-tight'
                style={{
                  background:
                    'linear-gradient(135deg, var(--text-primary) 0%, var(--accent-gold) 50%, var(--text-secondary) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                BAXTIYOR
              </h1>
              <div className='flex items-center justify-center gap-2'>
                <span
                  className='text-[8px] tracking-[.25em] font-semibold'
                  style={{ color: 'var(--accent-gold)' }}
                >
                  RESTAURANT
                </span>
                <span className='text-[6px]' style={{ color: 'var(--accent-gold)', opacity: 0.6 }}>
                  ✦
                </span>
                <span
                  className='text-[8px] tracking-[.25em] font-semibold'
                  style={{ color: 'var(--accent-gold)' }}
                >
                  РЕСТОРАН
                </span>
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className='w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0'
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
                Восточное гостеприимство и уют
              </p>
            </div>
          </div>

          {/* Кнопки для мобильной */}
          <div className='flex-1 flex flex-col justify-center'>
            <div className='space-y-2'>
              {menuItems.map((item, index) => (
                <MobileCard
                  key={index}
                  item={item}
                  index={index}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                  isVisible={isVisible}
                  preloadMenu={preloadMenu}
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

        {/* ДЕСКТОПНАЯ ВЕРСИЯ — необычный макет */}
        <div className='hidden lg:flex w-full h-full max-w-7xl mx-auto px-8 py-6'>
          {/* Левая колонка — Логотип и описание */}
          <div className='w-1/3 flex flex-col justify-center pr-8'>
            <div
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            >
              {/* Логотип крупный */}
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
                className='text-5xl font-serif font-bold text-center mb-4'
                style={{
                  background:
                    'linear-gradient(135deg, var(--text-primary) 0%, var(--accent-gold) 50%, var(--text-secondary) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'shimmer 3s ease-in-out infinite',
                }}
              >
                BAXTIYOR
              </h1>

              <div className='flex items-center justify-center gap-3 mb-6'>
                <span
                  className='text-xs tracking-[.3em] font-semibold'
                  style={{ color: 'var(--accent-gold)' }}
                >
                  RESTAURANT
                </span>
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
                  РЕСТОРАН
                </span>
              </div>

              {/* Описание с иконками */}
              <div className='space-y-4'>
                <div
                  className='group flex items-center gap-3 p-3 rounded-xl transition-all duration-500 cursor-pointer hover:scale-[1.02]'
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    animation: 'gentleFloat 4s ease-in-out infinite',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--hover-bg)'
                    e.currentTarget.style.borderColor = 'var(--accent-gold)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-gold)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-card)'
                    e.currentTarget.style.borderColor = 'var(--border-color)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <Crown
                    size={20}
                    className='transition-all duration-500 group-hover:scale-110'
                    style={{ color: 'var(--accent-gold)' }}
                  />
                  <span
                    className='transition-all duration-500 group-hover:translate-x-1'
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Восточное гостеприимство
                  </span>
                </div>

                <div
                  className='group flex items-center gap-3 p-3 rounded-xl transition-all duration-500 cursor-pointer hover:scale-[1.02]'
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    animation: 'gentleFloat 4s ease-in-out infinite',
                    animationDelay: '1s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--hover-bg)'
                    e.currentTarget.style.borderColor = 'var(--accent-gold)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-gold)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-card)'
                    e.currentTarget.style.borderColor = 'var(--border-color)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <Heart
                    size={20}
                    className='transition-all duration-500 group-hover:scale-110'
                    style={{
                      color: 'var(--accent-gold)',
                      animation: 'heartbeat 2s ease-in-out infinite',
                    }}
                  />
                  <span
                    className='transition-all duration-500 group-hover:translate-x-1'
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Уютная атмосфера
                  </span>
                </div>

                <div
                  className='group flex items-center gap-3 p-3 rounded-xl transition-all duration-500 cursor-pointer hover:scale-[1.02]'
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    animation: 'gentleFloat 4s ease-in-out infinite',
                    animationDelay: '2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--hover-bg)'
                    e.currentTarget.style.borderColor = 'var(--accent-gold)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-gold)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-card)'
                    e.currentTarget.style.borderColor = 'var(--border-color)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <Clock
                    size={20}
                    className='transition-all duration-500 group-hover:scale-110'
                    style={{ color: 'var(--accent-gold)' }}
                  />
                  <span
                    className='transition-all duration-500 group-hover:translate-x-1'
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Свежие продукты
                  </span>
                </div>
              </div>

              {/* Переключатель темы */}
              <button
                onClick={toggleTheme}
                className='mt-8 mx-auto w-12 h-12 rounded-xl flex items-center justify-center'
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

          {/* Правая колонка — Категории в два ряда */}
          <div className='w-2/3 flex items-center pl-8'>
            <div
              className={`w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <div className='grid grid-cols-2 gap-4'>
                {menuItems.map((item, index) => (
                  <DesktopCard
                    key={index}
                    item={item}
                    index={index}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                    preloadMenu={preloadMenu}
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
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10% { transform: scale(1.1); }
          20% { transform: scale(1); }
          30% { transform: scale(1.05); }
          40% { transform: scale(1); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: var(--border-color); box-shadow: var(--shadow-md); }
          50% { border-color: var(--accent-gold); box-shadow: var(--shadow-gold); }
        }
      `}</style>
    </div>
  )
}

// Компонент карточки для мобильной версии
const MobileCard = ({ item, index, hoveredIndex, setHoveredIndex, isVisible, preloadMenu }) => {
  const buttonStyles = {
    backgroundColor: 'var(--bg-card)',
    borderColor: 'var(--border-color)',
    borderWidth: '1px',
    borderStyle: 'solid',
    boxShadow: 'var(--shadow-md)',
    transitionDelay: `${item.delay}ms`,
    transform: hoveredIndex === index ? 'scale(1.02) translateY(-4px)' : 'scale(1) translateY(0)',
    animation: 'borderGlow 4s ease-in-out infinite',
  }

  const content = (
    <>
      {/* Фоновый градиент — ярче при hover */}
      <div
        className='absolute inset-0 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-700'
        style={{ background: 'linear-gradient(135deg, var(--accent-gold) 0%, transparent 100%)' }}
      />

      {/* Золотая полоска слева — ярче и шире при hover */}
      <div
        className='absolute left-0 top-0 bottom-0 transition-all duration-500'
        style={{
          backgroundColor: 'var(--accent-gold)',
          width: hoveredIndex === index ? '4px' : '2px',
          opacity: hoveredIndex === index ? 1 : 0.2,
        }}
      />

      {/* Золотой блик сверху при hover */}
      <div
        className='absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-all duration-500'
        style={{ background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)' }}
      />

      {/* Золотой блик снизу при hover */}
      <div
        className='absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-all duration-500'
        style={{ background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)' }}
      />

      <div className='flex items-center gap-4 relative z-10'>
        {/* Иконка — увеличивается и меняет цвет */}
        <div
          className='transition-all duration-500'
          style={{
            color: hoveredIndex === index ? 'var(--accent-gold)' : 'var(--icon-color)',
            animation: 'pulse 3s ease-in-out infinite',
            transform: hoveredIndex === index ? 'scale(1.2) rotate(3deg)' : 'scale(1) rotate(0deg)',
          }}
        >
          <item.icon size={hoveredIndex === index ? 20 : 18} strokeWidth={1.8} />
        </div>

        <div className='text-left'>
          <div className='flex items-center gap-2'>
            <span
              className='text-sm font-semibold tracking-wide transition-all duration-500'
              style={{
                color: hoveredIndex === index ? 'var(--accent-gold)' : 'var(--text-primary)',
                transform: hoveredIndex === index ? 'translateX(2px)' : 'translateX(0)',
              }}
            >
              {item.label}
            </span>
            {/* Бейдж — ярче при hover */}
            <span
              className='text-[9px] px-1.5 py-0.5 rounded-full transition-all duration-500'
              style={{
                background: hoveredIndex === index ? 'var(--accent-gold)' : 'var(--accent-gold)80',
                color: 'white',
                opacity: hoveredIndex === index ? 1 : 0.7,
                animation: 'pulse 2s ease-in-out infinite',
                transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              {item.badge}
            </span>
          </div>
          <div
            className='text-[11px] font-medium transition-all duration-500'
            style={{
              color: hoveredIndex === index ? 'var(--text-secondary)' : 'var(--text-muted)',
              transform: hoveredIndex === index ? 'translateX(2px)' : 'translateX(0)',
            }}
          >
            {item.subtitle}
          </div>
        </div>
      </div>

      {/* Стрелка — больше сдвиг и ярче */}
      <div
        className='relative z-10 transition-all duration-500'
        style={{
          color: hoveredIndex === index ? 'var(--accent-gold)' : 'var(--chevron-color)',
          transform: hoveredIndex === index ? 'translateX(8px) scale(1.2)' : 'translateX(0) scale(1)',
          opacity: hoveredIndex === index ? 1 : 0.4,
        }}
      >
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <path
            d='M6 12L10 8L6 4'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>

      {/* Золотой уголок справа снизу — ярче при hover */}
      <div
        className='absolute right-0 bottom-0 transition-all duration-500'
        style={{
          width: hoveredIndex === index ? '16px' : '8px',
          height: hoveredIndex === index ? '16px' : '8px',
          borderRight: '2px solid var(--accent-gold)',
          borderBottom: '2px solid var(--accent-gold)',
          opacity: hoveredIndex === index ? 0.6 : 0.1,
          borderRadius: '0 0 12px 0',
        }}
      />
    </>
  )

  // Если есть link, используем Link
  if (item.link) {
    return (
      <Link
        to={item.link}
        className={`w-full flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-500 group relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={buttonStyles}
        onMouseEnter={() => {
          setHoveredIndex(index)
          preloadMenu()
        }}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      onClick={item.action}
      className={`w-full flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-500 group relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={buttonStyles}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {content}
    </button>
  )
}

// Компонент карточки для десктопной версии
const DesktopCard = ({ item, index, hoveredIndex, setHoveredIndex, preloadMenu }) => {
  const buttonStyles = {
    backgroundColor: 'var(--bg-card)',
    borderColor: hoveredIndex === index ? 'var(--accent-gold)' : 'var(--border-color)',
    borderWidth: '1px',
    borderStyle: 'solid',
    boxShadow: hoveredIndex === index ? 'var(--shadow-gold)' : 'var(--shadow-md)',
    transform: hoveredIndex === index ? 'scale(1.05) translateY(-8px)' : 'scale(1) translateY(0)',
    animation: `gentleFloat ${5 + index}s ease-in-out infinite`,
    animationDelay: `${index * 0.2}s`,
  }

  const content = (
    <>
      {/* Вращающийся градиент — быстрее при hover */}
      <div
        className='absolute inset-0 transition-all duration-700'
        style={{
          background: 'conic-gradient(from 0deg, transparent, var(--accent-gold), transparent)',
          opacity: hoveredIndex === index ? 0.08 : 0.03,
          animation: 'rotateSlow 20s linear infinite',
          animationDuration: hoveredIndex === index ? '8s' : '20s',
        }}
      />

      {/* Золотая рамка — ярче при hover */}
      <div
        className='absolute inset-0 rounded-2xl transition-all duration-500'
        style={{
          boxShadow:
            hoveredIndex === index
              ? 'inset 0 0 0 2px var(--accent-gold), 0 0 30px var(--accent-gold)'
              : 'none',
          opacity: hoveredIndex === index ? 1 : 0,
        }}
      />

      {/* Золотой блик сверху */}
      <div
        className='absolute top-0 left-0 right-0 h-1 transition-all duration-500'
        style={{
          background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)',
          opacity: hoveredIndex === index ? 1 : 0,
        }}
      />

      <div className='relative z-10'>
        {/* Иконка с бейджем */}
        <div className='flex items-start justify-between mb-4'>
          <div
            className='p-3 rounded-xl transition-all duration-500'
            style={{
              backgroundColor: hoveredIndex === index ? 'var(--accent-gold)30' : 'transparent',
              transform: hoveredIndex === index ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
              animation: 'pulse 3s ease-in-out infinite',
            }}
          >
            <item.icon
              size={hoveredIndex === index ? 32 : 28}
              strokeWidth={1.5}
              style={{ color: hoveredIndex === index ? 'var(--accent-gold)' : 'var(--icon-color)' }}
            />
          </div>
          <span
            className='text-xs px-2 py-1 rounded-full font-bold transition-all duration-500'
            style={{
              background: hoveredIndex === index ? 'var(--accent-gold)' : 'var(--accent-gold)80',
              color: 'white',
              transform: hoveredIndex === index ? 'scale(1.15)' : 'scale(1)',
              animation: 'heartbeat 3s ease-in-out infinite',
              boxShadow: hoveredIndex === index ? '0 4px 12px var(--accent-gold)' : 'none',
            }}
          >
            {item.badge}
          </span>
        </div>

        {/* Текст */}
        <h3
          className='text-lg font-bold mb-2 transition-all duration-500'
          style={{
            color: hoveredIndex === index ? 'var(--accent-gold)' : 'var(--text-primary)',
            transform: hoveredIndex === index ? 'translateX(4px)' : 'translateX(0)',
          }}
        >
          {item.label}
        </h3>
        <p
          className='text-sm font-medium mb-1 transition-all duration-500'
          style={{
            color: 'var(--text-muted)',
            transform: hoveredIndex === index ? 'translateX(4px)' : 'translateX(0)',
          }}
        >
          {item.subtitle}
        </p>
        <p
          className='text-xs transition-all duration-500'
          style={{
            color: 'var(--text-muted)',
            opacity: hoveredIndex === index ? 1 : 0.7,
            transform: hoveredIndex === index ? 'translateX(4px)' : 'translateX(0)',
          }}
        >
          {item.description}
        </p>

        {/* Стрелка снизу — больше сдвиг */}
        <div
          className='absolute bottom-4 right-4 transition-all duration-500'
          style={{
            transform:
              hoveredIndex === index ? 'translateX(8px) scale(1.2)' : 'translateX(0) scale(1)',
          }}
        >
          <svg width='20' height='20' viewBox='0 0 16 16' fill='none'>
            <path
              d='M6 12L10 8L6 4'
              stroke={hoveredIndex === index ? 'var(--accent-gold)' : 'var(--chevron-color)'}
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
    </>
  )

  // Если есть link, используем Link
  if (item.link) {
    return (
      <Link
        to={item.link}
        className='group relative p-6 rounded-2xl transition-all duration-500 overflow-hidden h-full'
        style={buttonStyles}
        onMouseEnter={() => {
          setHoveredIndex(index)
          preloadMenu()
        }}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      onClick={item.action}
      className='group relative p-6 rounded-2xl transition-all duration-500 overflow-hidden h-full'
      style={buttonStyles}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {content}
    </button>
  )
}

export default HomePage