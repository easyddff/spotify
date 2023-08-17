import React from 'react'
import styles from './artistMain.module.css'

export default function ArtistMain() {
  return (
    <section id={styles.artist_main}>
      <h2 className='hidden'>Artist Main</h2>
      <p id={styles.artist_main_title}>Featured Artist</p>
      <img src='./images/avicii_remove.png'/>
      <div id={styles.artist_main_text}>
        <img src='./images/avicii_logo.png'/>
        <p id={styles.artist_main_text1}>62.7k Followers</p>
        <button>Follow</button>
      </div>
    </section>
  )
}
