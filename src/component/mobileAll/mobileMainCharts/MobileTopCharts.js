import React from 'react'
import styles from './MobileMainCharts.module.css'
import useProducts from '../../../hooks/useProducts'

export default function MobileTopCharts() {

  const charts =[
    {
      index:0,
      rank:'01',
      shot:'./images/topcharts0.jpg',
      txt1:'IDGAF',
      txt2:'Dua Lipa'
    },
    {
      index:1,
      rank:'02',
      shot:'./images/topcharts1.jpg',
      txt1:'See You Again',
      txt2:'Charlie Puth'
    },
    {
      index:2,
      rank:'03',
      shot:'./images/topcharts2.jpg',
      txt1:'STAY',
      txt2:'The Kid Laroi (feat. Justin Bieber)'
    },
    {
      index:3,
      rank:'04',
      shot:'./images/topcharts3.jpg',
      txt1:'Toxic',
      txt2:'BoyWithUke'
    }
  ]

  return (
    <section id={styles.mobileMainCharts}>
      <h2 className={styles.subtitle}>Top Charts</h2>
      <p className={styles.more}>More</p>
      <ul id={styles.mobileMainCharts_list}>
        {
          charts.map((item)=>(
            <li key={item.index}>
              <p className={styles.mobileMainCharts_rank}>{item.rank}</p>
              <img src={item.shot}/>
              <div className={styles.mobileMainCharts_txt}>
                <p className={styles.mobileMainCharts_txt1}>{item.txt1}</p>
                <p className={styles.mobileMainCharts_txt2}>{item.txt2}</p>
              </div>
              <i className="fa-solid fa-ellipsis-vertical"/>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
