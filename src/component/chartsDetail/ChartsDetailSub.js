import React, { useEffect, useState } from 'react'
import styles from './chartsDetailSub.module.css'
import { useParams } from 'react-router-dom'
import useProducts from '../../hooks/useProducts'
import { getProductDetail } from '../../api/firebase'

export default function ChartsDetailSub() {

  //const [charts] = useProducts()

  const {chartsDetail} = useParams()
  // console.log(chartsDetail)
  const [musicCharts, setMusicCharts] = useState({})

  useEffect(()=>{
    getProductDetail(chartsDetail).then((res)=>{
      setMusicCharts(res)
    })
    // const musicCharts=charts.filter((musicCharts)=>(musicCharts.id===chartsDetail))
    // setMusicCharts(musicCharts)
  },[chartsDetail])



  return (

    <>
          <section id={styles.charts_detail} key={musicCharts.id}>
            <h2 className='hidden'>Music Detail</h2>
            <div id={styles.charts_detail_in}>
              <img src={musicCharts.shot}/>
              <div id={styles.charts_detail_text}>
                <p id={styles.charts_detail_name}>Music</p>
                <p id={styles.charts_detail_title}>{musicCharts.name1}</p>
                <p id={styles.charts_detail_info}>
                  <span>{musicCharts.name2}</span> · {musicCharts.name2} · {musicCharts.name3} · {musicCharts.time}
                </p>
              </div>
            </div>
            <div id={styles.charts_info_btn}>
              <button><i className="fa-solid fa-play"/></button>
              <button>Follow</button>
              <button>Add Playlist</button>
            </div>
            <div id={styles.charts_info}>
              <div id={styles.charts_info_img}>
                <img src={musicCharts.artist}/>
              </div>
              <div id={styles.charts_info_text}>
                <p id={styles.charts_info_text1}>
                  Artist<br/>
                  <span>{musicCharts.artistName}</span>
                </p>
              </div>
            </div>
          </section>
    </>
  )
}
