import React from 'react'
import { Link } from 'react-router-dom' 

// Styling
import styles from './BlogHomescreen.module.css'

// Assets
import img1 from '../../assets/img/blog-home/1.png'
import img2 from '../../assets/img/blog-home/2.png'

const BlogHomescreen = () => {
  return (
    <div className={styles.blog}>
        <section className={styles.blog__header}>
            <h2 className='section__title'>Blog</h2>
            <div className={styles.ver__todo}>
                <span>Ver todo</span>
                <i class="bi bi-arrow-right"></i>
            </div>
        </section>
        <section className={styles.blog__cards}>
            <article className={styles.card}>
                <section className={styles.img__container}>
                    <img src={img1} alt="" />
                </section>
                <section className={styles.info}>
                    <span className='text__gray'>05/07/2022</span>
                    <h4>Lorem Ipsum</h4>
                    <div></div>
                    <p className={`text__gray ${styles.description}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas porro et aut obcaecati velit illo consequatur. Error non consectetur necessitatibus. Voluptates nobis qui aliquid quod?</p>
                    <Link to={'/'} className={styles.link}>Continuar leyendo</Link>
                </section>
            </article>
            <article className={styles.card}>
                <section className={styles.img__container}>
                    <img src={img2} alt="" />
                </section>
                <section className={styles.info}>
                    <span className='text__gray'>05/07/2022</span>
                    <h4>Lorem Ipsum</h4>
                    <div></div>
                    <p className={`text__gray ${styles.description}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas porro et aut obcaecati velit illo consequatur. Error non consectetur necessitatibus. Voluptates nobis qui aliquid quod?</p>
                    <Link to={'/'} className={styles.link}>Continuar leyendo</Link>
                </section>
            </article>
        </section>
    </div>
  )
}

export default BlogHomescreen