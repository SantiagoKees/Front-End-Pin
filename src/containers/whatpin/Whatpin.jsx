import React from 'react';
import  Feature  from '../../components/feature/Feature';
import './whatpin.css';

//creacion de muchas secciones para informar de que vamos a hablar y quienes somos

const Whatpin = () => (
 
    <div className="pin__whatpin section__margin" id="proyecto">
      <div className="pin__whatpin-feature">
  
      <Feature title="¿De que se trata el proyecto?" text="Este es una pagina creada con React que hemos hecho entre tres integrantes y que el objetivo principal es que la pagina funcione en su entorno de FrontEnd y Backend, hablaremos de toda la información del campo, de la agronomia y de toda las ventas e informacion mas reciente de este rubro teniendo en cuenta todas las causas y consecuencias que puede generar toda accion que hagamos    Aqui abajo estan los integrantes" />
    </div>
    <div className="pin__whatpin-heading">
      <h1 className="gradient__text">Integrantes</h1>
     
    </div>
    <div className="pin__whatpin-container">
      <Feature title="Santiago " text="21 años/Bahia Blanca/Estudiante"/>
      
      <Feature title="Adriano" text="30 años/BsAs Estudiante" />
      <Feature title="Leo" text="28 años/BsAs Estudiante"/>
    </div>
  </div>

)

  
  
  export default Whatpin;
