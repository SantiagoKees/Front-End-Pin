import React from 'react'
import { Features, Feature, Whatpin, Form, Header} from './containers';
import { Navbar, Brand, } from './components';
import './App.css';
//componentes y contenedores que importamos(tuve mezcla al principio)








const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
       
        
        
          
        
        <Navbar />
        <Header />
       

      </div>
      
      <Whatpin />
      <Features />
      <Feature />
      <Brand />
      <Form />

     
    </div>
  )
}

export default App
