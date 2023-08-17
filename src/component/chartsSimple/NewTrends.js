import React from 'react'
import styles from './chartsSimple.module.css'

export default function NewTrends() {
  const rank=[
    {
      index:0,
      num:'01',
      shot:'./images/newtrends0.jpg',
      name1:'Easy On ME',
      name2:'Adele',
      name3:'Streaming · 12.3k',
    },
    {
      index:1,
      num:'02',
      shot:'./images/newtrends1.jpg',
      name1:'Vampire',
      name2:'Olivia Rodrigo',
      name3:'Streaming · 10.6k',
    },
    {
      index:2,
      num:'03',
      shot:'./images/newtrends2.jpg',
      name1:'Shivers',
      name2:'Ed Sheeran',
      name3:'Streaming · 7k',
    },
    {
      index:3,
      num:'04',
      shot:'./images/newtrends3.jpg',
      name1:'Circles',
      name2:'Post Malone',
      name3:'Streaming · 6.8k',
    },
  ]
    
  return (
    <section id={styles.topcharts}>
      <h2 id={styles.charts_title}>New Trends</h2>
      <p id={styles.charts_more}>See All</p>
      <ul id={styles.simple_list}>
        {
          rank.map((item)=>(
            <li key={item.index}>
              <div className={styles.simple_text}>
                <p className={styles.simple_rank}>{item.num}</p>
                <img src={item.shot}/>
                <div className={styles.simple_textin}>
                  <p className={styles.simple_text1}>{item.name1}</p>
                  <p className={styles.simple_text2}>{item.name2}</p>
                  <p className={styles.simple_text3}>{item.name3}</p>
                </div>
              </div>
              <i className="fa-regular fa-circle-play"></i>
            </li>
          ))
        }
      </ul>
    </section>
    
  )
}
