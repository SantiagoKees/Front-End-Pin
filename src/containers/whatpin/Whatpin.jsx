import React from 'react';
import  Feature  from '../../components/feature/Feature';
import './whatpin.css';

const Whatpin = () => (
 
    <div className="pin__whatpin section__margin" id="proyecto">
      <div className="pin__whatpin-feature">
  
      <Feature title="¿De que se trata el proyecto?" text="Este es un proyecto que hemos construido como trabajo final del curso de 'Full Stack', es una pagina diseñada para hablar de la información mas reciente del campo e intentar mostrar todos los componentes que este conlleva" />
    </div>
    <div className="pin__whatpin-heading">
      <h1 className="gradient__text">Integrantes</h1>
     
    </div>
    <div className="pin__whatpin-container">
      <Feature title="Santiago " text="Info de Santi" />
      <Feature title="Adriano" text="Info de Adriano" />
      <Feature title="Leo" text="Info de Leo"/>
    </div>
  </div>

)

  
  
  export default Whatpin;
