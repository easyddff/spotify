import React from 'react'
import styles from './chartsMain.module.css'

export default function Charts() {
  return (
    <section id={styles.sub_main}>
      <h2 className='hidden'>Sub Main Visual</h2>
      <div id={styles.submain_list}>
        <p id={styles.subvisual_name}>Hot 100 First</p>
        <div id={styles.subvisual_text}>
          <div className={styles.sub_textbox}>
            <p id={styles.sub_title}>IDGAF</p>
            <p id={styles.sub_singer}>Dua Lipa<span>127 Million Plays</span></p>
          </div>
          <ul id={styles.sub_listenlist}>
            <li id={styles.sub_listen}>Lisetn Now</li>
            <li id={styles.sub_playlist}>PlayList</li>
            <li id={styles.sub_artist_follow}>Artist Follow</li>
          </ul>
        </div>
      </div>
      <div id={styles.sub_main_img}>
        <i className="fa-regular fa-circle-play"/>
        <img src='./images/charts_image/sub_main0.jpg'/>
      </div>
    </section>
  )
}
