import React from 'react'
import { Link } from 'react-router-dom'

// Styling
import styles from './AboutUsHomescreen.module.css'

// Assets
import nosotrosImg from '../../assets/img/nosotros-home/1.png'

const AboutUsHomescreen = () => {
  return (
    <div className={styles.nosotros}>
        <section className={styles.info}>
            <span className='text__gray'>Desde 2022</span>
            <h2 className={`section__title ${styles.title}`}><span>diseño<br/></span> a tu alcance</h2>
            <Link to='/'>
                <button className={styles.button}>¡Conocenos!</button>    
            </Link>
        </section>
        <section className={styles.img__container}>
            <img src={nosotrosImg} alt="" />
        </section>
    </div>
  )
}

export default AboutUsHomescreen