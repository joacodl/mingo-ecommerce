import React from 'react'
import { Link } from 'react-router-dom'

// Styling
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h2 className='logo'>MINGO</h2>
        <ul className={styles.links}>
            <li>
                <Link to='/'>Productos</Link>
            </li>
            <li>
                <Link to='/'>Marcas</Link>
            </li>
            <li>
                <Link to='/'>Nosotros</Link>
            </li>
            <li>
                <Link to='/'>Blog</Link>
            </li>
            <li>
                <Link to='/'>Contacto</Link>
            </li>
        </ul>
        <div className={styles.contacto}>
            <h3>¡Esperamos tu contacto!</h3>
            <a href="tel:0000000"> +54 (999) 999-999 </a>
            <span>info@mingo.com</span>
        </div>
        <ul className={styles.social}>
            <Link to='https://joaquin-porfolio.vercel.app/'><i class="bi bi-globe"></i></Link>
            <Link to='https://github.com/joacodl'><i class="bi bi-github"></i></Link>
            <Link to='https://www.linkedin.com/in/joaqu%C3%ADn-dominguez-lodeiro/'><i class="bi bi-linkedin"></i></Link>
        </ul>
        <p>Built & Designed by <Link to='https://joaquin-porfolio.vercel.app/' className={styles.credits}>Joaquín Dominguez Lodeiro</Link></p>
    </footer>
  )
}

export default Footer