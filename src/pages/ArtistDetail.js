import React, { useEffect, useState } from 'react'
import styles from './artistDetail.module.css'
import Sidebar from '../component/sidebar/Sidebar'
import useProducts from '../hooks/useProducts'
import { useLocation, useParams } from 'react-router-dom'
import ChartsAdvertise from '../component/chartsAd/ChartsAdvertise'
import RecentlyArtist from '../component/recentlyArtist/RecentlyArtist'

export default function ArtistDetail() {

  const [artist]=useProducts()
  const {artistDetail}=useParams()

  const [artistInfo, setArtistInfo]=useState([])

  useEffect(()=>{
    const artistInfo=artist.filter((item)=>(item.artistName===artistDetail))
    setArtistInfo(artistInfo)
  },[artist])

  const {pathname} = useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

  return (
    <div id={styles.artist_detail_wrap}>
      <div id={styles.artist_detail_side}>
        <Sidebar/>
      </div>
      {
        artistInfo.map((item)=>(
          <div id={styles.artist_detail_main_wrap} key={item.id}>
            <section id={styles.artist_detail_main}>
              <img src={item.artist}/>
              <div id={styles.artist_detail_txt}>
                <p id={styles.artist_detail_txt1}>{item.name2}</p>
                <p id={styles.artist_detail_txt2}>{item.name3}</p>
                <button>Follow</button>
              </div>
            </section>


            <section id={styles.artist_track}>
              <h2 className={styles.artist_track_title}>{item.artistName}'s Track</h2>
              <ul id={styles.artist_track_list}>
                <li>
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

                <li>
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

                <li>
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

                <li>
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

              <section id={styles.artist_album}>
                <h2 className={styles.artist_track_title}>{item.artistName}'s Album</h2>
                <p className={styles.artist_more}>See All</p>
                <ul id={styles.artist_album_list}>
                  <li><img src={item.shot}/></li>
                  <li><img src={item.shot}/></li>
                  <li><img src={item.shot}/></li>
                  <li><img src={item.shot}/></li>
                  <li><img src={item.shot}/></li>
                </ul>
              </section>

              <section id={styles.artist_live}>
                <h2 className={styles.artist_track_title}>Live Schedule</h2>
                <p className={styles.artist_more}>See All</p>
                <ul id={styles.artist_live_list}>
                  <li>
                    <div className={styles.artist_live_date}>
                      <p className={styles.artist_live_date_txt1}>July <span>25</span></p>
                    </div>
                    <div className={styles.artist_live_datein}>
                      <p className={styles.artist_live_date_txt2}>Beach Fossils</p>
                      <p className={styles.artist_live_date_txt3}>8:00 Pm · LakeWood, Atlanta</p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.artist_live_date}>
                      <p className={styles.artist_live_date_txt1}>July <span>28</span></p>
                    </div>
                    <div className={styles.artist_live_datein}>
                      <p className={styles.artist_live_date_txt2}>Beach Fossils</p>
                      <p className={styles.artist_live_date_txt3}>8:00 Pm · LakeWood, Atlanta</p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.artist_live_date}>
                      <p className={styles.artist_live_date_txt1}>July <span>31</span></p>
                    </div>
                    <div className={styles.artist_live_datein}>
                      <p className={styles.artist_live_date_txt2}>Beach Fossils</p>
                      <p className={styles.artist_live_date_txt3}>8:00 Pm · LakeWood, Atlanta</p>
                    </div>
                  </li>
                </ul>
              </section>
              <ChartsAdvertise/>
              <div id={styles.artist_recently_wrap}>
                <RecentlyArtist/>
              </div>
          </div>
        ))
      }
      

          
        
    </div>
  )
}
