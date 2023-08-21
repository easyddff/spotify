import React, { useEffect, useState } from 'react'
import styles from './mobileChartsAll.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';
import useProducts from '../../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';

export default function MobileChartsAll() {

  const chartsMenu=[
    {
      index:0,
      text:'Hot 100'
    },
    {
      index:1,
      text:'New Trends'
    },
    {
      index:2,
      text:'Weekly'
    },
    {
      index:3,
      text:'Song Breaker'
    },
    {
      index:4,
      text:'World Charts'
    }
  ]

  const [charts] = useProducts()

  const navigate=useNavigate()

  const [changeList, setChangeList]=useState(chartsMenu[0].text)
  const [selectList, setSelectList]=useState([])

  useEffect(()=>{
    setSelectList(charts.filter((item)=>(item.category===changeList)))
  },[charts,changeList])

  const [clickIndex, setClickIndex] = useState(chartsMenu[0].index)

  return (
      <section id={styles.mobileCharts_all}>
        <h2 className='hidden'>Mobile Charts All</h2>
        <ul id={styles.mobileCharts_menu}>
          <Swiper
            slidesPerView={3.2}
            spaceBetween={0}
            modules={[Scrollbar]}
            className="mySwiper"
          >
            {
              chartsMenu.map((item)=>(
                <SwiperSlide key={item.index}>
                  <li key={item.index}
                  onClick={()=>{
                    setChangeList(item.text)
                    setClickIndex(item.index)
                  }}
                  className={`${item.index===clickIndex && styles.selected}`}
                  >{item.text}
                  </li>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </ul>
        <div id={styles.mobileCharts_all_in}>
          <ul id={styles.mobileCharts_all_list}>
            {
              selectList.map((item)=>(
                <li key={item.id} 
                onClick={()=>{
                  navigate(`/mobileCharts/${item.name1}`)
                }}
                >
                  <p className={styles.mobileCharts_all_rank}>{item.rank}</p>
                  <img src={item.shot}/>
                  <div className={styles.mobileCharts_all_txt}>
                    <p className={styles.mobileCharts_all_txt1}>{item.name1}</p>
                    <p className={styles.mobileCharts_all_txt2}>{item.name2}</p>
                  </div>
                  <i className="fa-solid fa-ellipsis-vertical"/>
                </li>
              ))
            }
          </ul>
          <button id={styles.mobileCharts_all_more}>
            <img src='./images/mobile/right.png'/>
          </button>
        </div>
      </section>
  )
}
