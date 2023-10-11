import React, { useEffect, useState } from "react";
import "../estilos/dashboard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faLock, faRegistered } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";


function Dashboard() {

  const [ Users, setUsers ] = useState([]);
  useEffect( () => {
    fetchUsers();
  },[]);

  console.log("Hola");

  const fetchUsers = async () => {
    
    const response = await axios.get('http://localhost:3000/users')
    setUsers(response.data)
    console.log(response)
    
  }

  return (
    <>
      <div>
        <nav className="dash">
          <img src="https://i.pinimg.com/564x/38/ae/8d/38ae8d4b48a93580cef2292cc776ca7a.jpg" className="foto"></img>
          <ul>
            <li>
              <Link to="/"><FontAwesomeIcon icon={faHome} />  Inicio</Link>
            </li>
            <li>
              <Link to="#"><FontAwesomeIcon icon={faRegistered} />  Registro</Link>
            </li>
            <li>
              <Link to="#"><FontAwesomeIcon icon={faUser} />  Usuarios</Link>
            </li>
            <li>
              <Link to="#"><FontAwesomeIcon icon={faLock} /> Login</Link>
            </li>
          </ul>
        </nav>
        <section className="seccion">
        <div className="contenedor-principal">
            <div className="contenedor-1">
            <span className="icono">👤</span>
              <h1>Usuarios</h1>
              <hr/>
              <h1>97</h1>
            </div>
            <div className="contenedor-2">
            <span className="icono">📝</span>
            <h1>Registros</h1>
            <hr/>
            <h1>165</h1>
            </div>
            <div className="contenedor-3">
            <span className="icono">🛒</span>
            <h1>Usuarios</h1>
            <hr/>
            <h1>43</h1>
            </div>
        </div>

        <div className="p-4 sm:ml-50">
  <div className="p-20 border-dashed">
    <div className="flex items-center justify-center h-48 mb-4 rounded">
      <div className="container">
        <div className="relative left-70 top-24">

          <table className="w-full table">
            <thead className="table-header">
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Contrasenia</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
            {Users.map((users) =>(
              <tr className="table-row">
                <th scope="row">
                  {users.UserName}
                </th>
                <td>
                  {users.Nombre}
                </td>
                <td>
                {users.Apellido}
                </td>
                <td>
                {users.Password}
                </td>
                <td>
                  <a href="#" className="table-link">
                    Edit
                  </a>
                </td>
              </tr>
         ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

        </section>
      </div>
    </>
  );
}

export default Dashboard;
