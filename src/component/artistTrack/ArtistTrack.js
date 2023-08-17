import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './artistTrack.module.css'
import useProducts from '../../hooks/useProducts'

export default function ArtistTrack() {
  const [charts] = useProducts()

  const {chartsDetail} = useParams()

  const [musicCharts, setMusicCharts] = useState([])

  useEffect(()=>{
    const musicCharts=charts.filter((item)=>(item.id===chartsDetail))
    setMusicCharts(musicCharts)
  },[charts])
  return (

    <>
      {
        musicCharts.map((item)=>(
          <section id={styles.artist_track} key={item.id}>
            <h2 id={styles.artist_track_title}>{item.artistName}'s Track</h2>
            <ul id={styles.artist_track_list}>
              <li key={item.id}>
                <div className={styles.artist_track_imtext}>
                  <img src={item.recentlyShot}/>
                  <div className={styles.artist_track_text}>
                    <p>{item.recentlyName}<br/><span>Streaming · 23.3K</span></p>
                  </div>
                </div>
                <div className={styles.artist_track_btn}>
                  <p className={styles.artist_track_add}>
                    <i className="fa-regular fa-square-plus"/> Add Playlist
                  </p>
                  <p className={styles.artist_track_time}>03:04</p>
                  <i className="fa-regular fa-circle-play"/>
                </div>
              </li>

              <li key={item.id}>
                <div className={styles.artist_track_imtext}>
                  <img src={item.recentlyShot}/>
                  <div className={styles.artist_track_text}>
                    <p>{item.recentlyName}<br/><span>Streaming · 23.3K</span></p>
                  </div>
                </div>
                <div className={styles.artist_track_btn}>
                  <p className={styles.artist_track_add}>
                    <i className="fa-regular fa-square-plus"/> Add Playlist
                  </p>
                  <p className={styles.artist_track_time}>03:04</p>
                  <i className="fa-regular fa-circle-play"/>
                </div>
              </li>

              <li key={item.id}>
                <div className={styles.artist_track_imtext}>
                  <img src={item.recentlyShot}/>
                  <div className={styles.artist_track_text}>
                    <p>{item.recentlyName}<br/><span>Streaming · 23.3K</span></p>
                  </div>
                </div>
                <div className={styles.artist_track_btn}>
                  <p className={styles.artist_track_add}>
                    <i className="fa-regular fa-square-plus"/> Add Playlist
                  </p>
                  <p className={styles.artist_track_time}>03:04</p>
                  <i className="fa-regular fa-circle-play"/>
                </div>
              </li>

              <li key={item.id}>
                <div className={styles.artist_track_imtext}>
                  <img src={item.recentlyShot}/>
                  <div className={styles.artist_track_text}>
                    <p>{item.recentlyName}<br/><span>Streaming · 23.3K</span></p>
                  </div>
                </div>
                <div className={styles.artist_track_btn}>
                  <p className={styles.artist_track_add}>
                    <i className="fa-regular fa-square-plus"/> Add Playlist
                  </p>
                  <p className={styles.artist_track_time}>03:04</p>
                  <i className="fa-regular fa-circle-play"/>
                </div>
              </li>

            </ul>
          </section>
        ))
      }
    </>
   
  )
}
