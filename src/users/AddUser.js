import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser({idSavedUser,setIdSavedUser}) {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    dni: "",
    username: "",
    password: "",
    email: "",
    apellidos: "",
    direccion: "",
  });

  const { dni, username,password, email, apellidos,direccion } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8090/usuarios/guardar", user)
      .then(res=>{
        //extraer id del usuario insertado
        console.log(res.data)
        setIdSavedUser(res.data.id)
      })
    // navigate("/");
  };


  const divStyles = {
    display:"flex",
    flexDirection:"row",
    paddingBottom:"12px"
  }

  const labelStyles = {
    width:"128px",
    textAlign:"left"
  }

  return (
        <div className="col-md-4 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Contacta con nosotros</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div style={divStyles}>
              <label htmlFor="Email" style={labelStyles} className="form-label">
                Correo
              </label>
              <input
                styles="display: inline"
                type={"text"}
                className="form-control"
                placeholder="Ingrese correo"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div style={divStyles}>
              <label htmlFor="Email" style={labelStyles} className="form-label">
                Celular
              </label>
              <input
                styles="display: inline"
                type={"text"}
                className="form-control"
                placeholder="Ingrese celular"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div style={divStyles}>
              <label htmlFor="Email" style={labelStyles} className="form-label">
                Comentarios
              </label>
              <textarea
                styles="display: inline"
                type={"text"}
                className="form-control"
                placeholder="Déjenos un comentario"
                name="apellidos"
                value={apellidos}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Enviar
            </button>
            <Link className="btn" to="/encuesta">
              <button type="submit" className="btn btn-primary ms-2">
                Responder Encuesta
              </button>
            </Link>
          </form>
        </div>
  );
}
