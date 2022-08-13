import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../componentes/Footer";

const Signup = () => {
    let navigate = useNavigate();

      const containerStyles = {
        width:"500px",
        borderRadius:"4px",
        backgroundColor:"black",
        margin:"64px 384px"
      }

      const onSubmit = async (e) => {
        e.preventDefault();
        navigate("/login");
      };

    return ( 
        <div className="container">
            <div className="row d-flex justify-content-center px-2" style={containerStyles}>
                <>
                    <p className="text-info h3 py-2 px-3">COMPLETA TUS DATOS</p>
                    <form action="" className="d-flex flex-column" onSubmit={onSubmit}>
                        <label htmlFor="" className="p-2 d-flex justify-content-between">
                            <p className="border-3 text-white h7 me-2 mb-0">DNI</p>
                            <input type="text" required/>
                        </label>
                        <label htmlFor="" className="p-2 d-flex justify-content-between">
                            <p className="border-3 text-white h7 me-2 mb-0">Nombres completos</p>
                            <input type="password" required/>
                        </label>
                        <label htmlFor="" className="p-2 d-flex justify-content-between">
                            <p className="border-3 text-white h7 me-2 mb-0">Correo electrónico</p>
                            <input type="text" required/>
                        </label>
                        <label htmlFor="" className="p-2 d-flex justify-content-between">
                            <p className="border-3 text-white h7 me-2 mb-0">Contraseña</p>
                            <input type="password" required/>
                        </label>
                        <div>
                            <button type="submit" className="btn btn-info mt-4" to="/articulos/addarticle">
                                Registrarse
                            </button>
                        </div>
                        <div className="p-2 d-flex justify-content-end d-row mt-4 h6">
                            <span className="text-muted m-1 p-1">¿Ya tienes una cuenta?</span>
                            <Link className="btn btn-outline-danger m-1" to="/login">
                                Iniciar sesión
                            </Link>
                        </div>
                    </form>
                    <hr/>
                </>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Signup;