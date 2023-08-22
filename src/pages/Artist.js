import React, { useEffect, useState } from 'react'
import styles from './artist.module.css'
import Sidebar from '../component/sidebar/Sidebar'
import ArtistMain from '../component/artistMain/ArtistMain'
import ChartsAdvertise from '../component/chartsAd/ChartsAdvertise'
import { Navigate, useNavigate } from 'react-router-dom'
import useArtist from '../hooks/useArtist'


export default function Artist() {

  const [artist]=useArtist()

  const navigate=useNavigate()

  const artistMenu=[
    {
      index:0,
      text:'All'
    },
    {
      index:1,
      text:'Pop'
    },
    {
      index:2,
      text:'Hiphop'
    },
    {
      index:3,
      text:'EDM'
    },
    {
      index:4,
      text:'Rock'
    }
  ]
  const [changeArtist, setChangeArtist]=useState(artistMenu[0].text)
  

  const [selectArtist, setSelectArtist]=useState([])
  
  useEffect(()=>{
    setSelectArtist(artist.filter((item)=>(item.category===changeArtist)))
  },[artist,changeArtist])

  const [clickIndex, setClickIndex]=useState(artistMenu[0].index)

  return (
    <div id={styles.artist_wrap}>
      <div id={styles.artist_side}>
        <Sidebar/>
      </div>
      <div id={styles.artist_main_wrap}>
        <ArtistMain/>
        <section id={styles.artist_foryou}>
          <h2 id={styles.artist_foryou_title}>Made For Your Artist</h2>
          <ul id={styles.artist_foryou_list}>
            <li>
              <img src='./images/artist_add.jpg'/>
              <p>Add Your Artist</p>
              <i className="fa-solid fa-circle-plus"/>
            </li>
            <li><img src='./images/artist0.jpg'/></li>
            <li><img src='./images/artist10.jpg'/></li>
            <li><img src='./images/artist9.jpg'/></li>
          </ul>
        </section>
        <ChartsAdvertise/>
        <section id={styles.artist_all}>
          <h2 className='hidden'>All Artist</h2>
          <div id={styles.artist_all_menu}>
            <ul id={styles.artist_all_menu_list}>
              {
                artistMenu.map((item)=>(
                  <li key={item.index} onClick={()=>{
                    setChangeArtist(item.text)
                    setClickIndex(item.index)
                  }}
                  className={`${item.index===clickIndex && styles.selected}`}
                  >
                    {item.text}
                  </li>
                ))
              }
            </ul>
          </div>
          <div id={styles.artist_all_list_wrap}>
            <ul id={styles.artist_all_list}>
              {
                selectArtist.map((item)=>(
                  <li key={item.id} onClick={
                    ()=>{
                      navigate(`/artist/${item.artistName}`)
                    }
                  }>
                    <div className={styles.artist_all_img}>
                      <img src={item.artist}/>
                    </div>
                    <p className={styles.artist_all_text1}>{item.artistName}</p>
                    <p className={styles.artist_all_text2}>{item.text}</p>
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
