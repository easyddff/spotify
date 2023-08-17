import React, { useEffect, useState } from 'react'
import styles from './chartsMenu.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function ChartsMenu({onChartChange}) {
  // const [charts,setCharts] = useState([])

  // useEffect(()=>{
  //   axios.get('data/chart.json').then((res)=>{
  //     setCharts(res.data)
  //   })
  // },[])



  const title=[
    {index:0, name:'Hot 100'},
    {index:1, name:'New Trends'},
    {index:2, name:'Weekly'},
    {index:3, name:'Song Breaker'},
    {index:4, name:'World Charts'},
  ]
  
  const [clickIndex, setClickIndex]=useState(title[0].index)
  
  // const [onChartChange, setOnChartChange] = useState(title[0].name)
  // // console.log(onChartChange)
  // const [titleItems, setTitleItems] = useState([])

  // useEffect(()=>{
  //   if(onChartChange==='Hot 100'){
  //     setTitleItems(charts)
  //   }else{
  //     const titleItems=charts.filter((item)=>(item.category===onChartChange))
  //     setTitleItems(titleItems)
  //   }
  // },[charts])


  return (
        <div id={styles.charts_menu}>
          <ul id={styles.charts_list}>
            {
              title.map((item)=>(
                <li onClick={()=>{
                  onChartChange(item.name)
                  setClickIndex(item.index)
                }}
                  className={`${item.index===clickIndex && styles.selected}`}
                  key={item.index}>
                  <Link>{item.name}</Link>
                </li>
              ))
            }
            {/* {
              title.map((item)=>(
                <li onClick={()=>setOnChartChange(item.name)} key={item.index}>
                  <Link>{item.name}</Link>
                </li>
              ))
            } */}
          </ul>
        </div>
  )
}
