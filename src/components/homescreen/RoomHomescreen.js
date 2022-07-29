import React from 'react'

// Styling
import styles from './RoomHomescreen.module.css'

// Assets
import roomImg from '../../assets/img/room-home/1.png'

const RoomHomescreen = () => {
  return (
    <div className={styles.rooms}>
        <ul className={styles.list}>
            <li>
                <h2 className='section__title'>Comprá por habitación</h2>
            </li>
            <li>
                <span className={styles.number}>01</span>
                <h3>Dormitorio</h3>
            </li>
            <li>
                <span className={styles.number}>02</span>
                <h3>Sala de estar</h3>
            </li>
            <li>
                <span className={styles.number}>03</span>
                <h3>Oficina</h3>
            </li>
            <li>
                <span className={styles.number}>04</span>
                <h3>Comedor</h3>
            </li>
            <li>
                <span className={styles.number}>05</span>
                <h3>Cocina</h3>
            </li>
        </ul>
        <img src={roomImg} alt="" />
    </div>
  )
}

export default RoomHomescreen