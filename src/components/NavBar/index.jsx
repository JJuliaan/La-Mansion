import React from "react";
import CartWidget from "../CartWidget";
import './style.css';

export default function NavBar(){
    return(
        <>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#news">Noticias</a></li>
                <li><a href="#contact">Contacto</a></li>
                <li><a href="#about">Acerca De</a></li>
            </ul>
            <div className="carrito">
                <CartWidget/>
            </div>
        </>
    )
}

