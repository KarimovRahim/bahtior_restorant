import React, { useState, useEffect, useRef } from 'react'
import {
  Phone,
  MapPin,
  Search,
  Sun,
  Moon,
  Clock,
  Star,
  ChevronRight,
  Plus,
  Minus,
  ShoppingBag,
  X,
  Heart,
  Info,
  Trash2,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiX,
  FiPlus as FiPlusIcon,
  FiMinus as FiMinusIcon,
  FiShoppingCart,
  FiCheck,
  FiClock as FiClockIcon,
  FiHeart as FiHeartIcon,
  FiInfo as FiInfoIcon,
} from 'react-icons/fi'
import { FaFire, FaLeaf, FaStar } from 'react-icons/fa'
import { GiChefToque } from 'react-icons/gi'
import { useTheme } from '../contexts/ThemeContext'
import { Link } from 'react-router-dom'

const LOGO_PATH = 'https://restaurant-bahtiyor.tj/assets/Logo%20Good-WLfg-rq7.webp'

// Категории с фоновыми изображениями
const categories = [
  {
    id: 1,
    name: 'Первые блюда',
    image:
      'https://cms.restaurant-bahtiyor.tj/media/category_images/%D0%B1%D0%BE%D1%80%D1%88-05-13%D1%81%D0%BC%D0%BD_1-17%D1%81%D0%BC%D0%BD.webp',
    count: 8,
  },
  {
    id: 2,
    name: 'Вторые блюда',
    image: 'https://cms.restaurant-bahtiyor.tj/media/category_images/IMG_8299_Xz2bnUN.webp',
    count: 24,
  },
  {
    id: 3,
    name: 'Салаты',
    image:
      'https://cms.restaurant-bahtiyor.tj/media/category_images/%D0%BA%D0%B0%D1%80%D0%B0%D0%BB%D0%B5%D0%B2%D0%B0_20%D1%81%D0%BC%D0%BD_1%D0%BF_180%D0%B3%D1%80.webp',
    count: 12,
  },
  {
    id: 4,
    name: 'Гарниры',
    image:
      'https://cms.restaurant-bahtiyor.tj/media/category_images/%D1%84%D1%80%D0%B8_1%D0%BF_15%D1%81%D0%BC%D0%BD_-_05_8%D1%81%D0%BC%D0%BD1_%D1%84%D0%B8%D1%80%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%83%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0_2%D1%81%D0%BC%D0%BD.webp',
    count: 6,
  },
  {
    id: 5,
    name: 'Шашлыки',
    image:
      'https://cms.restaurant-bahtiyor.tj/media/category_images/%D0%B0%D1%81%D1%81%D0%BE%D1%80%D1%82%D0%B8%D0%BC%D0%B5%D0%BD%D1%82_%D1%88%D0%B0%D1%88%D0%BB%D1%8B%D1%87%D0%BD%D1%8B%D0%B9_350%D1%81%D0%BC%D0%BD_10%D1%81%D0%B8%D1%85_10%D0%BD%D0%B0%D1%84%D0%B0%D1%80.webp',
    count: 15,
  },
  {
    id: 6,
    name: 'Десерты',
    image:
      'https://cms.restaurant-bahtiyor.tj/media/category_images/%D1%88%D0%BE%D0%BA%D0%BE%D0%BB%D0%B0%D0%B4%D0%BD%D1%8B%D0%B9_1%D0%BA%D1%83%D1%81%D0%BE%D0%BA_15%D1%81%D0%BC%D0%BD.webp',
    count: 10,
  },
  {
    id: 7,
    name: 'Напитки',
    image:
      'https://cms.restaurant-bahtiyor.tj/media/category_images/%D0%9D%D0%B0%D0%BF%D0%B8%D1%82%D0%BA%D0%B8.webp',
    count: 18,
  },
  {
    id: 8,
    name: 'Хлеб',
    image:
      'https://cms.restaurant-bahtiyor.tj/media/category_images/%D0%BD%D0%BE%D0%BD%D0%B8_%D1%84%D0%B0%D1%82%D0%B8%D1%80_1%D1%88%D1%82_7%D1%81%D0%BC%D0%BD_05_4%D1%81%D0%BC.webp',
    count: 5,
  },
]

// Расширенные данные блюд
const productsData = {
  1: [
    {
      id: 101,
      name: 'Борщ',
      description: 'С говядиной и сметаной',
      price: 280,
      weight: '350 г',
      calories: '320 ккал',
      ingredients: 'Говядина, свёкла, капуста, картофель, морковь, лук, томатная паста, сметана',
      image:
        'https://cms.restaurant-bahtiyor.tj/media/category_images/%D0%B1%D0%BE%D1%80%D1%88-05-13%D1%81%D0%BC%D0%BD_1-17%D1%81%D0%BC%D0%BD.webp',
    },
    {
      id: 102,
      name: 'Солянка',
      description: 'Мясная сборная',
      price: 320,
      weight: '380 г',
      calories: '410 ккал',
      ingredients:
        'Говядина, колбаса копчёная, ветчина, огурцы солёные, маслины, томатная паста, лимон, сметана',
      image:
        'https://cms.restaurant-bahtiyor.tj/media/category_images/%D0%B1%D0%BE%D1%80%D1%88-05-13%D1%81%D0%BC%D0%BD_1-17%D1%81%D0%BC%D0%BD.webp',
    },
    {
      id: 103,
      name: 'Лагман',
      description: 'Домашняя лапша с говядиной',
      price: 290,
      weight: '400 г',
      calories: '380 ккал',
      ingredients:
        'Говядина, лапша домашняя, лук, морковь, перец болгарский, томаты, чеснок, зелень',
      image: 'https://cms.restaurant-bahtiyor.tj/media/category_images/IMG_8299_Xz2bnUN.webp',
    },
    {
      id: 104,
      name: 'Шурпа',
      description: 'Наваристый бульон с бараниной',
      price: 310,
      weight: '450 г',
      calories: '350 ккал',
      ingredients: 'Баранина, картофель, морковь, лук, перец болгарский, томаты, зелень, специи',
      image: 'https://cms.restaurant-bahtiyor.tj/media/category_images/IMG_8299_Xz2bnUN.webp',
    },
  ],
  2: [
    {
      id: 201,
      name: 'Плов',
      description: 'Классический с бараниной',
      price: 350,
      weight: '400 г',
      calories: '520 ккал',
      ingredients: 'Рис девзира, баранина, морковь, лук, чеснок, зира, барбарис, масло хлопковое',
      image: 'https://cms.restaurant-bahtiyor.tj/media/category_images/IMG_8299_Xz2bnUN.webp',
    },
    {
      id: 202,
      name: 'Долма',
      description: 'В виноградных листьях',
      price: 300,
      weight: '300 г',
      calories: '290 ккал',
      ingredients: 'Фарш говяжий, рис, виноградные листья, лук, зелень, специи, соус сметанный',
      image:
        'https://cms.restaurant-bahtiyor.tj/media/category_images/%D0%BA%D0%B0%D1%80%D0%B0%D0%BB%D0%B5%D0%B2%D0%B0_20%D1%81%D0%BC%D0%BD_1%D0%BF_180%D0%B3%D1%80.webp',
    },
    {
      id: 203,
      name: 'Бефстроганов',
      description: 'С картофельным пюре',
      price: 380,
      weight: '350 г',
      calories: '480 ккал',
      ingredients:
        'Говяжья вырезка, сливки, лук, грибы шампиньоны, картофельное пюре, масло сливочное',
      image: 'https://cms.restaurant-bahtiyor.tj/media/category_images/IMG_8299_Xz2bnUN.webp',
    },
  ],
  3: [
    {
      id: 301,
      name: 'Цезарь',
      description: 'С курицей и пармезаном',
      price: 240,
      weight: '280 г',
      calories: '310 ккал',
      ingredients: 'Куриное филе, салат айсберг, помидоры черри, пармезан, гренки, соус цезарь',
      image:
        'https://cms.restaurant-bahtiyor.tj/media/category_images/%D0%BA%D0%B0%D1%80%D0%B0%D0%BB%D0%B5%D0%B2%D0%B0_20%D1%81%D0%BC%D0%BD_1%D0%BF_180%D0%B3%D1%80.webp',
    },
    {
      id: 302,
      name: 'Греческий',
      description: 'С фетой и оливками',
      price: 220,
      weight: '270 г',
      calories: '270 ккал',
      ingredients:
        'Помидоры, огурцы, перец болгарский, лук красный, оливки, фета, орегано, масло оливковое',
      image:
        'https://cms.restaurant-bahtiyor.tj/media/category_images/%D0%BA%D0%B0%D1%80%D0%B0%D0%BB%D0%B5%D0%B2%D0%B0_20%D1%81%D0%BC%D0%BD_1%D0%BF_180%D0%B3%D1%80.webp',
    },
  ],
  4: [
    {
      id: 401,
      name: 'Картофель фри',
      description: 'Хрустящий',
      price: 120,
      weight: '150 г',
      calories: '280 ккал',
      ingredients: 'Картофель, масло растительное, соль, специи, соус на выбор',
      image:
        'https://cms.restaurant-bahtiyor.tj/media/category_images/%D1%84%D1%80%D0%B8_1%D0%BF_15%D1%81%D0%BC%D0%BD_-_05_8%D1%81%D0%BC%D0%BD1_%D1%84%D0%B8%D1%80%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%83%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0_2%D1%81%D0%BC%D0%BD.webp',
    },
    {
      id: 402,
      name: 'Рис с овощами',
      description: 'Ароматный',
      price: 100,
      weight: '200 г',
      calories: '220 ккал',
      ingredients: 'Рис, морковь, горошек зелёный, кукуруза, лук, масло сливочное',
      image:
        'https://cms.restaurant-bahtiyor.tj/media/category_images/%D1%84%D1%80%D0%B8_1%D0%BF_15%D1%81%D0%BC%D0%BD_-_05_8%D1%81%D0%BC%D0%BD1_%D1%84%D0%B8%D1%80%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%83%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0_2%D1%81%D0%BC%D0%BD.webp',
    },
  ],
  5: [
    {
      id: 501,
      name: 'Шашлык из баранины',
      description: 'Маринованный с луком',
      price: 420,
      weight: '250 г',
      calories: '480 ккал',
      ingredients: 'Баранина, лук, уксус винный, специи кавказские, зелень, соус ткемали',
      image:
        'https://cms.restaurant-bahtiyor.tj/media/category_images/%D0%B0%D1%81%D1%81%D0%BE%D1%80%D1%82%D0%B8%D0%BC%D0%B5%D0%BD%D1%82_%D1%88%D0%B0%D1%88%D0%BB%D1%8B%D1%87%D0%BD%D1%8B%D0%B9_350%D1%81%D0%BC%D0%BD_10%D1%81%D0%B8%D1%85_10%D0%BD%D0%B0%D1%84%D0%B0%D1%80.webp',
    },
    {
      id: 502,
      name: 'Шашлык из курицы',
      description: 'Нежное филе',
      price: 340,
      weight: '220 г',
      calories: '320 ккал',
      ingredients: 'Куриное филе, кефир, лук, чеснок, паприка, зелень, соус чесночный',
      image:
        'https://cms.restaurant-bahtiyor.tj/media/category_images/%D0%B0%D1%81%D1%81%D0%BE%D1%80%D1%82%D0%B8%D0%BC%D0%B5%D0%BD%D1%82_%D1%88%D0%B0%D1%88%D0%BB%D1%8B%D1%87%D0%BD%D1%8B%D0%B9_350%D1%81%D0%BC%D0%BD_10%D1%81%D0%B8%D1%85_10%D0%BD%D0%B0%D1%84%D0%B0%D1%80.webp',
    },
    {
      id: 503,
      name: 'Люля-кебаб',
      description: 'Из рубленой говядины',
      price: 380,
      weight: '200 г',
      calories: '400 ккал',
      ingredients: 'Говядина рубленая, лук, сало курдючное, зира, кориандр, перец, зелень, лаваш',
      image:
        'https://cms.restaurant-bahtiyor.tj/media/category_images/%D0%B0%D1%81%D1%81%D0%BE%D1%80%D1%82%D0%B8%D0%BC%D0%B5%D0%BD%D1%82_%D1%88%D0%B0%D1%88%D0%BB%D1%8B%D1%87%D0%BD%D1%8B%D0%B9_350%D1%81%D0%BC%D0%BD_10%D1%81%D0%B8%D1%85_10%D0%BD%D0%B0%D1%84%D0%B0%D1%80.webp',
    },
  ],
  6: [
    {
      id: 601,
      name: 'Чизкейк',
      description: 'Классический',
      price: 180,
      weight: '150 г',
      calories: '390 ккал',
      ingredients:
        'Сыр сливочный, печенье песочное, масло сливочное, сахар, яйца, ваниль, соус ягодный',
      image:
        'https://cms.restaurant-bahtiyor.tj/media/category_images/%D1%88%D0%BE%D0%BA%D0%BE%D0%BB%D0%B0%D0%B4%D0%BD%D1%8B%D0%B9_1%D0%BA%D1%83%D1%81%D0%BE%D0%BA_15%D1%81%D0%BC%D0%BD.webp',
    },
    {
      id: 602,
      name: 'Тирамису',
      description: 'С кофейным вкусом',
      price: 200,
      weight: '140 г',
      calories: '360 ккал',
      ingredients: 'Маскарпоне, савоярди, кофе эспрессо, яйца, сахар, какао, ликёр амаретто',
      image:
        'https://cms.restaurant-bahtiyor.tj/media/category_images/%D1%88%D0%BE%D0%BA%D0%BE%D0%BB%D0%B0%D0%B4%D0%BD%D1%8B%D0%B9_1%D0%BA%D1%83%D1%81%D0%BE%D0%BA_15%D1%81%D0%BC%D0%BD.webp',
    },
  ],
  7: [
    {
      id: 701,
      name: 'Чай зелёный',
      description: '500 мл',
      price: 40,
      weight: '500 мл',
      calories: '5 ккал',
      ingredients: 'Чай зелёный листовой, вода, мята (опционально), лимон (опционально)',
      image:
        'https://cms.restaurant-bahtiyor.tj/media/category_images/%D0%9D%D0%B0%D0%BF%D0%B8%D1%82%D0%BA%D0%B8.webp',
    },
    {
      id: 702,
      name: 'Чай чёрный',
      description: '500 мл',
      price: 40,
      weight: '500 мл',
      calories: '5 ккал',
      ingredients: 'Чай чёрный листовой, вода, сахар (опционально), лимон (опционально)',
      image:
        'https://cms.restaurant-bahtiyor.tj/media/category_images/%D0%9D%D0%B0%D0%BF%D0%B8%D1%82%D0%BA%D0%B8.webp',
    },
    {
      id: 703,
      name: 'Сок апельсиновый',
      description: '250 мл',
      price: 70,
      weight: '250 мл',
      calories: '110 ккал',
      ingredients: 'Апельсины свежие, мякоть, лёд (опционально)',
      image:
        'https://cms.restaurant-bahtiyor.tj/media/category_images/%D0%9D%D0%B0%D0%BF%D0%B8%D1%82%D0%BA%D0%B8.webp',
    },
  ],
  8: [
    {
      id: 801,
      name: 'Лепёшка',
      description: 'Свежая',
      price: 30,
      weight: '200 г',
      calories: '480 ккал',
      ingredients: 'Мука пшеничная, вода, дрожжи, соль, кунжут',
      image:
        'https://cms.restaurant-bahtiyor.tj/media/category_images/%D0%BD%D0%BE%D0%BD%D0%B8_%D1%84%D0%B0%D1%82%D0%B8%D1%80_1%D1%88%D1%82_7%D1%81%D0%BC%D0%BD_05_4%D1%81%D0%BC.webp',
    },
    {
      id: 802,
      name: 'Самса',
      description: 'С бараниной',
      price: 80,
      weight: '120 г',
      calories: '310 ккал',
      ingredients: 'Мука, баранина, лук, жир курдючный, зира, перец, соль, кунжут',
      image:
        'https://cms.restaurant-bahtiyor.tj/media/category_images/%D0%BD%D0%BE%D0%BD%D0%B8_%D1%84%D0%B0%D1%82%D0%B8%D1%80_1%D1%88%D1%82_7%D1%81%D0%BC%D0%BD_05_4%D1%81%D0%BC.webp',
    },
  ],
}

const MenuPage = () => {
  const { theme, toggleTheme } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [cart, setCart] = useState({})
  const [showCart, setShowCart] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showProductModal, setShowProductModal] = useState(false)
  const [showOrderSuccess, setShowOrderSuccess] = useState(false)
  const [orderTotal, setOrderTotal] = useState(0)

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('baxtiyor_favorites')
    return saved ? JSON.parse(saved) : []
  })

  const topRef = useRef(null)
  const productsRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('baxtiyor_favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    const savedCart = localStorage.getItem('baxtiyor_cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('baxtiyor_cart', JSON.stringify(cart))
  }, [cart])

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  const addToCart = (productId) => {
    setCart((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }))
  }

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const newCart = { ...prev }
      if (newCart[productId] > 1) {
        newCart[productId]--
      } else {
        delete newCart[productId]
      }
      return newCart
    })
  }

  const removeItemCompletely = (productId) => {
    setCart((prev) => {
      const newCart = { ...prev }
      delete newCart[productId]
      return newCart
    })
  }

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const getCartCount = (productId) => cart[productId] || 0
  const getTotalItems = () => Object.values(cart).reduce((sum, count) => sum + count, 0)

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((sum, [productId, count]) => {
      const product = Object.values(productsData)
        .flat()
        .find((p) => p.id === parseInt(productId))
      return sum + (product?.price || 0) * count
    }, 0)
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setShowProductModal(true)
  }

  const handleCheckoutSuccess = () => {
    const total = getTotalPrice()
    setOrderTotal(total)
    setShowOrderSuccess(true)
    setShowCart(false)
    setCart({})
  }

  const restaurantInfo = {
    fullName: 'Ресторан Бахтиёр',
    description:
      'Погрузитесь в чарующую атмосферу Востока, где каждое блюдо рассказывает свою историю. Мы приглашаем вас на незабываемое кулинарное путешествие, полное ароматов и вкусов, которые перенесут вас в сердце Востока. От легендарного плова до нежных долмы, от хрустящих самсы до воздушных чебуреков — каждый наш рецепт тщательно сохраняет аутентичность и традиции.',
    hours: '12:00 - 02:00',
    locations: [
      { address: 'Аминчон Шукухи 31б', phone: '93 888 24 24' },
      { address: 'ул. Сырдаринский 8А', phone: '99 300 57 57' },
    ],
  }

  return (
    <div
      className='min-h-screen transition-all duration-500 overflow-x-hidden'
      style={{ background: 'var(--bg-page-gradient)' }}
    >
      <div className='fixed inset-0 pointer-events-none overflow-hidden'>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className='absolute rounded-full'
            style={{
              width: `${30 + Math.random() * 80}px`,
              height: `${30 + Math.random() * 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'radial-gradient(circle, var(--accent-gold) 0%, transparent 70%)',
              opacity: 0.02,
              animation: `float ${10 + Math.random() * 15}s ease-in-out infinite`,
              filter: 'blur(20px)',
            }}
          />
        ))}
      </div>

      <div className='relative z-10' ref={topRef}>
        {/* HEADER */}
        <div
          className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl'
          style={{
            background: 'var(--bg-card)',
            borderBottom: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div className='max-w-7xl mx-auto px-4 py-3'>
            <div className='flex items-center justify-between'>
              <Link to='/' className='flex items-center gap-3 group'>
                <div
                  className='w-10 h-10 rounded-xl overflow-hidden shrink-0 transition-all duration-500 group-hover:scale-105'
                  style={{
                    boxShadow: 'var(--shadow-gold)',
                    border: '1.5px solid var(--accent-gold)',
                  }}
                >
                  <img src={LOGO_PATH} alt='Бахтиёр' className='w-full h-full object-cover' />
                </div>
                <div className='hidden sm:block'>
                  <h2
                    className='text-sm font-serif font-bold'
                    style={{ color: 'var(--text-primary)' }}
                  >
                    BAXTIYOR
                  </h2>
                  <p className='text-[9px] tracking-wider' style={{ color: 'var(--accent-gold)' }}>
                    РЕСТОРАН
                  </p>
                </div>
              </Link>

              <div className='text-center'>
                <h1
                  className='text-lg font-serif font-bold'
                  style={{ color: 'var(--text-primary)' }}
                >
                  МЕНЮ
                </h1>
              </div>

              <div className='flex items-center gap-2'>
                <button
                  onClick={() => setShowCart(true)}
                  className='relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105'
                  style={{
                    backgroundColor: 'var(--toggle-bg)',
                    color: 'var(--toggle-text)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <ShoppingBag size={18} />
                  {getTotalItems() > 0 && (
                    <span
                      className='absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white'
                      style={{ background: 'var(--accent-gold)' }}
                    >
                      {getTotalItems()}
                    </span>
                  )}
                </button>

                <button
                  onClick={toggleTheme}
                  className='w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105'
                  style={{
                    backgroundColor: 'var(--toggle-bg)',
                    color: 'var(--toggle-text)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* МОБИЛЬНАЯ ВЕРСИЯ */}
        <div className='lg:hidden pt-14'>
          <div
            className={`px-4 py-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            {!selectedCategory ? (
              <div className='animate-fade' style={{ animationFillMode: 'forwards' }}>
                <h2
                  className='text-2xl font-serif font-bold mb-3'
                  style={{ color: 'var(--text-primary)' }}
                >
                  {restaurantInfo.fullName}
                </h2>

                <div className='space-y-2 mb-4'>
                  {restaurantInfo.locations.map((loc, idx) => (
                    <div key={idx} className='space-y-1'>
                      <div
                        className='flex items-center gap-2 text-sm'
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <MapPin size={14} />
                        <span>{loc.address}</span>
                      </div>
                      <div
                        className='flex items-center gap-2 text-sm'
                        style={{ color: 'var(--accent-gold)' }}
                      >
                        <Phone size={14} />
                        <span className='font-medium'>{loc.phone}</span>
                      </div>
                    </div>
                  ))}
                  <div
                    className='flex items-center gap-2 text-sm mt-1'
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <Clock size={14} />
                    <span>{restaurantInfo.hours}</span>
                  </div>
                </div>

                <div
                  className='mb-5 p-4 rounded-xl'
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div className='flex items-center gap-2 mb-2'>
                    <div className='flex'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          style={{ color: 'var(--accent-gold)' }}
                          fill='var(--accent-gold)'
                        />
                      ))}
                    </div>
                    <span
                      className='font-semibold text-sm'
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Отзывы Google
                    </span>
                  </div>
                  <p className='text-sm leading-relaxed' style={{ color: 'var(--text-secondary)' }}>
                    {restaurantInfo.description}
                  </p>
                  <div
                    className='mt-3 text-xs italic opacity-60'
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <p>* Фотографии блюд могут отличаться от подачи.</p>
                    <p>* К счёту добавляется сервисный сбор 15%.</p>
                  </div>
                </div>

                <div className='mb-5'>
                  <div className='relative'>
                    <Search
                      size={18}
                      className='absolute left-3 top-1/2 -translate-y-1/2'
                      style={{ color: 'var(--text-muted)' }}
                    />
                    <input
                      type='text'
                      placeholder='Поиск по меню...'
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className='w-full pl-10 pr-4 py-3 rounded-xl outline-none'
                      style={{
                        background: 'var(--bg-card)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-color)',
                      }}
                    />
                  </div>
                </div>

                <div className='space-y-3'>
                  {categories.map((category, index) => (
                    <CategoryCard
                      key={category.id}
                      category={category}
                      index={index}
                      isVisible={isVisible}
                      onClick={() => handleCategorySelect(category)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div
                className='animate-slide-up'
                style={{ animationFillMode: 'forwards' }}
                ref={productsRef}
              >
                <div className='mb-4'>
                  <div className='flex items-center gap-2 mb-3'>
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className='p-2 rounded-lg transition-all hover:scale-105'
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                      }}
                    >
                      <ChevronRight
                        size={18}
                        className='rotate-180'
                        style={{ color: 'var(--accent-gold)' }}
                      />
                    </button>
                    <h3
                      className='text-lg font-serif font-bold'
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {selectedCategory.name}
                    </h3>
                  </div>

                  <div className='flex gap-2 overflow-x-auto pb-2 no-scrollbar'>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategorySelect(cat)}
                        className='flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300'
                        style={{
                          background:
                            selectedCategory.id === cat.id
                              ? 'var(--accent-gold)'
                              : 'var(--bg-card)',
                          color: selectedCategory.id === cat.id ? 'white' : 'var(--text-secondary)',
                          border:
                            selectedCategory.id === cat.id
                              ? '1px solid var(--accent-gold)'
                              : '1px solid var(--border-color)',
                          boxShadow: selectedCategory.id === cat.id ? 'var(--shadow-gold)' : 'none',
                        }}
                      >
                        <span className='text-sm font-medium'>{cat.name}</span>
                        <span className='text-xs opacity-60'>({cat.count})</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className='space-y-3'>
                  {productsData[selectedCategory.id]?.map((product, idx) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={idx}
                      cartCount={getCartCount(product.id)}
                      onAdd={addToCart}
                      onRemove={removeFromCart}
                      isFavorite={favorites.includes(product.id)}
                      onToggleFavorite={toggleFavorite}
                      onClick={() => handleProductClick(product)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ДЕСКТОПНАЯ ВЕРСИЯ */}
        <div className='hidden lg:block pt-14'>
          <div
            className={`max-w-7xl mx-auto px-6 py-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            {!selectedCategory ? (
              <div className='animate-fade' style={{ animationFillMode: 'forwards' }}>
                <div className='grid grid-cols-2 gap-6 mb-8'>
                  <div
                    className='relative p-6 rounded-2xl overflow-hidden group'
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      boxShadow: 'var(--shadow-md)',
                    }}
                  >
                    <h2
                      className='text-3xl font-serif font-bold mb-4'
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {restaurantInfo.fullName}
                    </h2>
                    <div className='space-y-3 mb-4'>
                      {restaurantInfo.locations.map((loc, idx) => (
                        <div key={idx} className='space-y-1'>
                          <div
                            className='flex items-center gap-2'
                            style={{ color: 'var(--text-muted)' }}
                          >
                            <MapPin size={16} />
                            <span>{loc.address}</span>
                          </div>
                          <div
                            className='flex items-center gap-2'
                            style={{ color: 'var(--accent-gold)' }}
                          >
                            <Phone size={16} />
                            <span className='font-medium'>{loc.phone}</span>
                          </div>
                        </div>
                      ))}
                      <div
                        className='flex items-center gap-2 pt-1'
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <Clock size={16} />
                        <span>{restaurantInfo.hours}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className='relative p-6 rounded-2xl group'
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      boxShadow: 'var(--shadow-md)',
                    }}
                  >
                    <div className='flex items-center gap-3 mb-4'>
                      <div className='flex'>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            style={{ color: 'var(--accent-gold)' }}
                            fill='var(--accent-gold)'
                          />
                        ))}
                      </div>
                      <span className='font-bold text-lg' style={{ color: 'var(--text-primary)' }}>
                        Отзывы Google
                      </span>
                    </div>
                    <p
                      className='text-base leading-relaxed mb-4'
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {restaurantInfo.description}
                    </p>
                    <div
                      className='text-sm italic opacity-60'
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <p>* Фотографии блюд могут отличаться от подачи.</p>
                      <p>* К счёту добавляется сервисный сбор 15%.</p>
                    </div>
                  </div>
                </div>

                <div className='mb-8'>
                  <div className='max-w-md relative'>
                    <Search
                      size={20}
                      className='absolute left-4 top-1/2 -translate-y-1/2'
                      style={{ color: 'var(--text-muted)' }}
                    />
                    <input
                      type='text'
                      placeholder='Поиск по меню...'
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className='w-full pl-12 pr-5 py-3.5 rounded-xl outline-none text-base'
                      style={{
                        background: 'var(--bg-card)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-color)',
                      }}
                    />
                  </div>
                </div>

                <div className='grid grid-cols-4 gap-5'>
                  {categories.map((category, index) => (
                    <DesktopCategoryCard
                      key={category.id}
                      category={category}
                      index={index}
                      onClick={() => handleCategorySelect(category)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div
                className='animate-slide-up'
                style={{ animationFillMode: 'forwards' }}
                ref={productsRef}
              >
                <div className='mb-6'>
                  <div className='flex items-center gap-4 mb-4'>
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className='p-2 rounded-xl transition-all hover:scale-105'
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                      }}
                    >
                      <ChevronRight
                        size={20}
                        className='rotate-180'
                        style={{ color: 'var(--accent-gold)' }}
                      />
                    </button>
                    <h2
                      className='text-2xl font-serif font-bold'
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {selectedCategory.name}
                    </h2>
                  </div>

                  <div className='flex gap-3 flex-wrap'>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategorySelect(cat)}
                        className='flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105'
                        style={{
                          background:
                            selectedCategory.id === cat.id
                              ? 'var(--accent-gold)'
                              : 'var(--bg-card)',
                          color: selectedCategory.id === cat.id ? 'white' : 'var(--text-secondary)',
                          border:
                            selectedCategory.id === cat.id
                              ? '1px solid var(--accent-gold)'
                              : '1px solid var(--border-color)',
                          boxShadow: selectedCategory.id === cat.id ? 'var(--shadow-gold)' : 'none',
                        }}
                      >
                        <span className='font-medium'>{cat.name}</span>
                        <span className='text-sm opacity-60'>({cat.count})</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className='grid grid-cols-3 gap-5'>
                  {productsData[selectedCategory.id]?.map((product, idx) => (
                    <DesktopProductCard
                      key={product.id}
                      product={product}
                      index={idx}
                      cartCount={getCartCount(product.id)}
                      onAdd={addToCart}
                      onRemove={removeFromCart}
                      isFavorite={favorites.includes(product.id)}
                      onToggleFavorite={toggleFavorite}
                      onClick={() => handleProductClick(product)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Корзина — Drawer */}
      <CartDrawer
        showCart={showCart}
        setShowCart={setShowCart}
        cart={cart}
        setCart={setCart}
        productsData={productsData}
        onAdd={addToCart}
        onRemove={removeFromCart}
        onRemoveCompletely={removeItemCompletely}
        getTotalPrice={getTotalPrice}
        onCheckoutSuccess={handleCheckoutSuccess}
      />

      {/* Модальное окно успешного заказа */}
      <OrderSuccessModal
        show={showOrderSuccess}
        onClose={() => setShowOrderSuccess(false)}
        totalPrice={orderTotal}
      />

      {/* Модальное окно продукта */}
      {showProductModal && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setShowProductModal(false)}
          cartCount={getCartCount(selectedProduct.id)}
          onAdd={addToCart}
          isFavorite={favorites.includes(selectedProduct.id)}
          onToggleFavorite={toggleFavorite}
        />
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.02); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-slide-up {
          animation: slideUp 0.3s ease-out forwards;
        }
        
        .animate-fade {
          animation: fadeIn 0.25s ease-out forwards;
        }
        
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  )
}

// Компонент корзины (Drawer)
const CartDrawer = ({
  showCart,
  setShowCart,
  cart,
  setCart,
  productsData,
  onAdd,
  onRemove,
  onRemoveCompletely,
  getTotalPrice,
  onCheckoutSuccess,
}) => {
  const cartItems = Object.entries(cart)
    .map(([productId, count]) => {
      const product = Object.values(productsData)
        .flat()
        .find((p) => p.id === parseInt(productId))
      return { product, count, productId }
    })
    .filter((item) => item.product)

  const totalItems = cartItems.reduce((sum, item) => sum + item.count, 0)
  const totalPrice = getTotalPrice()

  const handleCheckout = () => {
    onCheckoutSuccess()
  }

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          showCart ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowCart(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-96 z-50 transition-transform duration-300 ease-out ${
          showCart ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ background: 'var(--bg-card)' }}
      >
        <div
          className='flex items-center justify-between p-4 border-b'
          style={{ borderColor: 'var(--border-color)' }}
        >
          <div className='flex items-center gap-2'>
            <ShoppingBag size={20} style={{ color: 'var(--accent-gold)' }} />
            <h3 className='text-lg font-serif font-bold' style={{ color: 'var(--text-primary)' }}>
              Корзина
            </h3>
            {totalItems > 0 && (
              <span
                className='px-2 py-0.5 rounded-full text-xs font-bold text-white'
                style={{ background: 'var(--accent-gold)' }}
              >
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={() => setShowCart(false)}
            className='p-2 rounded-lg transition-all hover:scale-105'
            style={{ background: 'var(--toggle-bg)' }}
          >
            <X size={18} style={{ color: 'var(--text-muted)' }} />
          </button>
        </div>

        <div className='flex flex-col h-[calc(100%-64px)]'>
          {cartItems.length === 0 ? (
            <div className='flex-1 flex flex-col items-center justify-center p-8'>
              <ShoppingBag size={48} style={{ color: 'var(--text-muted)', opacity: 0.3 }} />
              <p className='mt-4 text-lg' style={{ color: 'var(--text-muted)' }}>
                Корзина пуста
              </p>
              <button
                onClick={() => setShowCart(false)}
                className='mt-4 px-6 py-2 rounded-xl font-medium transition-all hover:scale-105'
                style={{ background: 'var(--accent-gold)', color: 'white' }}
              >
                Продолжить покупки
              </button>
            </div>
          ) : (
            <>
              <div className='flex-1 overflow-y-auto p-4 space-y-3'>
                {cartItems.map(({ product, count, productId }) => (
                  <div
                    key={productId}
                    className='flex gap-3 p-3 rounded-xl'
                    style={{ background: 'var(--hover-bg)' }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className='w-16 h-16 rounded-lg object-cover'
                    />
                    <div className='flex-1'>
                      <h4 className='font-medium text-sm' style={{ color: 'var(--text-primary)' }}>
                        {product.name}
                      </h4>
                      <p className='text-sm font-bold mt-1' style={{ color: 'var(--accent-gold)' }}>
                        {product.price} сом
                      </p>
                    </div>
                    <div className='flex flex-col items-end justify-between'>
                      <button
                        onClick={() => onRemoveCompletely(productId)}
                        className='p-1 rounded-lg transition-all hover:scale-105'
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <Trash2 size={14} />
                      </button>
                      <div className='flex items-center gap-2'>
                        <button
                          onClick={() => onRemove(productId)}
                          className='w-7 h-7 rounded-lg flex items-center justify-center'
                          style={{ background: 'var(--bg-card)' }}
                        >
                          <Minus size={14} style={{ color: 'var(--text-muted)' }} />
                        </button>
                        <span
                          className='font-bold w-5 text-center text-sm'
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {count}
                        </span>
                        <button
                          onClick={() => onAdd(productId)}
                          className='w-7 h-7 rounded-lg flex items-center justify-center'
                          style={{ background: 'var(--accent-gold)' }}
                        >
                          <Plus size={14} style={{ color: 'white' }} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className='p-4 border-t' style={{ borderColor: 'var(--border-color)' }}>
                <div className='flex justify-between items-center mb-4'>
                  <span className='text-base font-bold' style={{ color: 'var(--text-primary)' }}>
                    Итого:
                  </span>
                  <span className='text-xl font-bold' style={{ color: 'var(--accent-gold)' }}>
                    {totalPrice} сом
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className='w-full py-3 rounded-xl font-bold text-white transition-all hover:scale-[1.02]'
                  style={{ background: 'var(--accent-gold)' }}
                >
                  Оформить заказ
                </button>
                <button
                  onClick={() => setCart({})}
                  className='w-full mt-2 py-2 rounded-xl text-sm transition-all hover:opacity-80'
                  style={{ color: 'var(--text-muted)' }}
                >
                  Очистить корзину
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

// Модальное окно продукта с Framer Motion
const ProductModal = ({ product, onClose, cartCount, onAdd, isFavorite, onToggleFavorite }) => {
  const [quantity, setQuantity] = useState(cartCount || 1)
  const [isAdded, setIsAdded] = useState(false)
  const [activeTab, setActiveTab] = useState('info')
  const [isLiked, setIsLiked] = useState(isFavorite)
  const [isImageZoomed, setIsImageZoomed] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        if (isImageZoomed) {
          setIsImageZoomed(false)
        } else {
          onClose()
        }
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose, isImageZoomed])

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAdd(product.id)
    }
    setIsAdded(true)
    setTimeout(() => {
      setIsAdded(false)
      onClose()
    }, 800)
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    onToggleFavorite(product.id)
  }

  const ingredientsList = product.ingredients?.split(',').map((i) => i.trim()) || [
    'Отборная говядина',
    'Свежие овощи',
    'Специальный соус',
    'Зелень',
    'Специи',
  ]

  const nutritionInfo = {
    calories: product.calories || '320 ккал',
    proteins: '18 г',
    fats: '22 г',
    carbs: '38 г',
    weight: product.weight || '350 г',
  }

  const cookingTime = '25-30 мин'
  const portions = '1-2 персоны'

  return (
    <AnimatePresence>
      <div className='fixed inset-0 z-50'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className='absolute inset-0 bg-black/80 backdrop-blur-md'
        />

        {/* Основное модальное окно */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className='absolute inset-0 flex items-center justify-center p-2 md:p-4'
          style={{ pointerEvents: isImageZoomed ? 'none' : 'auto' }}
        >
          <div
            className='relative w-full max-w-5xl rounded-2xl md:rounded-3xl overflow-hidden border shadow-2xl flex flex-col'
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
              maxHeight: 'calc(100vh - 16px)',
              opacity: isImageZoomed ? 0 : 1,
              transition: 'opacity 0.3s ease',
            }}
          >
            {/* Кнопки справа: Закрыть и Like */}
            <div className='absolute top-3 right-3 md:top-4 md:right-4 z-10 flex gap-2'>
              <button
                onClick={handleLike}
                className='w-8 h-8 md:w-10 md:h-10 rounded-full backdrop-blur-sm transition-all duration-300 flex items-center justify-center'
                style={{
                  background: isLiked ? 'rgba(196, 154, 60, 0.15)' : 'rgba(0, 0, 0, 0.4)',
                  border: isLiked
                    ? '1px solid var(--accent-gold)'
                    : '1px solid var(--border-color)',
                  color: isLiked ? 'var(--accent-gold)' : 'rgba(255,255,255,0.7)',
                }}
              >
                <FiHeartIcon size={16} fill={isLiked ? 'currentColor' : 'none'} />
              </button>
              <button
                onClick={onClose}
                className='w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/40 backdrop-blur-sm text-white/70 hover:text-white hover:bg-black/60 transition-all duration-300 flex items-center justify-center'
                style={{ border: '1px solid var(--border-color)' }}
              >
                <FiX size={18} />
              </button>
            </div>

            <div className='flex flex-col md:flex-row overflow-hidden h-full'>
              {/* Image Section */}
              <div className='relative w-full md:w-2/5 h-40 sm:h-48 md:h-auto shrink-0 overflow-hidden'>
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={product.image}
                  alt={product.name}
                  className='w-full h-full object-cover cursor-zoom-in'
                  onClick={() => setIsImageZoomed(true)}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-black/60 pointer-events-none' />

                {/* Кнопка увеличения */}
                <button
                  onClick={() => setIsImageZoomed(true)}
                  className='absolute bottom-3 right-3 md:bottom-4 md:right-4 p-2 rounded-full bg-black/60 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/80 transition-all z-10'
                >
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <circle cx='11' cy='11' r='8' />
                    <line x1='21' y1='21' x2='16.65' y2='16.65' />
                    <line x1='11' y1='8' x2='11' y2='14' />
                    <line x1='8' y1='11' x2='14' y2='11' />
                  </svg>
                </button>

                {/* Rating */}
                <div
                  className='absolute bottom-3 left-3 md:bottom-4 md:left-4 flex items-center gap-1 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded-full'
                  style={{ border: '1px solid var(--accent-gold)30' }}
                >
                  <FaStar size={9} style={{ color: 'var(--accent-gold)' }} />
                  <span className='text-white text-[10px] font-semibold'>4.8</span>
                </div>
              </div>

              {/* Content Section */}
              <div className='flex-1 p-3 md:p-5 flex flex-col overflow-hidden'>
                {/* Header */}
                <div className='shrink-0'>
                  <div className='flex items-center gap-1.5 mb-1'>
                    <GiChefToque size={12} style={{ color: 'var(--accent-gold)' }} />
                    <span
                      className='text-[9px] md:text-xs font-semibold tracking-wider uppercase'
                      style={{ color: 'var(--accent-gold)' }}
                    >
                      Шеф-повар рекомендует
                    </span>
                  </div>
                  <h2
                    className='font-serif text-lg md:text-2xl font-bold mb-0.5'
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {product.name}
                  </h2>
                  <p
                    className='text-[10px] md:text-sm leading-relaxed opacity-70 line-clamp-2'
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {product.description}
                  </p>
                </div>

                {/* Price and Meta */}
                <div
                  className='flex items-center justify-between py-2 border-b shrink-0'
                  style={{ borderColor: 'var(--border-color)' }}
                >
                  <div>
                    <span
                      className='text-[8px] block opacity-50'
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Цена
                    </span>
                    <span
                      className='font-serif text-xl md:text-2xl font-bold'
                      style={{ color: 'var(--accent-gold)' }}
                    >
                      {product.price} сом
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='text-center'>
                      <div
                        className='w-6 h-6 md:w-7 md:h-7 mx-auto rounded-full flex items-center justify-center'
                        style={{ background: 'var(--hover-bg)' }}
                      >
                        <FiClockIcon size={10} style={{ color: 'var(--accent-gold)' }} />
                      </div>
                      <span
                        className='text-[8px] block opacity-50'
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {cookingTime}
                      </span>
                    </div>
                    <div className='text-center'>
                      <div
                        className='w-6 h-6 md:w-7 md:h-7 mx-auto rounded-full flex items-center justify-center'
                        style={{ background: 'var(--hover-bg)' }}
                      >
                        <FiClockIcon size={10} style={{ color: 'var(--accent-gold)' }} />
                      </div>
                      <span
                        className='text-[8px] block opacity-50'
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {portions}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div
                  className='flex gap-1 my-2 p-0.5 rounded-lg shrink-0'
                  style={{ background: 'var(--hover-bg)' }}
                >
                  {[
                    { id: 'info', label: 'Описание', icon: FiInfoIcon },
                    { id: 'ingredients', label: 'Состав', icon: FaLeaf },
                    { id: 'nutrition', label: 'КБЖУ', icon: FaFire },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-1.5 px-1 rounded-md text-[9px] md:text-xs font-medium transition-all duration-300 flex items-center justify-center gap-1 ${
                        activeTab === tab.id
                          ? 'text-white shadow-md'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                      style={{
                        background: activeTab === tab.id ? 'var(--accent-gold)' : 'transparent',
                        color: activeTab === tab.id ? 'white' : 'var(--text-muted)',
                      }}
                    >
                      <tab.icon size={10} />
                      <span className='hidden sm:inline'>{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className='flex-1 min-h-0 overflow-y-auto'>
                  <AnimatePresence mode='wait'>
                    {activeTab === 'info' && (
                      <motion.div
                        key='info'
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className='space-y-1.5'
                      >
                        <p
                          className='text-[10px] md:text-sm leading-relaxed opacity-80'
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          Это блюдо — настоящая жемчужина нашей кухни. Мы используем только
                          свежайшие ингредиенты.
                        </p>
                        <p
                          className='text-[10px] leading-relaxed opacity-60'
                          style={{ color: 'var(--text-muted)' }}
                        >
                          Идеально сочетается с бокалом красного сухого вина.
                        </p>
                      </motion.div>
                    )}

                    {activeTab === 'ingredients' && (
                      <motion.div
                        key='ingredients'
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className='grid grid-cols-2 gap-x-2 gap-y-1'
                      >
                        {ingredientsList.slice(0, 6).map((item, i) => (
                          <div key={i} className='flex items-center gap-1'>
                            <div
                              className='w-1 h-1 rounded-full shrink-0'
                              style={{ background: 'var(--accent-gold)' }}
                            />
                            <span
                              className='text-[10px] opacity-80 truncate'
                              style={{ color: 'var(--text-muted)' }}
                            >
                              {item}
                            </span>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {activeTab === 'nutrition' && (
                      <motion.div
                        key='nutrition'
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className='grid grid-cols-5 gap-1'
                      >
                        {Object.entries(nutritionInfo).map(([key, value]) => (
                          <div
                            key={key}
                            className='text-center p-1.5 rounded-md border'
                            style={{
                              background: 'var(--hover-bg)',
                              borderColor: 'var(--border-color)',
                            }}
                          >
                            <span
                              className='text-xs md:text-sm font-bold block'
                              style={{ color: 'var(--accent-gold)' }}
                            >
                              {value.split(' ')[0]}
                            </span>
                            <span
                              className='text-[7px] md:text-[8px] uppercase tracking-wider opacity-50'
                              style={{ color: 'var(--text-muted)' }}
                            >
                              {key === 'calories'
                                ? 'ккал'
                                : key === 'proteins'
                                  ? 'белки'
                                  : key === 'fats'
                                    ? 'жиры'
                                    : key === 'carbs'
                                      ? 'углеводы'
                                      : 'вес'}
                            </span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Add to cart */}
                <div
                  className='flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2 border-t shrink-0'
                  style={{ borderColor: 'var(--border-color)' }}
                >
                  <div className='flex items-center justify-center sm:justify-start gap-1'>
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className='w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center transition-all hover:scale-105'
                      style={{ background: 'var(--toggle-bg)', color: 'var(--text-muted)' }}
                    >
                      <FiMinusIcon size={14} />
                    </button>
                    <span
                      className='text-sm md:text-base font-semibold w-6 text-center'
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className='w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center transition-all hover:scale-105'
                      style={{ background: 'var(--accent-gold)', color: 'white' }}
                    >
                      <FiPlusIcon size={14} />
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 py-2 md:py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-xs md:text-sm ${
                      isAdded ? 'opacity-90' : 'hover:scale-[1.01]'
                    }`}
                    style={{
                      background: isAdded ? '#1F6E33' : 'var(--accent-gold)',
                      color: 'white',
                      boxShadow: isAdded ? 'none' : '0 4px 12px rgba(196, 154, 60, 0.3)',
                    }}
                  >
                    {isAdded ? (
                      <>
                        <FiCheck size={16} />
                        Добавлено
                      </>
                    ) : (
                      <>
                        <FiShoppingCart size={16} />В корзину • {product.price * quantity} сом
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Увеличенное изображение */}
        <AnimatePresence>
          {isImageZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md'
              onClick={() => setIsImageZoomed(false)}
            >
              <button
                onClick={() => setIsImageZoomed(false)}
                className='absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all z-10'
              >
                <FiX size={24} />
              </button>
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                src={product.image}
                alt={product.name}
                className='max-w-full max-h-full object-contain rounded-lg'
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  )
}

// Карточка категории (мобильная)
const CategoryCard = ({ category, index, isVisible, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full h-60 rounded-xl overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{
        transitionDelay: `${index * 40}ms`,
        transition:
          'transform 0.3s cubic-bezier(0.2, 0, 0, 1), opacity 0.3s ease-out, box-shadow 0.2s ease',
        boxShadow: isHovered ? 'var(--shadow-gold)' : 'var(--shadow-md)',
        transform: isHovered ? 'scale(1.01)' : 'scale(1)',
        willChange: 'transform',
      }}
    >
      <img
        src={category.image}
        alt={category.name}
        className='absolute inset-0 w-full h-full object-cover'
        style={{
          transition: 'transform 0.4s cubic-bezier(0.2, 0, 0, 1)',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          willChange: 'transform',
        }}
      />
      <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/30' />
      <div
        className='absolute inset-2 rounded-lg transition-opacity duration-200'
        style={{
          border: '1px solid var(--accent-gold)',
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className='absolute bottom-0 left-0 right-0 p-4 text-left'>
        <h3 className='text-xl font-bold text-white mb-1 drop-shadow-lg'>{category.name}</h3>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-white/90 drop-shadow'>{category.count} блюд</span>
          <ChevronRight
            size={20}
            style={{
              color: 'white',
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
              opacity: isHovered ? 1 : 0.7,
              transition: 'transform 0.2s ease, opacity 0.2s ease',
            }}
          />
        </div>
      </div>
    </button>
  )
}

// Карточка категории (десктоп)
const DesktopCategoryCard = ({ category, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='relative h-48 rounded-xl overflow-hidden'
      style={{
        transform: isHovered ? 'scale(1.02) translateY(-4px)' : 'scale(1) translateY(0)',
        boxShadow: isHovered ? 'var(--shadow-gold)' : 'var(--shadow-md)',
        transition: 'transform 0.25s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.2s ease',
        willChange: 'transform',
      }}
    >
      <img
        src={category.image}
        alt={category.name}
        className='absolute inset-0 w-full h-full object-cover'
        style={{
          transition: 'transform 0.4s cubic-bezier(0.2, 0, 0, 1)',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          willChange: 'transform',
        }}
      />
      <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/30' />
      <div
        className='absolute inset-2 rounded-lg transition-opacity duration-200'
        style={{
          border: '1px solid var(--accent-gold)',
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className='absolute bottom-0 left-0 right-0 p-4 text-left'>
        <h3 className='text-xl font-bold text-white mb-1 drop-shadow-lg'>{category.name}</h3>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-white/90 drop-shadow'>{category.count} блюд</span>
          <ChevronRight
            size={20}
            style={{
              color: 'white',
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
              opacity: isHovered ? 1 : 0.6,
              transition: 'transform 0.2s ease, opacity 0.2s ease',
            }}
          />
        </div>
      </div>
    </button>
  )
}

// Карточка продукта (мобильная)
const ProductCard = ({
  product,
  index,
  cartCount,
  onAdd,
  onRemove,
  isFavorite,
  onToggleFavorite,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className='relative w-full rounded-xl overflow-hidden animate-slide-up'
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        boxShadow: isHovered ? 'var(--shadow-gold)' : 'var(--shadow-sm)',
        transition: 'box-shadow 0.2s ease, border-color 0.15s ease',
        animationDelay: `${index * 30}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative h-48 cursor-pointer' onClick={onClick}>
        <img src={product.image} alt={product.name} className='w-full h-full object-cover' />
        <button
          onClick={(e) => {
            e.stopPropagation()
            onToggleFavorite(product.id)
          }}
          className='absolute top-3 right-3 p-2 rounded-full bg-black/30 backdrop-blur-sm transition-all hover:scale-110'
          style={{ color: isFavorite ? 'var(--accent-gold)' : 'white' }}
        >
          <Heart size={18} fill={isFavorite ? 'var(--accent-gold)' : 'none'} />
        </button>
      </div>

      <div className='p-4'>
        <h4
          className='font-bold text-lg mb-1 cursor-pointer'
          style={{ color: 'var(--text-primary)' }}
          onClick={onClick}
        >
          {product.name}
        </h4>
        <p className='text-sm opacity-70 mb-3' style={{ color: 'var(--text-muted)' }}>
          {product.description}
        </p>
        <div className='flex items-center justify-between'>
          <span className='font-bold text-xl' style={{ color: 'var(--accent-gold)' }}>
            {product.price} сом
          </span>

          {cartCount === 0 ? (
            <button
              onClick={() => onAdd(product.id)}
              className='w-10 h-10 rounded-lg flex items-center justify-center'
              style={{
                background: 'var(--accent-gold)',
                transition: 'transform 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <Plus size={20} style={{ color: 'white' }} />
            </button>
          ) : (
            <div className='flex items-center gap-2'>
              <button
                onClick={() => onRemove(product.id)}
                className='w-9 h-9 rounded-lg flex items-center justify-center'
                style={{
                  background: 'var(--toggle-bg)',
                  transition: 'transform 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <Minus size={18} style={{ color: 'var(--text-muted)' }} />
              </button>
              <span className='font-bold text-lg' style={{ color: 'var(--text-primary)' }}>
                {cartCount}
              </span>
              <button
                onClick={() => onAdd(product.id)}
                className='w-9 h-9 rounded-lg flex items-center justify-center'
                style={{
                  background: 'var(--accent-gold)',
                  transition: 'transform 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <Plus size={18} style={{ color: 'white' }} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Карточка продукта (десктоп)
const DesktopProductCard = ({
  product,
  index,
  cartCount,
  onAdd,
  onRemove,
  isFavorite,
  onToggleFavorite,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className='relative rounded-xl overflow-hidden animate-slide-up'
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        boxShadow: isHovered ? 'var(--shadow-gold)' : 'var(--shadow-md)',
        transform: isHovered ? 'scale(1.01) translateY(-3px)' : 'scale(1)',
        transition: 'transform 0.25s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.2s ease',
        animationDelay: `${index * 30}ms`,
        willChange: 'transform',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative h-48 overflow-hidden cursor-pointer' onClick={onClick}>
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-full object-cover'
          style={{
            transition: 'transform 0.4s cubic-bezier(0.2, 0, 0, 1)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            willChange: 'transform',
          }}
        />
        <button
          onClick={(e) => {
            e.stopPropagation()
            onToggleFavorite(product.id)
          }}
          className='absolute top-3 right-3 p-2 rounded-full bg-black/30 backdrop-blur-sm transition-all hover:scale-110'
          style={{ color: isFavorite ? 'var(--accent-gold)' : 'white' }}
        >
          <Heart size={18} fill={isFavorite ? 'var(--accent-gold)' : 'none'} />
        </button>
      </div>

      <div className='p-4'>
        <h4
          className='font-bold text-lg mb-1 cursor-pointer'
          style={{ color: 'var(--text-primary)' }}
          onClick={onClick}
        >
          {product.name}
        </h4>
        <p className='text-sm opacity-70 mb-3' style={{ color: 'var(--text-muted)' }}>
          {product.description}
        </p>
        <div className='flex items-center justify-between'>
          <span className='font-bold text-xl' style={{ color: 'var(--accent-gold)' }}>
            {product.price} сом
          </span>

          {cartCount === 0 ? (
            <button
              onClick={() => onAdd(product.id)}
              className='w-10 h-10 rounded-lg flex items-center justify-center'
              style={{
                background: 'var(--accent-gold)',
                transition: 'transform 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <Plus size={20} style={{ color: 'white' }} />
            </button>
          ) : (
            <div className='flex items-center gap-2'>
              <button
                onClick={() => onRemove(product.id)}
                className='w-9 h-9 rounded-lg flex items-center justify-center'
                style={{
                  background: 'var(--toggle-bg)',
                  transition: 'transform 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <Minus size={18} style={{ color: 'var(--text-muted)' }} />
              </button>
              <span className='font-bold text-lg' style={{ color: 'var(--text-primary)' }}>
                {cartCount}
              </span>
              <button
                onClick={() => onAdd(product.id)}
                className='w-9 h-9 rounded-lg flex items-center justify-center'
                style={{
                  background: 'var(--accent-gold)',
                  transition: 'transform 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <Plus size={18} style={{ color: 'white' }} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Модальное окно успешного оформления заказа
const OrderSuccessModal = ({ show, onClose, totalPrice }) => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (show) {
      setTimeout(() => setAnimate(true), 50)
    } else {
      setAnimate(false)
    }
  }, [show])

  if (!show) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4' onClick={onClose}>
      <div className='absolute inset-0 bg-black/60 backdrop-blur-sm' />
      <div
        className={`relative w-full max-w-md rounded-2xl p-6 text-center transition-all duration-500 ${
          animate ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
        style={{ background: 'var(--bg-card)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='mb-4 flex justify-center'>
          <div
            className='w-20 h-20 rounded-full flex items-center justify-center'
            style={{ background: 'var(--accent-gold)' }}
          >
            <svg
              width='40'
              height='40'
              viewBox='0 0 24 24'
              fill='none'
              stroke='white'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <polyline points='20 6 9 17 4 12' />
            </svg>
          </div>
        </div>

        <h2 className='text-2xl font-serif font-bold mb-2' style={{ color: 'var(--text-primary)' }}>
          Заказ оформлен!
        </h2>

        <p className='text-base mb-2' style={{ color: 'var(--text-secondary)' }}>
          Спасибо за ваш заказ!
        </p>

        <div
          className='py-3 px-6 rounded-xl inline-block mb-4'
          style={{ background: 'var(--hover-bg)' }}
        >
          <span className='text-sm' style={{ color: 'var(--text-muted)' }}>
            Сумма заказа:{' '}
          </span>
          <span className='text-xl font-bold' style={{ color: 'var(--accent-gold)' }}>
            {totalPrice} сом
          </span>
        </div>

        <p className='text-sm mb-6' style={{ color: 'var(--text-muted)' }}>
          Наш менеджер свяжется с вами в ближайшее время для подтверждения.
        </p>

        <button
          onClick={onClose}
          className='w-full py-3 rounded-xl font-bold text-white transition-all hover:scale-[1.02]'
          style={{ background: 'var(--accent-gold)' }}
        >
          Отлично!
        </button>
      </div>
    </div>
  )
}

export default MenuPage
