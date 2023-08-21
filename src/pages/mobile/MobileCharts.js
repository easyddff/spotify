import React from 'react'
import styles from './mobileCharts.module.css'
import useProducts from '../../hooks/useProducts'
import MobileChartsAll from '../../component/mobileAll/mobileChartsAll/MobileChartsAll'
import MobileAdvertise from '../../component/mobileAdvertise/MobileAdvertise'
import HotMovie from '../../component/mobileAll/hotMovie/HotMovie'
import MobileNewTrends from '../../component/mobileAll/mobileMainCharts/MobileNewTrends'

export default function MobileCharts() {

  // const [charts] = useProducts

  
  return (
    <div id={styles.mobileCharts_wrap}>
      <p id={styles.mobileCharts_title}>Charts</p>
      <section id={styles.mobileCharts_main}>
        <h2 className='hidden'>Charts</h2>
        <div id={styles.mobileCharts_main_in}>
          <div id={styles.mobileCharts_main_txt}>
            <p id={styles.mobileCharts_main_txt1}>IDGAF</p>
            <p id={styles.mobileCharts_main_txt2}>Dua Lipa · 127Millon</p>
          </div>
          <div id={styles.mobileCharts_main_img}>
            <i className="fa-regular fa-circle-play"/>
          </div>
        </div>
      </section>

      <MobileChartsAll/>

      <div id={styles.advertise_wrap}>
        <MobileAdvertise/>
      </div>

      <HotMovie/>

      <MobileNewTrends/>
      
      
      <div id={styles.empty}></div>
    </div>
  )
}
