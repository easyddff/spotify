import React from 'react'
import styles from './recentlyMusic.module.css'

export default function RecentlyMusic() {

  const list=[
    {
      index:0,
      shot:'/images/charts_image/hot5.jpg',
      name1:'Without You',
      name2:'Avicii'
    },
    {
      index:1,
      shot:'/images/charts_image/hot6.jpg',
      name1:'Vampire',
      name2:'Olivia Rodrigo'
    },
    {
      index:2,
      shot:'/images/charts_image/hot7.jpg',
      name1:'2002',
      name2:'Anne-Marie'
    },
    {
      index:3,
      shot:'/images/charts_image/hot8.jpg',
      name1:'Steal The Show',
      name2:'Lauv'
    },
    {
      index:4,
      shot:'/images/charts_image/hot9.jpg',
      name1:'Last Night',
      name2:'Morgan Wallen'
    },
  ]

  return (
    <section id={styles.recently_music}>
      <h2 id={styles.recently_music_title}>Recently Music</h2>
      <p id={styles.recently_music_more}>See All</p>
      <ul id={styles.recently_music_list}>
        {
          list.map((item)=>(
            <li key={item.index}>
              <img src={item.shot}/>
              <p className={styles.recently_music_text1}>{item.name1}</p>
              <p className={styles.recently_music_text2}>{item.name2}</p>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
