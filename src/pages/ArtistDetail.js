import React, { useEffect, useState } from 'react'
import styles from './artistDetail.module.css'
import Sidebar from '../component/sidebar/Sidebar'
import useProducts from '../hooks/useProducts'
import { useLocation, useParams } from 'react-router-dom'

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
          <div id={styles.artist_detail_main_wrap}>
            <section id={styles.artist_detail_main} key={item.id}>
              <img src={item.artist}/>
            </section>
          </div>
        ))
      }
    </div>
  )
}
