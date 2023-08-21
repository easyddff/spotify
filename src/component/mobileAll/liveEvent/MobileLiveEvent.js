import React from 'react'
import styles from './mobileLiveEvent.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// import './styles.css';

import 'swiper/css';
import 'swiper/css/pagination';

import { Scrollbar } from 'swiper/modules';

export default function MobileLiveEvent() {

  const live = [
    {
      index:0,
      date:'7월 15일',
      txt1:'SAT 8:00 PM',
      txt2:'Have A Nice Trip 2033',
      shot:'./images/live_main.jpg'
    },
    {
      index:1,
      date:'7월 14일',
      txt1:'TUE 10:00 PM',
      txt2:'Anxious',
      shot:'./images/live_sub0.jpg'
    },
    {
      index:2,
      date:'7월 16일',
      txt1:'TUE 10:00 PM',
      txt2:'Peach Tree Rascals',
      shot:'./images/live_sub1.jpg'
    },
    {
      index:3,
      date:'7월 17일',
      txt1:'TUE 10:00 PM',
      txt2:'Bloody Trip',
      shot:'./images/live_sub2.jpg'
    },
    {
      index:4,
      date:'7월 21일',
      txt1:'TUE 10:00 PM',
      txt2:'Smile Love Weekend',
      shot:'./images/live_sub3.jpg'
    },
  ]

  return (
    <section id={styles.mobile_live}>
      <h2 className={styles.subtitle}>Live Event</h2>
      <p className={styles.more}>More</p>
      <ul id={styles.mobile_live_list}>
        <Swiper
          // scrollbar={{
          //   hide: true,
          // }}
          slidesPerView={2.2}
          spaceBetween={15}
          modules={[Scrollbar]}
          className="mySwiper"
        >
        {
          live.map((item)=>(
            <SwiperSlide>
            <li key={item.index}>
              {/* <img src={item.shot}/> */}
              <div className={styles.mobile_live_date}>{item.date}</div>
              <p className={styles.mobile_live_txt1}>{item.txt1}</p>
              <p className={styles.mobile_live_txt2}>{item.txt2}</p>
            </li>
            </SwiperSlide>
          ))
        }
        </Swiper>
      </ul>
    </section>
  )
}
