import React from 'react'
import Mobilelist from './mobilelist'
import device from './mobile.json'
export default function Mobile() {
  return (
    <div>
    {  device.map(e => {
      return<Mobilelist
      img={e.img}
      name={e.name}
      />
   
  })}
      </div>
  
   
  )
}
