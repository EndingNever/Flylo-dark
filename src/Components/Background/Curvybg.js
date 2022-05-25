import React from 'react'
import Features from '../Features/Features'
import "./Curvybg.scss"

export default function Curvybg() {
  return (
    <div id="curvy" className='curvy-bg-img' style={{
      backgroundImage: process.env.PUBLIC_URL + `url("/bg-curvy-desktop.svg")`,
    }}>
      <div className='features'>
        <Features />
      </div>
    </div>
  )
}
