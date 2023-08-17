import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from './mobileHeader.module.css'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import MobileAdvertise from '../../component/mobileAdvertise/MobileAdvertise'

export default function MobileHeader() {

  const profile = [
    {
      index:0,
      name:'Data Saver',
      pathname:'/',
      subList:[]
    },
    {
      index:1,
      name:'Setting',
      pathname:'/',
      subList:[{index:0, name:'Audio Setting',pathname:'/'},
              {index:1, name:'Video Setting',pathname:'/'},
              {index:2, name:'Language',pathname:'/'}]
    },
    {
      index:2,
      name:'Your Infomation',
      pathname:'/',
      subList:[{index:0, name:'Follower & Following',pathname:'/'},
              {index:1, name:'Private Session',pathname:'/'},
              {index:2, name:'History',pathname:'/'}]
    },
    {
      index:3,
      name:'Connect Device',
      pathname:'/',
      subList:[{index:0,name:'Local Device',pathname:'/'},
              {index:1,name:'Device Setting',pathname:'/'}]
    },
    {
      index:4,
      name:'Storage Space',
      pathname:'/',
      subList:[]
    },
    {
      index:5,
      name:'Local File',
      pathname:'/',
      subList:[]
    }
  ]

  const icon = useRef()
  const menuAll = useRef()
  const closeBtn = useRef()

  let closeHeight=useMemo(()=>(40),[])

  // console.log(closeHeight)
  useEffect(()=>{
    menuAll.current.style.left='100vw'
    menuAll.current.style.display='none'
  },[])

  const menuOpen=useCallback(()=>{
    gsap.set('body,html',{overflow:'hidden'})
    menuAll.current.style.display='block'
    gsap.to(menuAll.current,{left:0, duration:0.5, ease:'power1.out'})
  },[])
  const menuClose=useCallback(()=>{
    gsap.to(menuAll.current,{left:'100vw', duration:0.5, ease:'power2.out',onComplete:()=>{
      menuAll.current.style.display='none'
      gsap.set('body.html',{overflow:'visible'})
    }})
  },[])

  const [openSub, setOpenSub] = useState(null)

  return (
    <header id={styles.mobileHeader}>
      <h1 className='hidden'>Spotify</h1>
      <p id={styles.hello}>Hello, Eeeeasy!</p>
      <ul id={styles.profile}>
        <li><i className="fa-regular fa-bell"/></li>
        <li ref={icon} onClick={menuOpen}></li>
      </ul>
      <nav id={styles.profile_menu_wrap} ref={menuAll}>
        <div id={styles.profile_menu}>
          <div id={styles.profile_menu_top}>
            <p id={styles.back}><i className="fa-solid fa-xmark" ref={closeBtn} onClick={menuClose}/></p>
            <p id={styles.profile_menu_title}>Account</p>
            <button id={styles.profile_login}>Logout</button>
          </div>
          <div id={styles.profile_detail}>
            <div id={styles.profile_detail_in}>
              <div id={styles.profile_detail_img}></div>
              <div id={styles.profile_detail_txt}>
                <p id={styles.profile_detail_id}>Eeeeasy</p>
                <p id={styles.profile_detail_subid}>@Eeeeasy-ov3ku</p>
              </div>
            </div>
            <img src='./images/mobile/right.png'/>
          </div>
          <p id={styles.profile_menu_subtitle}>Your Menu</p>
          <ul id={styles.profile_menu_list}>
            {
              profile.map((item)=>(
                <li key={item.index}
                className={`${item.index===openSub && styles.selected}`}
                style={
                  // console.log(item.subList.length)
                  item.index===openSub ? {height:closeHeight+(closeHeight*item.subList.length)} : {height:closeHeight}
                  // item.index===openSub ? {height:'12vw'+('12vw'*item.subList.length)} : {height:'12vw'}
                  // item.index===openSub ? {height:'50vw'} : {height:'12vw'}
                }
                onClick={(e)=>{
                  
                  //let activeIndex= 
                  setOpenSub(item.index === openSub ? '' : item.index)
                
                }
              }
                >
                  {
                    item.subList.length<1 ? 
                    <>
                      {item.name}
                    </>:
                    <>
                      {item.name}<img src='./images/mobile/right.png'/>
                      <ul className={styles.profile_submenu_list}>
                        {
                          item.subList.map((subitem)=>(
                            <li key={subitem.index} >{subitem.name}</li>
                          ))
                        }
                      </ul>
                    </>
                  }
                </li>
              ))
            }
            
          </ul>

          <MobileAdvertise/>
        </div>
      </nav>
    </header>
  )
}
