import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../componentes/Footer";
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
    let navigate = useNavigate();

    const [thisUsername, setThisUsername] = useState('')
    const {handleUsername} = useContext(UserContext)

      const containerStyles = {
        width:"400px",
        borderRadius:"4px",
        backgroundColor:"black",
        margin:"64px 384px"
      }

      const onSubmit = async (e) => {
        e.preventDefault();
        toast.success('Login exitoso!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        localStorage.setItem('username',thisUsername)
        handleUsername(thisUsername)
        navigate("/articulos/addarticle");
      };

      const thisHandleUsername = (e) =>{
        setThisUsername(e.target.value)
        // console.log(e)
      }

    return ( 
        <div className="container">
            <div className="row d-flex justify-content-center" style={containerStyles}>
                <>
                    <p className="text-info h3 py-2 px-3">ACCEDER</p>
                    <form action="" className="d-flex flex-column" onSubmit={onSubmit}>
                        <label htmlFor="" className="p-2 d-flex justify-content-between">
                            <span className="text-white me-2">Usuario</span>
                            <input type="text" 
                            required 
                            // value={thisUsername} 
                            onChange={thisHandleUsername}/>
                        </label>
                        <label htmlFor="" className="p-2 d-flex justify-content-between">
                            <span className="text-white me-2">Contraseña</span>
                            <input type="password" required/>
                        </label>
                        <div className="mt-4">
                            <button type="submit" className="btn btn-info m-1" to="/articulos/addarticle">
                                Iniciar Sesion
                            </button>
                        </div>
                        <div className="p-2 d-flex justify-content-end d-row mt-4 h6">
                            <span className="text-muted m-1 p-1">¿Aún no tienes una cuenta?</span>
                            <Link className="btn btn-outline-danger m-1" to="/signup">
                                Registrarse
                            </Link>
                        </div>
                    </form>
                </>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Login;