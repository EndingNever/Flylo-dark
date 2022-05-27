import React from 'react'
import "./Features.scss"
import features from './FeaturesMap'
import access from "../../images/access-anywhere.svg"

export default function Features() {
  return (
    <div className='features-container'>
      {features.map((feature) => (
        <div className="feature">
          <img src={process.env.PUBLIC_URL + feature.image } alt="" />
          <h2>{feature.title}</h2>
          <p>{feature.text}</p>
        </div>
      )
      )}
      {/* <div className="feature">
        <h2>Access your files, anywhere</h2>
      </div>
      <div className="feature">feature</div>
      <div className="feature">feature</div>
      <div className="feature">feature</div> */}
    </div>
  )
}
