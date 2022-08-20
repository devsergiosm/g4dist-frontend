import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import UserContext from '../context/UserContext'

export default function Navbar() {
  let navigate = useNavigate();

  const {username,handleUsername} = useContext(UserContext)

  const titleStyles = {
    fontSize:"32px",
    fontWeight:"600"
  }

  const navStyles = {
    backgroundColor:"black",
  }

  const handleLogout = () => {
    handleUsername('');
    localStorage.removeItem('username');
    localStorage.removeItem('tipo');
    localStorage.removeItem('imagen');
    localStorage.removeItem('cantidad');
    localStorage.removeItem('estado');
    localStorage.removeItem('username');
    localStorage.removeItem('lugar');

    toast.info('Cerrando sesión!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      navigate("/");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link style={titleStyles} className="navbar-brand" to="/">
            <img src="images/sanmarcos.png" alt="" width="72" height="96"/>
            <span className="ms-4">FISITraperos</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div>
            <Link className="btn btn-outline-light m-2" to="/">
              Inicio
            </Link>
            <Link className="btn btn-outline-light m-2" to="/">
              Sobre Nosotros
            </Link>
            <Link className="btn btn-outline-light m-2" to="/contacto">
              Contacto
            </Link>

            
            { username ? (
              <span className="">
                <span className="text-white ms-3">
                  <img src="../images/user.png" width="36" height="36"/>
                  Bienvenido {username}</span>
                <button className="btn btn-outline-light m-4 btn-danger" onClick={handleLogout}>
                  Cerrar Sesion
                </button>
              </span>
            ) : (
              <Link className="btn btn-outline-light m-4 btn-danger" to="/login">
                Iniciar Sesion
              </Link>
            )
          }

          </div>
        </div>
      </nav>
    </div>
  );
}
