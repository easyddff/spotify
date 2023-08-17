import React, { useEffect, useState } from 'react'
import styles from './listen.module.css'
import useProducts from '../../hooks/useProducts'
import { useLocation, useParams } from 'react-router-dom'

export default function Listen() {

  const [charts]=useProducts()
  const {listen}=useParams()

 // const [chartsInfo, setChartsInfo]=useState([])

  
  const chartsInfo=charts.find((item)=>(item.name1===listen))

  
  // if(chartsInfo){
  //   setChartsInfo(chartsInfo)
  // }
 

  const {pathname} = useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

  return (
    <div id={styles.listen_wrap}>
      <img src='/images/mobile/right.png'/>
      <p id={styles.listen_more}>
        <i className="fa-solid fa-ellipsis"/>
      </p>
      {
        
          <section id={styles.listen_all} key={chartsInfo?.id}>
            <div id={styles.listen_img}>
              <img src={chartsInfo?.shot}/>
            </div>
            <h2 id={styles.listen_title}>{chartsInfo?.name1}</h2>
          </section>
        
      }
    </div>
  )
}
