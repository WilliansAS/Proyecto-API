import React from "react";
import "../estilos/login.css"
import Header from "../Componentes/Header";

function Login(){
    return(
        <>
          <Header />
        <div className="container">
  <h2>Iniciar Sesión</h2>
  <form id="login-form">
    <div className="form-group">
      <label htmlFor="email">Correo Electrónico</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Correo Electrónico"
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
    <button type="submit">Iniciar Sesión</button>
  </form>
</div>

        </>
    )
}

export default Login;