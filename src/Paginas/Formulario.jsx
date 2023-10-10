import React from "react";
import "../estilos/formulario.css"
import Header from "../Componentes/Header";

function Formulario(){
    return(
        <>
        <Header/>
        <div className="container">
  <h2>Registro</h2>
  <form id="registro-form">
    <div className="form-group">
      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        placeholder="Nombre"
        required=""
      />
    </div>
    <div className="form-group">
      <label htmlFor="apellido">Apellido</label>
      <input
        type="text"
        id="apellido"
        name="apellido"
        placeholder="Apellido"
        required=""
      />
    </div>
    <div className="form-group">
      <label htmlFor="usuario">Nombre de Usuario</label>
      <input
        type="text"
        id="usuario"
        name="usuario"
        placeholder="Nombre de Usuario"
        required=""
      />
    </div>
    <div className="form-group">
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Contraseña"
        required=""
      />
    </div>
    <button type="submit">Registrarse</button>
  </form>
</div>

        </>
    )
}

export default Formulario;