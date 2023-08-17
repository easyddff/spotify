import React from 'react'
import styles from './MobiletopArtist.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
// import './styles.css';

import 'swiper/css';
import 'swiper/css/pagination';

import { Scrollbar } from 'swiper/modules';

export default function MobileTopArtist() {

  const artist = [
    {index:0,shot:'./images/artist0.jpg',txt1:'Dua Lipa',txt2:'123.6k'},
    {index:1,shot:'./images/artist1.jpg',txt1:'Marshmellow',txt2:'113.8k'},
    {index:2,shot:'./images/artist2.jpg',txt1:'BoyWithUke',txt2:'90.7k'},
    {index:3,shot:'./images/artist3.jpg',txt1:'Charlie Puth',txt2:'143.7k'},
    {index:4,shot:'./images/artist4.jpg',txt1:'Ariana Grande',txt2:'176.1k'}
  ]

  return (
    <section id={styles.topArtist}>
      <h2 className={styles.subtitle}>Top Artist</h2>
      <p className={styles.more}>More</p>
      <ul id={styles.tobArtist_list}>
        <Swiper
          slidesPerView={2.6}
          spaceBetween={0}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {
            artist.map((item)=>(
              <SwiperSlide>
                <li key={item.index}>
                  <img src={item.shot}/>
                  <p className={styles.artist_txt1}>{item.txt1}</p>
                  <p className={styles.artist_txt2}>Followers · {item.txt2}</p>
                </li>
              </SwiperSlide>
            ))
          }
        </Swiper>
        
      </ul>
    </section>
  )
}
