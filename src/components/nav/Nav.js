import React from 'react'
import { Link } from 'react-router-dom'

// Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';

// Styling
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <header className={styles.header}>
        <Link to='/'>
            <h1 className='logo'>MINGO</h1>    
        </Link>
        
        <i className={`bi bi-list ${styles.closed__menu}`}></i>
    </header>
  )
}

export default Nav