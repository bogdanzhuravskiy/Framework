import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar'
import Social from './Social'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(() => window.innerWidth >= 800)

  useEffect(() => {
    const showMenu = () => {
      setShowLinks(window.innerWidth >= 800)
    }
    window.addEventListener('resize', showMenu)
    return () => window.removeEventListener('resize', showMenu)
  }, [])

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='Coding Addict' className='logo' />
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
            aria-label='Toggle menu'
            aria-expanded={showLinks}
          >
            <FaBars />
          </button>
        </div>
        <div className='links-container'>
          {showLinks && <Sidebar />}
        </div>
        <Social />
      </div>
    </nav>
  )
}

export default Navbar
