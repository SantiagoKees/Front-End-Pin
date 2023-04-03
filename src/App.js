import React from 'react'
import { Features, Feature, Whatpin, Form, Header} from './containers';
import { Navbar, Brand, } from './components';
import './App.css';









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
