import React from 'react'
import styles from './chartsSimple.module.css'
import { Link } from 'react-router-dom'

export default function Charts() {

  const rank=[
    {
      index:0,
      num:'01',
      shot:'./images/topcharts0.jpg',
      name1:'IDGAF',
      name2:'Dua Lipa',
      name3:'Streaming · 31.2k',
    },
    {
      index:1,
      num:'02',
      shot:'./images/topcharts1.jpg',
      name1:'See You Again',
      name2:'Charlie Puth',
      name3:'Streaming · 27.9k',
    },
    {
      index:2,
      num:'03',
      shot:'./images/topcharts2.jpg',
      name1:'Stay',
      name2:'The Kid Laroi',
      name3:'Streaming · 25.1k',
    },
    {
      index:3,
      num:'04',
      shot:'./images/topcharts3.jpg',
      name1:'Toxic',
      name2:'BoyWithUke',
      name3:'Streaming · 15.7k',
    },
  ]
    
  return (
    <section id={styles.topcharts}>
      <h2 id={styles.charts_title}>Top Charts</h2>
      <Link to='/charts'><p id={styles.charts_more}>See All</p></Link>
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
