import React from 'react'
import styles from './hotMovie.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Scrollbar } from 'swiper/modules';

export default function HotMovie() {

  const hotMovie = [
    {index:0,shot:'./images/mobile/hotmovie0.jpg',txt1:'Dua Lipa',txt2:'123.6k'},
    {index:1,shot:'./images/mobile/hotmovie1.jpg',txt1:'Marshmellow',txt2:'113.8k'},
    {index:2,shot:'./images/mobile/hotmovie0.jpg',txt1:'BoyWithUke',txt2:'90.7k'},
    {index:3,shot:'./images/mobile/hotmovie1.jpg',txt1:'Charlie Puth',txt2:'143.7k'},
    {index:4,shot:'./images/mobile/hotmovie0.jpg',txt1:'Ariana Grande',txt2:'176.1k'}
  ]

  return (
    <section id={styles.hotMovie}>
      <h2 className={styles.subtitle}>Hot Movie</h2>
      <p className={styles.more}>More</p>
      <ul id={styles.hotMovie_list}>
        <Swiper
          slidesPerView={1.7}
          spaceBetween={-10}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {
            hotMovie.map((item)=>(
              <SwiperSlide>
                <li key={item.index}>
                  <img src={item.shot}/>
                  <p className={styles.hotMovie_txt1}>{item.txt1}</p>
                  <p className={styles.hotMovie_txt2}>Followers · {item.txt2}</p>
                </li>
              </SwiperSlide>
            ))
          }
        </Swiper>
        
      </ul>
    </section>
  )
}
