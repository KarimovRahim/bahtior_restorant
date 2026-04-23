import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import CallPage from './pages/CallPage'
import LocationPage from './pages/LocationPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='menu' element={<MenuPage />} />
          <Route path='call' element={<CallPage />} />
          <Route path='location' element={<LocationPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
