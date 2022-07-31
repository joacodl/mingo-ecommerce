import React from 'react'
import { Link } from 'react-router-dom'

import styles from './OpenNav.module.css'

const OpenNav = () => {
  return (
    <div className={styles.open__nav}>
      <section className={styles.user}>
        <div className={styles.username}>
          <i class="bi bi-person-circle"></i>
          <span>Nombre Usuario</span>
        </div>
        <i class="bi bi-gear"></i>
      </section>
      <ul className={styles.open__nav__links}>
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
    </div>
  )
}

export default OpenNav