import { useForm } from "react-hook-form";
import './form.css';
import ventas from '../../assets/ventas11.png';

import axios from 'axios'

   


//este es el formulario creado a partir del primer importe(hooks)




const Form = () => { 

    const { register, formState: {errors}, watch, handleSubmit } = useForm({ 
        defaultValues: {
            nombre: '',
            direccion: '',
        }
    });

    const onSubmit = (data) => {
        console.log(data);}
        axios.post('-hcontainers-us-west-166.railway.app')
        
    


    
       
   

    return <div> 
        <h1>Para contactarnos </h1> 
        <p> {watch('')}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pin__form-img">
                <img src={ventas} alt="ventas" />
            </div>

            <div className="pin__form-h" id="contacto"> 
                <label> Confirmar Contraseña</label>
                <input type="password"  {...register('confirmar contraseña', {
                    required: true,
                    maxLength: 10
                })} />
                
               
            </div>

            <div className="pin__form-h" id="contacto"> 
                <label> Contraseña</label>
                <input type="password"  {...register('contraseña', {
                    required: true,
                    maxLength: 10
                
                    
                        
                    
                    
                })} />
                </div>
            <div className="pin__form-dos">
                <label>Edad</label>
                <input type="number" {...register('edad', {
                    required: true
                 
                })} />
            </div>
            <div className="pin__form-tres">
                <label>Email</label>
                <input type="text" {...register('email', {
            
                   
                
                
                })}/>
                {errors.email}
                
                 
                
                
                
            </div>

           
            <div className="pin__form-cuatro">
                <label>Nombre</label>
                <input type="text" {...register('nombre', {
                
                    
                })} />
        
   	
               
               
            </div>

   
        
    
           
            
           <div className="buttom">
               <input type="submit" value="Enviar" /> </div>
            
        </form>
    </div>
}
export default Form