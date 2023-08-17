import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import MainWrap from './MainWrap'


export default function Root() {

  return (
    <div>
      <Header/>
      <MainWrap>
        <Outlet/>
      </MainWrap>
      <Footer/>
    </div>
  )
}
