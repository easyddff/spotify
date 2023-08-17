import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'
import { useAuthContext } from '../context/AuthContext'
import { login, logout } from '../api/firebase'

export default function Header() {

  const skip=[
    {index:0, path:'#', text:'메인바로가기'},
    {index:1, path:'#', text:'본문바로가기'},
    {index:2, path:'#', text:'하단바로가기'},
  ]

  const main=[
    {index:0, path:'/charts', name:'Charts'},
    {index:1, path:'/dailymix', name:'Dailymix'},
    {index:2, path:'/artist', name:'Artist'},
    {index:3, path:'/podcasts', name:'Podcasts'},
  ]


  const [clickIndex, setClickIndex]=useState(null)

  const {user} = useAuthContext()
  console.log(user)

  return (
    <div id={styles.header_wrap}>
      <ul className="skipmenu_list">
        {
          skip.map((item)=>(
            <li key={item.index}><Link to={item.path} className='hidden'>{item.text}</Link></li>
          ))
        }
      </ul>
      <header id={styles.homeHeader}>
        <h1 id={styles.logo}>  
          <Link to='/' onClick={setClickIndex}>Logo</Link>
          <img src='/images/spotify_logo.png'/>
        </h1>
        <nav id={styles.mainmenu}>
          <h2 className='hidden'>Main menu</h2>
          <ul id={styles.mainmenu_list}>
            {
              main.map((item)=>(
                <li key={item.index} 
                  onClick={()=>{setClickIndex(item.index)}}
                  className={`${item.index===clickIndex && styles.selected}`}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
        <nav id={styles.setlog}>
          <h2 className='hidden'>Login & Setting</h2>
          
          {
            user ? 
            <>
              <div id={styles.userAll}>
                <p><img src={user.photoURL}/></p>
                <p id={styles.username}>{user.displayName}</p>
              </div>
              <button className={styles.setting} onClick={logout}>Logout</button>
            </>
            

            :

            <button className={styles.setting} onClick={login}>Login</button>
          }
        </nav>
      </header>
    </div>
  )
}
