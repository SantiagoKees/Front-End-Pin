import React from 'react';
import './feature.css';


const Feature = ({title, text}) => {
  return (
    <div className="pin__features-container__feature">
      <div className="pin__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="pin__features-container_features-text">
        {text}
      </div>
      
    </div>
  )
}

export default Feature
