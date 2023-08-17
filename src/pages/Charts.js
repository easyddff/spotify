import React, { useState } from 'react'
import styles from './charts.module.css'
import Sidebar from '../component/sidebar/Sidebar'
import ChartsMain from '../component/charts/ChartsMain'
import ChartsList from '../component/chartsList/ChartsList'
import ChartsAdvertise from '../component/chartsAd/ChartsAdvertise'
import ChartsMenu from '../component/chartsMenu/ChartsMenu'

export default function Charts() {

  
  const [chart, setChart]=useState('Hot 100')

  const ChartChange=(it)=>{
    setChart((prev)=>it)
  }
  // console.log(chart)
  return (
    <div id={styles.sub_wrap}>
      <div id={styles.sub_side}>
        <Sidebar/>
      </div>
      <div id={styles.sub_main_wrap}>
        <ChartsMain/>
        <ChartsMenu onChartChange={ChartChange}/>
        <ChartsList onChart={chart}/>
        <ChartsAdvertise/>
      </div>
    </div>
  )
}
