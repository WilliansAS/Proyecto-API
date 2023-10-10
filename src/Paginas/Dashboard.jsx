import React from "react";
import "../estilos/dashboard.css";
import Header from "../Componentes/Header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faLock, faRegistered } from '@fortawesome/free-solid-svg-icons';


function Dashboard() {
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

        <div class="p-4 sm:ml-50">
        <div class="p-20 border-dashed">

          <div class="flex items-center justify-center h-48 mb-4 rounded">
            <div class="container">
              <div class="relative  left-70 top-24">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Color
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        Apple MacBook Pro 17"
                      </th>
                      <td class="px-6 py-4">
                        Silver
                      </td>
                      <td class="px-6 py-4">
                        Laptop
                      </td>
                      <td class="px-6 py-4">
                        $2999
                      </td>
                      <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                    </tr>
                 
                  
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
