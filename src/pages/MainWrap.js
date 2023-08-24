import React from 'react'

export default function MainWrap({children, onDark}) {

  const dark=onDark

  return (
    <div style={
      dark? ({backgroundColor:'black', width:'100%', minHeight:'1000px'}):({backgroundColor:'white', width:'100%', minHeight:'1000px'})
      // {width:'100%', minHeight:'1000px'}
      
      }>
      {children}
    </div>
  )
}
