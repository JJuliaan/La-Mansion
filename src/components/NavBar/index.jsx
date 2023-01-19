import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import './style.css';

export default function NavBar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-scroll shadow-0 border-bottom border-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/"><i className="fab fa-mdb fa-4x"></i>Logo</Link>
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/hamburguesas">Hamburguesas</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/category/panchos">Panchos</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/category/pizzas">Pizzas</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/category/bebidas">Bebidas</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        <div className="d-flex align-items-center justify-content-center text-center">
        </div>
            <div className="carrito">
                <CartWidget/>
            </div>
        </>
    )
}

