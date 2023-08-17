import React from 'react'
import styles from './footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {

  const snslogo=[
    {index:0, logo:"fa-brands fa-youtube"},
    {index:1, logo:"fa-brands fa-instagram"},
    {index:2, logo:"fa-brands fa-facebook-f"},
    {index:3, logo:"fa-brands fa-twitter"}
  ]

  const footerlist1=[
    {index:0, path:'/info', name:'Audio & Subtitles'},
    {index:1, path:'/info', name:'Media Center'},
    {index:2, path:'/info', name:'Privacy'},
    {index:3, path:'/info', name:'Contact Us'}
  ]
  const footerlist2=[
    {index:0, path:'/info', name:'Audio Description'},
    {index:1, path:'/info', name:'Jobs'},
    {index:2, path:'/info', name:'Investor Relations'},
    {index:3, path:'/info', name:'Term of Use'}
  ]
  const footerlist3=[
    {index:0, path:'/info', name:'Subtitles'},
    {index:1, path:'/info', name:'Media Center2'},
    {index:2, path:'/info', name:'Privacy2'},
    {index:3, path:'/info', name:'Contact Us2'}
  ]

  return (
    <div id={styles.footer_wrap}>
      <footer id={styles.foot}>
        <section id={styles.footer_top}>
          <h2 className='hidden'>Footer</h2>
          <img src='/images/spotify_logo.png'/>
          <ul id={styles.sns}>
            {
              snslogo.map((item)=>(
                <li key={item.index}><i className={item.logo}></i></li>
              ))
            }
          </ul>
        </section>
        <nav id={styles.footer_down}>
          <h2 className='hidden'>Information</h2>
          <ul className={styles.footer_list}>
            
            {
              footerlist1.map((item)=>(
                <li key={item.index}><Link to={item.path}>{item.name}</Link></li>
              ))
            }
          </ul>
          <ul className={styles.footer_list}>
            {
              footerlist2.map((item)=>(
                <li key={item.index}><Link to={item.path}>{item.name}</Link></li>
              ))
            }
          </ul>
          <ul className={styles.footer_list}>
            {
              footerlist3.map((item)=>(
                <li key={item.index}><Link to={item.path}>{item.name}</Link></li>
              ))
            }
          </ul>
          
        </nav>
      </footer>
    </div>
  )
}
