import React from 'react'
import styles from './recentlyArtist.module.css'
import { Link } from 'react-router-dom'

export default function RecentlyArtist() {
  const artist=[
    {
      index:0,
      shot:'/images/artist0.jpg', 
      name1:'Dua Lipa',
      name2:'Follower ·123.6k'
    },
    {
      index:1,
      shot:'/images/artist1.jpg', 
      name1:'Marshmellow',
      name2:'Follower ·101.2k'
    },
    {
      index:2,
      shot:'/images/artist2.jpg', 
      name1:'BoyWithUke',
      name2:'Follower ·80.3k'
    },
    {
      index:3,
      shot:'/images/artist3.jpg', 
      name1:'Charlie Puth',
      name2:'Follower ·143.8k'
    },
    {
      index:4,
      shot:'/images/artist4.jpg', 
      name1:'Ariana Grande',
      name2:'Follower ·225.1k'
    },
  ]
  return (
    <section id={styles.recently_artist}>
      <h2 id={styles.recently_artist_title}>Recently Artist</h2>
      <Link to='/artist'><p id={styles.recently_artist_more}>See All</p></Link>
      <ul id={styles.recently_artist_list}>
        {
          artist.map((item)=>(
            <li key={item.index}>
              <div className={styles.recently_artist_img}>
                <img src={item.shot}/>
              </div>
              <p className={styles.recently_artist_text1}>{item.name1}</p>
              <p className={styles.recently_artist_text2}>{item.name2}</p>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
