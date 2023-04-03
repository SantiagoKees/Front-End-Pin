import React from 'react';
import './brand.css';
import ventas from '../../assets/ventas4.png';
import ventas12 from '../../assets/ventas12.png';
import ventas13 from '../../assets/ventas13.png';



const Brand = () => (
    <div className="pin__brand-section__padding" id="maquinas">
    
    <body>
  
  <div id="pin-slider">
  
      <ul class="slider">
          <li id="slide1">
              <h1>Maquinas agricolas</h1>
              <img src={ventas} alt="ventas" />
          </li>
          <li id="slide2">
              <img src={ventas12} alt="ventas" />
          </li>
          <li id="slide3">
              <img src={ventas13} alt="ventas"/>
              
          </li>
      </ul>
  
      <ul class="menu">
          <li>
              <a href="#slide1">1</a>
          </li>
          <li>
              <a href="#slide2">2</a>
          </li>
          <li>
              <a href="#slide3">3</a>
          </li>
      </ul>
  
  </div>
  
  
  
  </body>
  </div>
  )
  
  export default Brand;
