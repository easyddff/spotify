import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileHeader from './MobileHeader'
import MobileFooter from './MobileFooter'

export default function MobileRoot() {
  return (
    <div>
      <MobileHeader/>
      <Outlet/>
      <MobileFooter/>
    </div>
  )
}
