import React from 'react'
import styles from './advertise.module.css'

export default function Advertise() {
  return (
      <div id={styles.advertise}>
        <div id={styles.advertise_text}>
          <p id={styles.advertise_sub}>
            Sweden, Stockholm  2023.10.23
          </p>
          <p id={styles.advertise_main}>
            Remember TIM
          </p>
          <img src='./images/avicii_logo.png'/>
        </div>
      </div>
  )
}
