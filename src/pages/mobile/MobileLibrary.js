import React from 'react'
import styles from './mobileLibrary.module.css'

export default function MobileLibrary() {

  const playList = [
    {
      index:0, txt1:'Favorite PlayList', txt2:'auto play'
    },
    {
      index:1, txt1:'Pop', txt2:'auto play'
    },
    {
      index:2, txt1:'Avicii', txt2:'auto play'
    },
    {
      index:3, txt1:'Hiphop', txt2:'auto play'
    },
    {
      index:4, txt1:'Piano', txt2:'auto play'
    },
    {
      index:5, txt1:'Game', txt2:'auto play'
    },
    {
      index:6, txt1:'Need', txt2:'auto play'
    },
    {
      index:7, txt1:'Elec,Tobu', txt2:'auto play'
    },
  ]

  return (
    <div id={styles.mobileLibrary_wrap}>
      <section id={styles.mobileLibrary}>
        <h2 id={styles.mobileLibrary_title}>Library</h2>
        <ul id={styles.mobileLibrary_list}>
          {
            playList.map((item)=>(
              <li key={item.index}>
                <div id={styles.mobileLibrary_img}></div>
                <div id={styles.mobileLibrary_txt}>
                  <p id={styles.mobileLibrary_txt1}>{item.txt1}</p>
                  <p id={styles.mobileLibrary_txt2}>{item.txt2}</p>
                </div>
                <i className="fa-solid fa-ellipsis-vertical"/>
              </li>
            ))
          }

          
        </ul>
      </section>
    </div>
  )
}
