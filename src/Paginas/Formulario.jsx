import React, { useState } from "react";
import axios from "axios"; // Asegúrate de importar axios
import "../estilos/formulario.css";

function Formulario() {

  // Crear usuarios
  const initialValues = {
    Nombre: "",
    Apellido: "",
    UserName: "",
    Password: "",
    isActive: true,
  };

  const [newuser, setNewUser] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/users", newuser)
      .then((response) => {
        alert("Usuario creado correctamente");
      })
      .catch((error) => {
        console.log("Hubo un error al crear usuario", error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newuser, [name]: value });
  };

  return (
    <>
      <div className="container">
        <h2>Registro</h2>
        <form onSubmit={handleSubmit} id="registro-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="Nombre"
              value={newuser.Nombre}
              onChange={handleChange}
              placeholder="Nombre"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              id="apellido"
              name="Apellido"
              value={newuser.Apellido}
              onChange={handleChange}
              placeholder="Apellido"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="usuario">Nombre de Usuario</label>
            <input
              type="text"
              id="usuario"
              name="UserName"
              value={newuser.UserName}
              onChange={handleChange}
              placeholder="Nombre de Usuario"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="Password"
              value={newuser.Password}
              onChange={handleChange}
              placeholder="Contraseña"
              required=""
            />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </>
  );
}

export default Formulario;
