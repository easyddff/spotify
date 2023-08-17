import React from 'react'
import styles from './mobileRecently.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// import './styles.css';

import 'swiper/css';
import 'swiper/css/pagination';

import { Scrollbar } from 'swiper/modules';

export default function Recently() {

  const recently = [
    {index:0, shot:'./images/mobile/recently0.jpg', txt1: 'Killing Me', txt2:'NOTD & Hastings'},
    {index:1, shot:'./images/mobile/recently1.jpg', txt1: 'Without you', txt2:'Avicii (feat. Sandro Cavazo)'},
    {index:2, shot:'./images/mobile/recently2.jpg', txt1: 'Honset', txt2:'NOTD & Lou Elliotte'},
    {index:3, shot:'./images/mobile/recently0.jpg', txt1: 'Killing Me', txt2:'NOTD & Hastings'},
    {index:4, shot:'./images/mobile/recently1.jpg', txt1: 'Without you', txt2:'Avicii (feat. Sandro Cavazo)'}
  ]

  return (
      <section id={styles.recently}>
        <h2 className={styles.subtitle}>Recently Played</h2>
        <p className={styles.more}>More</p>
        <ul id={styles.recently_list}>
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
              recently.map((item)=>(
                <SwiperSlide>
                  <li key={item.index}>
                    {/* className={styles.swiperMe} */}
                    <img src={item.shot}/>
                    <p className={styles.recently_txt1}>{item.txt1}</p>
                    <p className={styles.recently_txt2}>{item.txt2}</p>
                  </li>
                </SwiperSlide>
              ))
            }
        </Swiper>

          
        </ul>
      </section>
  )
}
