import React from 'react'
import styles from './mobileFooter.module.css'
import { Link } from 'react-router-dom'

export default function MobileFooter() {

  const foot=[
    {
      index:0,
      txt:'Home',
      icon:'fa-solid fa-house',
      path:'/'
    },
    {
      index:1,
      txt:'Search',
      icon:'fa-solid fa-magnifying-glass',
      path:'/mobileSearch'
    },
    {
      index:2,
      txt:'Library',
      icon:'fa-regular fa-copy',
      path:'/'
    },
    {
      index:3,
      txt:'Charts',
      icon:'fa-brands fa-spotify',
      path:'/mobileCharts'
    },
  ]

  return (
    <footer id={styles.mobileFoot}>
      <ul id={styles.mobilesFoot_list}>
        {
          foot.map((item)=>(
            <Link to={item.path}><li key={item.index}><i className={item.icon}/>{item.txt}</li></Link>
          ))
        }
        
      </ul>
    </footer>
  )
}
