import React from 'react'
import styles from './MobileMainCharts.module.css'

export default function MobileNewTrends() {

  const charts =[
    {
      index:0,
      rank:'01',
      shot:'./images/newtrends0.jpg',
      txt1:'Easy On ME',
      txt2:'Adele'
    },
    {
      index:1,
      rank:'02',
      shot:'./images/newtrends1.jpg',
      txt1:'Vampire',
      txt2:'Olivia Rodrig'
    },
    {
      index:2,
      rank:'03',
      shot:'./images/newtrends2.jpg',
      txt1:'Shivers',
      txt2:'Ed Sheeran'
    },
    {
      index:3,
      rank:'04',
      shot:'./images/newtrends3.jpg',
      txt1:'Circles',
      txt2:'Post Malone'
    }
  ]

  return (
    <section id={styles.mobileMainCharts}>
      <h2 className={styles.subtitle}>New Trends</h2>
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
