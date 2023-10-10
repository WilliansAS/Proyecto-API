import React from "react";
import "../estilos/header.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUsers, faSuitcaseMedical, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';

function Header(){
    return(
        <>
            <nav className="barra-navegacion">
                <div></div>            
                <ul className="lista-enlaces">
                    <li>
                        <Link to="/"><FontAwesomeIcon icon={faHouse} />  Inicio</Link>
                    </li>
                    <li>
                        <Link to="/dashboard"><FontAwesomeIcon icon={faUsers} />  Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/dashboard"><FontAwesomeIcon icon={faSuitcaseMedical} />  Servicios</Link>
                    </li>
                    <li>
                        <Link to="/Formulario"><FontAwesomeIcon icon={faUserPlus} />  Registrarse</Link>
                    </li>
                    <li>
                        <Link to="/Login"><FontAwesomeIcon icon={faUser} />  Iniciar sesión</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header;
