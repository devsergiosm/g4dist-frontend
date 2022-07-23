import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../componentes/Footer";

const Login = () => {
    let navigate = useNavigate();

    const titleStyles = {
        padding:"6px 12px 0 12px",
        fontSize:"24px",
        borderRadius:"4px",
        color:"white",
        margin:"0"
      }

      const containerStyles = {
        width:"400px",
        borderRadius:"4px",
        backgroundColor:"black",
        margin:"64px 384px"
      }

      const onSubmit = async (e) => {
        e.preventDefault();
        alert("Login procesándose")
        navigate("/articulos/addarticle");
      };

    return ( 
        <div className="container">
            <div className="row d-flex justify-content-center" style={containerStyles}>
                <>
                    <p style={titleStyles}>ACCEDER</p>
                    <form action="" className="d-flex flex-column" onSubmit={onSubmit}>
                        <label htmlFor="" className="p-2 d-flex justify-content-between">
                            <span className="text-white me-2">Usuario</span>
                            <input type="text" required/>
                        </label>
                        <label htmlFor="" className="p-2 d-flex justify-content-between">
                            <span className="text-white me-2">Contraseña</span>
                            <input type="password" required/>
                        </label>
                        <div>
                            <button type="submit" className="btn btn-primary m-1" to="/articulos/addarticle">
                                Iniciar Sesion
                            </button>
                            <button type="submit" className="btn btn-danger m-1" to="/articulos/addarticle">
                                Registrarse
                            </button>
                        </div>
                        <span className="mt-4"> 2020</span>
                    </form>
                </>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Login;