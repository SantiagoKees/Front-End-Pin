import React from 'react';
import Feature from '../../components/feature/Feature';

import './feature.css';
import ventas from '../../assets/ventas.png';

const featuresData = [
  {
    title: 'Impacto economico ',
    text: 'La falta de lluvias hizo caer la proyección de cosecha en 28,5 millones de toneladas, un 23% de la producción inicial esperada. Las exportaciones caerán casi US$8.000 millones y la recaudación tributaria se reducirá en US$ 3554 millones,La sequía representa US$ 10.400 millones para los productores de soja, trigo y maíz. Es un 2,2% del Producto Bruto Interno (PBI) según estimó la Bolsa de Comercio de Rosario (BCR) ',
  },
  {
    title: 'Precios internacionales',
    text: 'En lo que va de febrero las empresas agroexportadoras ingresaron al mercado de cambios local apenas u$s441 millones. Los altos valores no fomentan venta de grano disponible Mientras tanto y a pesar de los altos valores del grano, en el mercado local las ventas de soja de la campaña pasada continúan prácticamente paralizadas',
  },
 
  {
    title: 'Costo de hectarea por soja',
    text: 'La opción de sembrar soja implica por hectárea gastos de contratista a razón de 60$, semillas por 35$, herbicidas/insecticidas por 25$ y recolección por 35$Los márgenes para un productor de soja de 1° en campo propio o alquilado en zona núcleo. El valor de exportación que generaría una hectárea de soja de 1° se repartiría así: a) el 30% los percibiría el Estado Nacional en concepto de DEX; b) el 13% se asignaría al pago de los impuestos; c) el 39% de esa torta iría para la compra de insumos, la contratación de labores, gastos de cosecha y otros ',
  
  },
  {
    title: 'Costo tonelada de maiz ',
    text: 'Si analizamos el comportamiento de la posición futuro de maíz marzo 2023, el precio acumuló mejoras de U$S 48 la tonelada equivalentes al 22%, cotizando hoy a U$S 263 la tonelada contra U$S 215 la tonelada que cotizaba el pasado 1 de agosto, La sequía es hoy el principal factor de mercado que está impactando en la evolución de los precios, tanto para las posiciones “disponible” como para los futuros nueva cosecha, lo interesante para destacar del mercado de maiz es que es el unico producto donde el mercado consolida una suba entre los precios de la nueva cosecha y los precios del maiz disponibles'

    
  },
];


const Features = () => {
  return (
    <div className="pin__feature section__padding" id= "ventas">
     <div className="pin__feature-heading">
      <h1 className="gradient__text">Ventas de maiz y soja y proyecciones para campañas 2022/2023</h1>
    
      
      <img src={ventas} alt="campo"/>
      <p>Algunos problemas y recursos para tener en cuenta a lo largo del trayecto</p>
      <div className="pin__feature-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
      </div>
     
      </div> 
      
    </div>
  )
}

export default Features;
