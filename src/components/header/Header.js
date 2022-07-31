import React from 'react'

// Components
import Nav from './Nav'
import OpenNav from './OpenNav'

// Styling
import styles from './Header.module.css'

const Header = ({ onMenuOpening, isOpen }) => {

  return (
    <header className={`${styles.header} ${isOpen && styles.header__open}`}>
        <Nav onMenuOpening={onMenuOpening} />
        {isOpen && <OpenNav />}
        
    </header>
  )
}

export default Header