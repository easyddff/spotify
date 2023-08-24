import React from 'react'
import styles from './sidebar.module.css'

export default function Sidebar({onDarkIn}) {

  const dark=onDarkIn

  return (
    <section id={styles.sidebar}>
      <h2 className='hidden'>Side</h2>
          <div id={styles.search}>
            <h3 className='hidden'>Search</h3>
            <p className={styles.side_title}>
              SEARCH
            </p>
            <form id={styles.search_form}>
              <input type='text' id={styles.search_input}
              style={dark? ({color:'#414141'}):({color:'#d9d9d9'})}></input>
              <i className="fa-solid fa-magnifying-glass"></i>
            </form>
          </div>

          <div id={styles.side_menu}>
            <h3 className='hidden'>Side Menu</h3>
            <p className={styles.side_title}>MENU</p>
            <ul id={styles.side_menu_list}>
              <li className={styles.selected}><i className="fa-solid fa-earth-americas"></i>Exoplorer</li>
              <li><i className="fa-brands fa-spotify"></i>Daily Mix</li>
              <li><i className="fa-solid fa-user"></i>Streaming</li>
              <li><i className="fa-solid fa-headphones"></i>Genres</li>
              <li><i className="fa-solid fa-podcast"></i>Live Event</li>
            </ul>
          </div>

          <div id={styles.side_libraly}>
            <h3 className='hidden'>Side Libraly</h3>
            <p className={styles.side_title}>LIBRALY</p>
            <ul id={styles.side_libraly_list}>
              <li><i className="fa-regular fa-heart"></i>Favourites</li>
              <li><i className="fa-brands fa-spotify"></i>Local</li>
              <li><i className="fa-brands fa-spotify"></i>Recent</li>
            </ul>
          </div>
          <div id={styles.side_playlist}>
            <h3 className='hidden'>Side Playlist</h3>
            <p className={styles.side_title}>PLAYLIST</p>
            <ul id={styles.side_playlist_in}>
              <li><i className="fa-regular fa-circle-play"></i>My Playlist</li>
              <li><i className="fa-regular fa-square-plus"></i>Add Playlist</li>
              <li><i className="fa-regular fa-square-plus"></i>Add Playlist</li>
              <li><i className="fa-regular fa-square-plus"></i>Add Playlist</li>
            </ul>
          </div>
          <div id={styles.side_premium}>
            <h3 className='hidden'>Premiup Membership</h3>
            <div id={styles.premium_up}>
              <div id={styles.premium_date}>
                <p>1 Month Free</p>
              </div>
              <div id={styles.premium_text}>
                <p id={styles.premium_name}>Premium</p>
                <p id={styles.premium_in}>Premium 1 month free · 
                  My Playlist · Everyday Free download
                  Offline Free · Free Streaming</p>
              </div>
            </div>
            <div id={styles.premium_more}>
              <button>Subscribe</button>
              <p>More <i className="fa-solid fa-arrow-right"></i></p>
            </div>
          </div>

        </section>
  )
}
