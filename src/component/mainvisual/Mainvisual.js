import React, { useCallback, useEffect,  useRef, useState } from 'react'
import styles from './mainvisual.module.css'
import { gsap } from 'gsap'

export default function Mainvisual() {

  const txt=[
    {
      index:0, 
      txt1:'STAY', 
      txt2:'The Kid Laroi (feat. Justin Bieber)', 
      txt3:'63Million Plays',
      shot:'./images/main0.jpg',
      dot:[]
    },
    {
      index:1, 
      txt1:'IDGAF', 
      txt2:'Dua Lipa', 
      txt3:'73Million Plays',
      shot:'./images/main1.jpg',
      dot:[]
    },
    {
      index:2, 
      txt1:'See You Again', 
      txt2:'Charli Puth', 
      txt3:'69Million Plays',
      shot:'./images/main2.jpg',
      dot:[]
    },
    {
      index:3, 
      txt1:'Toxic', 
      txt2:'BoyWithUke', 
      txt3:'52Million Plays',
      shot:'./images/main3.jpg',
      dot:[]
    },
    {
      index:4, 
      txt1:'Easy On Me', 
      txt2:'Adele', 
      txt3:'56Million Plays',
      shot:'./images/main4.jpg',
      dot:[]
    }
  ]

  const textbox = useRef([])
  const mainImg = useRef([])
  const listenLi=useRef([])
  const dotLi=useRef([])
  const btn = useRef()

  let stopNext=false
  let timer=null
  let nextIndex=null
  let currentIndex=0
  let selectedDot=null

  
  useEffect(()=>{
    for(const item of mainImg.current){
      item.style.opacity=0
      item.style.left='1100px'
    }
    mainImg.current[0].style.opacity=1
    mainImg.current[0].style.left=0

    for(const item of textbox.current){
      item.style.opacity=0
    }
    textbox.current[0].style.opacity=1
    activeDot(0)

    timer=setInterval(autoDot, 3000);
    return ()=>{
      clearInterval(timer)
    }
  },[])

  function autoDot(){
    nextIndex=currentIndex+1
    if(nextIndex>=5){
      nextIndex=0;
    }
    activeDot(nextIndex)
    dotMusic(nextIndex)
    
  }

  function overDot(index){
    activeDot(index)
    dotMusic(index)
  }

  function activeDot(index){
    if(selectedDot!==null && selectedDot!==dotLi.current[index]){
      selectedDot.classList.remove(`${styles.selected}`)
    }
    if(selectedDot!==dotLi.current[index]){
      selectedDot=dotLi.current[index]
      selectedDot.classList.add(`${styles.selected}`)
    }
  }
  
  function dotMusic(index){
    let imgWidth=mainImg.current[index].offsetWidth
    
    gsap.set(listenLi.current[index].children,{opacity:0})

    gsap.to(mainImg.current[currentIndex],{left:-imgWidth, opacity:0, duration:0.7, ease:'power1.out'})
    gsap.set(mainImg.current[index],{left:imgWidth, opacity:0})

    gsap.to(textbox.current[currentIndex],{opacity:0, duration:0.7, ease:'power1.out'})
    gsap.set(textbox.current[index],{opacity:0})
    
  
    gsap.to(mainImg.current[index],{left:0, opacity:1, duration:0.7, ease:'power1.out', onComplete:()=>{
      gsap.to(textbox.current[index],{opacity:1, duration:0.3, ease:'power1.out'})
      for(let i=0; i<3; i++){
        gsap.to(listenLi.current[index].children[i],{opacity:1,duration:1.3, delay: 0.2*i, ease: 'power1.out'})
      }
    }})
    currentIndex=index; 
  }

  const autoPlay=useCallback(()=>{
    timer=setInterval(autoDot, 3000);

    return ()=>{
      clearInterval(timer)
    }
  }, [])

  // useEffect(()=>{
  //   timer=setInterval(autoDot, 3000);
  //   return ()=>{
  //     clearInterval(timer)
  //   }
  // },[])

  

  const stopPlay=useCallback(()=>{
    clearInterval(timer)
  },[])

  const viewPlay=useCallback(()=>{
    if(stopNext===false){
      stopPlay();
      stopNext=true;
      btn.current.classList.add(`${styles.selected}`)
    }else if(stopNext===true){
      autoPlay()
      stopNext=false;
      btn.current.classList.remove(`${styles.selected}`)
    }
  },[])

  return (
    
    <div id={styles.mainvisual_wrap}>
      {
        txt.map((item)=>(
          <section key={item.index} id={styles.mainvisual} ref={(el)=>(mainImg.current[item.index]=el)}>
            <h2 className='hidden'>Main Visual</h2>
            <div id={styles.mainvisual_list}>
              <p id={styles.mainvisual_name}>Trending New Hits</p>
              <div id={styles.mainvisual_text}>
                <div id={styles.textbox_wrap}>
                  <div className={styles.textbox} ref={(el)=>(textbox.current[item.index]=el)}>
                    <p id={styles.main_title}>{item.txt1}</p>
                    <p id={styles.main_singer}>{item.txt2}<span>{item.txt3}</span></p>
                  </div>
                </div>
                <ul id={styles.main_listenlist} ref={(el)=>(listenLi.current[item.index]=el)}>
                  <li id={styles.listen}>Lisetn Now</li>
                  <li id={styles.playlist}>PlayList</li>
                  <li id={styles.artist_follow}>Artist Follow</li>
                </ul>
              </div>
            </div>
            <div id={styles.mainvisual_img}>
              <div id={styles.mainvisual_cover}></div>
                  <img src={item.shot}/>
            </div>
          </section>
        ))
      }
      <ul id={styles.mainDot}>
        {
          txt.map((subitem)=>(
            <li 
              key={subitem.index}
              ref={(el)=>(dotLi.current[subitem.index]=el)}
              onClick={()=>{
                overDot(subitem.index)
              }}
              
              >{subitem.dot}
            </li>
          ))
        }
      </ul>
      <button onClick={()=>{
        viewPlay()
      }} ref={btn}></button>
    </div>
  )
}
