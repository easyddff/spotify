import React from 'react'
import styles from './genre.module.css'

export default function Genre() {
  const content=[
    {
      index:0, 
      shot:'./images/genre0.jpg',
      name1:'Steal The Show (From “Elemental”)', 
      name2:'Lauv',
      name3:'Streaming · 9.2K',
      time:'03:12'
    },
    {
      index:1, 
      shot:'./images/genre1.jpg',
      name1:'I Don’t Think That I Like Her', 
      name2:'Charlie Puth',
      name3:'Streaming · 18K',
      time:'03:09'
    },
    {
      index:2, 
      shot:'./images/genre2.jpg',
      name1:'Abcdefu', 
      name2:'GAYLE',
      name3:'Streaming · 20.5K',
      time:'02:49'
    },
    {
      index:3, 
      shot:'./images/genre3.jpg',
      name1:'Señorita', 
      name2:'Shawn Mendes & Camila Cabello',
      name3:'Streaming · 41.3K',
      time:'03:11'
    }
  ]
  
  return (
    <section id={styles.genre}>
      <h2 id={styles.genre_title}>Genre</h2>
      <p id={styles.genre_more}>See All</p>
      <ul id={styles.genre_list}>
        {
          content.map((item)=>(
          <li key={item.index}>
            <div className={styles.genre_text}>
              <img src={item.shot}/>
              <div className={styles.genre_text_in}>
                <p className={styles.genre_text1}>{item.name1}</p>
                <p className={styles.genre_text2}>{item.name2}</p>
                <p className={styles.genre_text3}>{item.name3}</p>
              </div>
            </div>
            <div className={styles.genre_play}>
              <p className={styles.genre_play1}>{item.time}</p>
              <i className="fa-regular fa-circle-play"></i>
            </div>
          </li>
          ))
        }
      </ul>

    </section>
  )
}
