import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'
import { useAuthContext } from '../context/AuthContext'
import { login, logout } from '../api/firebase'
import { DarkModeContext } from '../component/context/DarkModeContext'

export default function Header({onDarkChange}) {

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
  
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)//DarkModeContext

  onDarkChange(darkMode)

  return (
    <div id={styles.header_wrap}
    style={darkMode? ({backgroundColor:'black'}):({backgroundColor:'white'})}>
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
                  <Link to={item.path}
                  style={darkMode? ({color:'white'}):({color:'#707070'})}>
                    {/* inline스타일이 최상위, select가 선택안됨 */}
                    {item.name}
                  </Link>
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
          <button id={styles.darkModeBtn} onClick={toggleDarkMode}>{darkMode? 'Light' : 'Dark'}</button>
        </nav>
        
      </header>
    </div>
  )
}
