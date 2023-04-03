import React from 'react';
 import './features.css';


 

const Features = ({title, text}) => {
  
      
  
  return (
    <div className="pin__features-container__features">
      <div className="pin__features-container__features-title">
        
          
          <div className="pin__features-container"></div>
        
        <h1>{title}</h1>
        

      </div>
      <div className="pin__features-container-features-text"></div>

      <p>{text}</p>
    </div>
  )
}

export default Features
