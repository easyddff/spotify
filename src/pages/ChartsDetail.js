import React, { useEffect } from 'react'
import styles from './chartsDetail.module.css'
import Sidebar from '../component/sidebar/Sidebar'
import ChartsDetailSub from '../component/chartsDetail/ChartsDetailSub'
import ArtistTrack from '../component/artistTrack/ArtistTrack'
import ChartsAdvertise from '../component/chartsAd/ChartsAdvertise'
import RecentlyArtist from '../component/recentlyArtist/RecentlyArtist'
import RecentlyMusic from '../component/recentlyMusic/RecentlyMusic'
import { useLocation } from 'react-router-dom'

export default function ChartsDetail() {
  const {pathname} = useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
  return (
    <div id={styles.charts_detail_wrap}>
      <div id={styles.charts_detail_side}>
        <Sidebar/>
      </div>
      <div id={styles.charts_detail_main}>
        <ChartsDetailSub/>
        <ArtistTrack/>
        <RecentlyArtist/>
        <ChartsAdvertise/>
        <RecentlyMusic/>
      </div>
    </div>
  )
}
