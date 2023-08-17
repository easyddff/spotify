import React from 'react'
import styles from './mobileAdvertise.module.css'

export default function MobileAdvertise() {
  return (
    <div id={styles.mobile_advertise}>
      <img src='./images/spotify_logo_mobile.png'/>
      <div id={styles.mobile_advertise_txt}>
        <p id={styles.mobile_advertise_txt1}>Premium Membership</p>
        <p id={styles.mobile_advertise_txt2}>Premium 1 month free · My Playlist · Everyday Free download · Offline Free </p>
      </div>
    </div>
  )
}
