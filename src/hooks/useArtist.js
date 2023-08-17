import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function useArtist() {

  const [artist,setArtist]=useState([])


  useEffect(()=>{
    axios.get('/data/artist.json').then((res)=>{
      setArtist(res.data)
    })
  },[])

  return (
    //컴포넌트가 아니기에 대문자가 아니어도 괜찮다 
    [artist]
  )
}