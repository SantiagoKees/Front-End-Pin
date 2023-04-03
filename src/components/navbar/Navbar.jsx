import React, {useState} from 'react';
import {RiMenu3Line,  RiCloseLine} from 'react-icons/ri';

import './navbar.css';

const Menu = () =>  (
<>
<p><a href="#informacion">Informacion</a></p>
          <p><a href="#proyecto">Proyecto</a></p>
          <p><a href="#ventas">Ventas/Causas</a></p>
          <p><a href="#maquinas">Maquinas</a></p>
          <p><a href="#contacto">Contacto</a></p>
 </>
)         
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="pin__navbar">
      <div className="pin__navbar-links">
        <div className="pin__navbar-links_logo">
          
        </div>
        <div className="pin__navbar-links_container">
          <Menu />
        
        </div>
      </div>
     
      <div className="pin__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="pin__navbar-menu_container scale-up-center">
          <div className="pin__navbar-menu_container-links">
            <Menu />
       
          </div>
          
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;