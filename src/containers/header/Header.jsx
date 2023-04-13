import React from 'react';
import './header.css';
import ventas from '../../assets/HJKIUH.png';
//parte principal de la pagina donde puse imagenes, informacion y logo



const Header = () => (
  <div className="pin__header-section__padding" id="informacion">
    <div className="pin__form-img">
                <img src={ventas} alt="ventas" />
            </div>
   
    <div className="pin__header-content">
      <h1 className="gradient__text">Somos un grupo de desarrolladores<br></br> que hemos hecho un proyecto React</h1>
      <h2>Si quieres mas información acerca de nosotros y nuestro proyecto <br></br> entonces desliza hacia abajo para encontrar todo lo que buscas</h2>
      
      
      
    

     

      
    </div>

    
  </div>
);

export default Header;
