import React from "react";
import Header from "../Componentes/Header";
import "../estilos/index.css"

function Index(){
    return(
        <>
        <Header />
        <div className="banner">
            <div className="banner-texto">
            <h1>¡EN MED-HEALTH, LO IMPOSIBLE ES POSIBLE</h1>
            </div>
        </div>

        <div className="secciones">
    <div className="bloque">
        <img className="img" src="https://media.istockphoto.com/id/1494761325/es/foto/datos-m%C3%A9dicos-e-informaci%C3%B3n-de-salud-un-m%C3%A9dico-con-una-tableta-toca-una-interfaz-virtual-de-la.jpg?s=612x612&w=0&k=20&c=m1k_MbLUyH0QsI0rMGWx_i4MtPo620_jUmlWMhFwQQw=" alt="Imagen 1" />
        <p>Texto de la sección 1</p>
        <hr/>
    </div>
    <div className="bloque">
        <img className="img" src="https://assets1.farmaciasanpablo.com.mx/landings/_blog/spf/nota-851-3.jpg" alt="Imagen 2" />
        <p>Texto de la sección 2</p>
    </div>
    <div className="bloque">
        <img className="img" src="https://cba.ucb.edu.bo/wp-content/uploads/2020/03/virtual-biblioteca-1.jpg" alt="Imagen 3" />
        <p>Texto de la sección 3</p>
    </div>
    <div className="bloque">
        <img className="img" src="https://media.istockphoto.com/id/1145739963/es/foto/moderno-edificio-blanco-de-hospital-p%C3%BAblico-sala-de-emergencias-entrada.jpg?s=612x612&w=0&k=20&c=RzVNfgYBFEotItGgOQMJaUYyrvCnh-B8jLppXy6M3eo=" alt="Imagen 4" />
        <p>Texto de la sección 4</p>
    </div>
    </div>

        </>
    )
}

export default Index;
