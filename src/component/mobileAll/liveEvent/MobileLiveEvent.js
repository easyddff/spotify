import React from 'react'
import styles from './mobileLiveEvent.module.css'

export default function MobileLiveEvent() {

  const live = [
    {
      index:0,
      date:'7월 15일',
      txt1:'SAT 8:00 PM',
      txt2:'Have A Nice Trip 2033'
    },
    {
      index:1,
      date:'7월 14일',
      txt1:'TUE 10:00 PM',
      txt2:'Anxious'
    },
    {
      index:2,
      date:'7월 16일',
      txt1:'TUE 10:00 PM',
      txt2:'Peach Tree Rascals'
    },
    {
      index:3,
      date:'7월 17일',
      txt1:'TUE 10:00 PM',
      txt2:'Bloody Trip'
    },
    {
      index:4,
      date:'7월 21일',
      txt1:'TUE 10:00 PM',
      txt2:'Smile Love Weekend'
    },
  ]

  return (
    <section id={styles.mobile_live}>
      <h2 className={styles.subtitle}>Live Event</h2>
      <p className={styles.more}>More</p>
      <ul id={styles.mobile_live_list}>
        {
          live.map((item)=>(
            <li key={item.index}>
              <div className={styles.mobile_live_date}>{item.date}</div>
              <p className={styles.mobile_live_txt1}>{item.txt1}</p>
              <p className={styles.mobile_live_txt2}>{item.txt2}</p>
            </li>
          ))
        }
        
      </ul>
    </section>
  )
}
