import React from 'react'

// Styling
import styles from './MainHome.module.css'

// Slider Images
import decoracion from '../../assets/img/slider-home/decoration.png';
import mesas from '../../assets/img/slider-home/tables.png';
import sillas from '../../assets/img/slider-home/chairs.png';
import sillones from '../../assets/img/slider-home/sofa.png';

const MainHome = () => {
  return (
    <section className={styles.main}>
        <h2 className={styles.slogan}>Que todos los días sean do<span>mingo</span></h2>
        <div className={styles.nuevos__ingresos}>
            <section className={styles.nuevos__ingresos__title}>
                <h3>Nuevos Ingresos</h3>
                <div className={styles.nuevos__ingresos__line}></div>
            </section>
            <section className={styles.slider__wrapper}>
                <div className={styles.slider}>
                    <article>
                        <img src={decoracion} alt="decoracion" />
                    </article>
                    <article>
                        <img src={mesas} alt="mesas" />
                    </article>
                    <article>
                        <img src={sillas} alt="sillas" />
                    </article>
                    <article>
                        <img src={sillones} alt="sillones" />
                    </article>
                </div>
            </section>

        </div>
    </section>
  )
}

export default MainHome