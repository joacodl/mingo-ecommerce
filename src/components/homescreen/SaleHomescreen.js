import React from 'react'

// Styling
import styles from './SaleHomescreen.module.css'

// Images

import img1 from '../../assets/img/sale-home/1.png';
import img2 from '../../assets/img/sale-home/2.png';
import img3 from '../../assets/img/sale-home/3.png';
import img4 from '../../assets/img/sale-home/4.png';

const SaleHomescreen = () => {
  return (
    <div className={styles.sale}>
        <section className={styles.sale__header}>
            <h2 className='section__title'>Sale</h2>
            <div className={styles.ver__todo}>
                <span>Ver todo</span>
                <i class="bi bi-arrow-right"></i>
            </div>
        </section>
        <section className={styles.sale__cards}>
            <article className={styles.card}>
                <img src={img1} alt="asd" className={styles.card__img} />
                <section className={styles.card__info}>
                    <div className={styles.card__text}>
                        <h4>Lampara de ejemplo</h4>
                        <span className='text__gray'>Marca</span>
                    </div>
                    <div className={styles.card__price}>
                        <span className='text__red'>$999.99</span>
                        <span className='text__green'>$999.99</span>
                    </div>
                </section>
            </article>
            <article className={styles.card}>
                <img src={img2} alt="asd" className={styles.card__img} />
                <section className={styles.card__info}>
                    <div className={styles.card__text}>
                        <h4>Lampara de ejemplo</h4>
                        <span className='text__gray'>Marca</span>
                    </div>
                    <div className={styles.card__price}>
                        <span className='text__red'>$999.99</span>
                        <span className='text__green'>$999.99</span>
                    </div>
                </section>
            </article>
            <article className={styles.card}>
                <img src={img3} alt="asd" className={styles.card__img} />
                <section className={styles.card__info}>
                    <div className={styles.card__text}>
                        <h4>Lampara de ejemplo</h4>
                        <span className='text__gray'>Marca</span>
                    </div>
                    <div className={styles.card__price}>
                        <span className='text__red'>$999.99</span>
                        <span className='text__green'>$999.99</span>
                    </div>
                </section>
            </article>
            <article className={styles.card}>
                <img src={img4} alt="asd" className={styles.card__img} />
                <section className={styles.card__info}>
                    <div className={styles.card__text}>
                        <h4>Lampara de ejemplo</h4>
                        <span className='text__gray'>Marca</span>
                    </div>
                    <div className={styles.card__price}>
                        <span className='text__red'>$999.99</span>
                        <span className='text__green'>$999.99</span>
                    </div>
                </section>
            </article>
        </section>
        
    </div>
  )
}

export default SaleHomescreen