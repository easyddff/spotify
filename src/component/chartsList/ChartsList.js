import React, { useEffect, useState } from 'react'
import styles from './chartList.module.css'
import ChartsAdvertise from '../chartsAd/ChartsAdvertise'
import { Link, useNavigate } from 'react-router-dom'
import useProducts from '../../hooks/useProducts'

export default function ChartsList({onChart}) {

  // const [charts,setCharts] = useState([])
  // const [chartsSelect, setChartsSelect]=useState([])

  // useEffect(()=>{
  //   axios.get('data/chart.json').then((res)=>{
  //     setCharts(res.data)
  //   })
  // },[])

  // useEffect(()=>{
  //   setChartsSelect(charts.filter((item)=>(item.isWeekly===true)))
  // },[charts])

  // ==========================================================
  const [charts] = useProducts()

  const chartsSelect =setChartsSelect(charts)
  
  function setChartsSelect(charts){
      return(
        charts.filter((item)=>(item.category===onChart))
      )
  }

  const navigate = useNavigate()

  return (
    <div id={styles.charts_list}>
      <ul className={styles.charts_list_in}>
        {
          chartsSelect.map((item)=>(
            <li key={item.id} onClick={
              ()=>{
                navigate(`/charts/${item.id}`)
              }
            }>
              <div className={styles.charts_text}>
                <Link><img src={item.shot}/></Link>
                <div className={styles.charts_text_in}>
                  <p className={styles.charts_text1}>{item.name1}</p>
                  <p className={styles.charts_text2}>{item.name2}</p>
                  <p className={styles.charts_text3}>{item.name3}</p>
                </div>
              </div>
              <div className={styles.charts_play}>
                <p className={styles.charts_add1}>
                  <i className="fa-regular fa-square-plus"/>
                  Add Playlist
                </p>
                <p className={styles.charts_play1}>{item.time}</p>
                <i className="fa-regular fa-circle-play"/>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
    
  )
}
