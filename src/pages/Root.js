import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import MainWrap from './MainWrap'
import DarkModeProvider from '../component/context/DarkModeContext'


export default function Root() {

  const [dark, setDark]=useState()

  const DarkChange=(it)=>{
    setDark((prev)=>it)
  }

  return (
    <div>
      <DarkModeProvider style={dark? ({backgroundColor:'var(--color-dark-bg)'}) : ({backgroundColor:'var(--color-light-bg)'})}>

        <Header onDarkChange={DarkChange}/>
        <MainWrap onDark={dark}>
          <Outlet/>
        </MainWrap>
        <Footer onDark={dark}/>

      </DarkModeProvider>
      
    </div>
  )
}
