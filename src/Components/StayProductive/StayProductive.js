import React from 'react'
import "./StayProductive.scss"
import productive from "../../images/stay-productive.png"
import arrow from "../../images/icon-arrow.svg"

export default function StayProductive() {
  return (
    <div className='stayProductive-container'>
      <div className="image-text-container">
        <div className="image-container">
          <img src={productive} alt="" />
        </div>
        <div className="text-container">
          <h1>Stay Productive, wherever you are</h1>
          <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
          <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
          <p id='see-how-works'>See how Fylo works <img src={arrow} alt="small arrow"/></p>
        </div>
      </div>
    </div>
  )
}
