import React from 'react'
import styles from './mobileHome.module.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import MobileAdvertise from '../../component/mobileAdvertise/MobileAdvertise';
import MobileRecently from '../../component/mobileAll/recently/MobileRecently.js'
import MobileTopArtist from '../../component/mobileAll/topArtist/MobileTopArtist';
import MobileLiveEvent from '../../component/mobileAll/liveEvent/MobileLiveEvent';
import MobileTopCharts from '../../component/mobileAll/mobileMainCharts/MobileTopCharts';
import MobileNewTrends from '../../component/mobileAll/mobileMainCharts/MobileNewTrends';


export default function MobileHome() {

  const main =[
    {index:0, shot:'./images/mobile/main0.jpg'},
    {index:1, shot:'./images/mobile/main1.jpg'},
    {index:2, shot:'./images/mobile/main2.jpg'},
    {index:3, shot:'./images/mobile/main0.jpg'},
    {index:4, shot:'./images/mobile/main1.jpg'}
  ]

  return (
    <div id={styles.mobileHome_wrap}>
      <section id={styles.mobileMain}>
        <h2 className={styles.subtitle}>Your Playlist</h2>
        
          <ul id={styles.mobileMain_list}>
            {
              main.map((item)=>(
                <li key={item.index}><img src={item.shot}/></li>
              ))  
            }
          </ul>
        
      </section>

      <MobileRecently/>      
      

      <section id={styles.foryourmix}>
        <h2 className={styles.subtitle}>For Your Mix</h2>
        <p className={styles.more}>More</p>
        <ul id={styles.foryourmix_list}>
          <li>
            <p id={styles.dailymix}>Daily Mix</p>
            <p id={styles.dailymix_list}>Honest, Killing Me, Steel The Show</p>
          </li>
          <li>
            <p className={styles.dailymix_txt1}>Mood</p>
          </li>
          <li>
            <p className={styles.dailymix_txt1}>Trending</p>
          </li>
        </ul>
      </section>

      <MobileTopArtist/>

      <section id={styles.mobileMain_advertise}>
        <MobileAdvertise/>
      </section>

      <MobileLiveEvent/>

      <MobileTopCharts/>
      
      <MobileNewTrends/>
      <div id={styles.empty}></div>
    </div>
  )
}
