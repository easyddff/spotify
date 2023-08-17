import React from 'react'
import styles from './liveEvent.module.css'

export default function LiveEvent() {
  const lives=[
    {
      index:0, 
      shot:'./images/live_main.jpg',
      date:'7월 15일',
      text1:'Saturday  8:00 PM',
      text2:'Have A Nice Trip 2023',
      text3:'Kintex, Seoul'
    },
    {
      index:1, 
      shot:'./images/live_sub0.jpg',
      date:'7월 14일',
      text1:'Tuesday 10:00 PM',
      text2:'Anxious',
      text3:'Club SHARP, Seoul'
    },
    {
      index:2, 
      shot:'./images/live_sub1.jpg',
      date:'7월 16일',
      text1:'Tuesday 10:00 PM',
      text2:'Peach Tree Rascals',
      text3:'Musinsa Garage, Seoul'
    },
    {
      index:3, 
      shot:'./images/live_sub2.jpg',
      date:'7월 17일',
      text1:'Tuesday 10:00 PM',
      text2:'Bloody Trip',
      text3:'Rolling Hall, Seoul'
    },
    {
      index:4, 
      shot:'./images/live_sub3.jpg',
      date:'7월 21일',
      text1:'Tuesday 10:00 PM',
      text2:'Smile Love Weekend',
      text3:'S Factory Rooftop, Seoul'
    },
  ]
  return (
        <section id={styles.live}>
          <h2 id={styles.live_title}>Live Event</h2>
          <p id={styles.live_more}>See All</p>
          <ul id={styles.live_list}>
            {
              lives.map((item)=>(
                <li key={item.index}>
                  <img src={item.shot}/>
                  <div className={styles.live_date}>{item.date}</div>
                  <div className={styles.live_text}>
                    <p className={styles.live_text1}>{item.text1}</p>
                    <p className={styles.live_text2}>{item.text2}</p>
                    <p className={styles.live_text3}>{item.text3}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </section>
  )
}
