import React from 'react'
import styles from './home.module.css'
import ChartsSimple from '../component/chartsSimple/ChartsSimple'
import Genre from '../component/genre/Genre'
import NewTrends from '../component/chartsSimple/NewTrends'
import Sidebar from '../component/sidebar/Sidebar'
import Mainvisual from '../component/mainvisual/Mainvisual'
import TopArtist from '../component/topArtist/TopArtist'
import Advertise from '../component/advertise/Advertise'
import LiveEvent from '../component/liveEvent/LiveEvent'


export default function Home() {
  return (
    <>
      <div id={styles.main_wrap}>
        <Sidebar/>
        <div id={styles.main_in}>
          <Mainvisual/>
          <TopArtist/>
          <div id={styles.main_charts}>
            <ChartsSimple/>
            <NewTrends/>
          </div>
        </div> 
      </div>  

      <Advertise/>

      <div id={styles.visual_wrap}>
        <LiveEvent/>
        <Genre/>
      </div>
    </>
  )
}
