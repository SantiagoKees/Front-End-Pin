import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "./form.css";
import ventas from "../../assets/ventas11.png";

import axios from "axios";

//este es el formulario creado a partir del primer importe(hooks)

const Form = () => {
  const [error, setError] = useState(null);
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({
    defaultValues: {
      nombre: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("data", data);

    try {
      await axios.post(
        "https://api-production-e6e6.up.railway.app/api/guardar",
        data
      );
      cambiarFormularioEnviado(true);
    } catch (err) {
      console.log("Error", err.message);
      setError("Problemas con el envio");
    }
  };

  return (
    <div>
      <h1>Para contactarnos </h1>
      <p> {watch("")}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pin__form-img">
          <img src={ventas} alt="ventas" />
        </div>

        <div className="pin__form-h" id="contacto">
          <label> Confirmar Contraseña</label>
          <input
            type="password"
            {...register("contrasena_confirmation", {
              required: true,
              maxLength: 10,
            })}
          />
        </div>

        <div className="pin__form-h" id="contacto">
          <label> Contraseña</label>
          <input
            type="password"
            {...register("contrasena", {
              required: true,
              maxLength: 10,
            })}
          />
        </div>
        <div className="pin__form-dos">
          <label>Edad</label>
          <input
            type="number"
            {...register("edad", {
              required: true,
            })}
          />
        </div>
        <div className="pin__form-tres">
          <label>Email</label>
          <input type="text" {...register("email", {})} />
          {errors.email}
        </div>

        <div className="pin__form-cuatro">
          <label>Nombre</label>
          <input type="text" {...register("nombre", {})} />
        </div>

        <div className="buttom">
          <input type="submit" value="Enviar" />{" "}
        </div>

        {formularioEnviado && !error && (
          <div>
            <p>Información enviada exitosamente</p>
          </div>
        )}

        {error && (
          <div>
            <p>{error}</p>
          </div>
        )}
      </form>
    </div>
  );
};
export default Form;