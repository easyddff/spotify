import React, { useEffect } from 'react'
import styles from './mobileSearch.module.css'
import MobileRecently from '../../component/mobileAll/recently/MobileRecently'
import MobileAdvertise from '../../component/mobileAdvertise/MobileAdvertise'
import { useLocation } from 'react-router-dom'

export default function MobileSearch() {

  const genre=[
    {
      id:0, txt:'Mood', shot:'./images/charts_image/hot9.jpg'
    },
    {
      id:1, txt:'Trending', shot:'./images/charts_image/hot2.jpg'
    },
    {
      id:2, txt:'Indie', shot:'./images/charts_image/hot3.jpg'
    },
    {
      id:3, txt:'Soul', shot:'./images/charts_image/hot4.jpg'
    },
    {
      id:4, txt:'EDM', shot:'./images/charts_image/hot5.jpg'
    },
    {
      id:5, txt:'Equal', shot:'./images/charts_image/hot6.jpg'
    },
    {
      id:6, txt:'Trip', shot:'./images/charts_image/hot7.jpg'
    },
    {
      id:7, txt:'Pop', shot:'./images/charts_image/hot0.jpg'
    }
  ]

  const {pathname} = useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

  return (
    <div id={styles.search_wrap}>
      <div id={styles.search_form_wrap}>
        <form id={styles.search_form}>
          <input type='text' id={styles.search_input}></input>
          <i className="fa-solid fa-magnifying-glass"></i>
        </form>
      </div>

      <section id={styles.genre_search}>
        <h2 className={styles.genre_search_title}>Genre Search</h2>
        <p id={styles.genre_search_subtitle}>More Category</p>
        <ul id={styles.genre_search_list}>
          {
            genre.map((item)=>(
              <li key={item.id}>
                <p id={styles.genre_search_list_txt}>{item.txt}</p>
                <img src={item.shot}/>
              </li>
            ))
          }
        </ul>
      </section>

      <MobileRecently/>

      <div id={styles.search_mobilead}>
        <MobileAdvertise/>
      </div>
      
    </div>
  )
}
