import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getProducts } from '../api/firebase'

export default function useProducts() {

  const [charts,setCharts]=useState([])


  useEffect(()=>{
    // axios.get('/data/chart.json').then((res)=>{
    //   setCharts(res.data)
    // })

    getProducts().then((res)=>{
      setCharts(res)
    })
    // .data가 아닌 반환값만 넣어주면 가져온다.
  },[])

  return (
    //컴포넌트가 아니기에 대문자가 아니어도 괜찮다 
    [charts]
  )
}
