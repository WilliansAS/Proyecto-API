import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../estilos/formulario.css";

function EditForm() {
  const [user, setUser] = useState({
    Nombre: "",
    Apellido: "",
    UserName: "",
    Password: "",
  });

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
    .then((response) => {
      setUser(response.data);
    })
    .catch((error) => {
      console.log("Error al cargar los datos del usuario");
    });
  
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/users/${id}`)
      .then((response) => {
        console.log("Usuario actualizado con éxito", response);
      })
      .catch((error) => {
        console.log("Error al actualizar el usuario", error);
      });
  };

  return (
    <div className="container">
      <h2>Editar Usuario</h2>
      <form onSubmit={handleSubmit} id="registro-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="Nombre"
            value={user.Nombre}
            onChange={(e) => setUser({ ...user, Nombre: e.target.value })}
            placeholder="Nombre"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="Apellido"
            value={user.Apellido}
            onChange={(e) => setUser({ ...user, Apellido: e.target.value })}
            placeholder="Apellido"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="usuario">Nombre de Usuario</label>
          <input
            type="text"
            id="usuario"
            name="UserName"
            value={user.UserName}
            onChange={(e) => setUser({ ...user, UserName: e.target.value })}
            placeholder="Nombre de Usuario"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="Password"
            value={user.Password}
            onChange={(e) => setUser({ ...user, Password: e.target.value })}
            placeholder="Contraseña"
            required
          />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default EditForm;
