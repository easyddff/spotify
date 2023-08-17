import React from 'react'
import styles from './topartist.module.css'
import { Link } from 'react-router-dom'

export default function TopArtist() {

  const art=[
    {index:0, shot:'./images/artist0.jpg', name:'Dua Lipa'},
    {index:1, shot:'./images/artist1.jpg', name:'Marshmellow'},
    {index:2, shot:'./images/artist2.jpg', name:'BoyWithUke'},
    {index:3, shot:'./images/artist3.jpg', name:'Charlie Puth'},
    {index:4, shot:'./images/artist4.jpg', name:'Ariana Grande'},
  ]

  return (
          <section id={styles.tob_artist}>
            <h2 id={styles.artist_title}>Top Artist</h2>
            <Link to='/artist'><p id={styles.artist_more}>See All</p></Link>
            <ul id={styles.artist_list}>
              {
                art.map((item)=>(
                  <li key={item.index}>
                    <img src={item.shot}/>
                    <p>{item.name}</p>
                  </li>
                ))
              }
            </ul>
          </section>
  )
}
