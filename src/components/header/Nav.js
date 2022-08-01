import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';

// Styling
import styles from './Nav.module.css'

const Nav = ({ onMenuOpening }) => {

  const [menuOpen, setMenuOpen] = useState(false)

  const menuOpeningHandler = () => {
    setMenuOpen(!menuOpen)
    onMenuOpening()
  }

  const iconShown = () => {
    if (!menuOpen) {
      return 'bi bi-list'
    } else {
      return 'bi bi-x-lg'
    }
  }

  return (
    <nav className={`${styles.nav} ${menuOpen && styles.menuOpen}`}>
        <Link to='/'>
            <h1 className='logo'>MINGO</h1>    
        </Link>
        
        <section className={styles.icons}>
          <i class="bi bi-heart"></i>
          <i class="bi bi-cart2"></i>
          <i className={iconShown()} onClick={menuOpeningHandler}></i>
        </section>
        
    </nav>
  )
}

export default Nav