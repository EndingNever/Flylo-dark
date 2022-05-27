import React from 'react'
import "./AllYourFiles.scss"
import Features from '../Features/Features'
import bg from "../../bg-curvy-desktop.svg"

export default function AllYourFiles() {
  return (
    <main>
      <img src={process.env.PUBLIC_URL + "/Images/illustration-intro.png"} alt="" />
      <div className='allFiles-text'>
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers</p>
      </div>
      <button>Get Started</button>
      <div className="curvy-image">
        <img className='bg-curvy' src={bg} alt="" />
      </div>
      <Features />
    </main>
  )
}
