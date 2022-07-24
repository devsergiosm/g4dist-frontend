import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Contacto() {
  let navigate = useNavigate();

  const [contacto, setContacto] = useState({
    correo: "",
    celular: "",
    comentario: "",
  });

  const onInputChange = (e) => {
    setContacto({ ...contacto, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://sistemadonaciones.rj.r.appspot.com/contacto/guardar", contacto)
      .then(res=>{
        //extraer id del usuario insertado
        console.log(res.data)
      })
    navigate("/");
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
              <label htmlFor="Correo" style={labelStyles} className="form-label">
                Correo
              </label>
              <input
                styles="display: inline"
                type={"text"}
                className="form-control"
                placeholder="Ingrese correo"
                name="correo"
                value={contacto.correo}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div style={divStyles}>
              <label htmlFor="Celular" style={labelStyles} className="form-label">
                Celular
              </label>
              <input
                styles="display: inline"
                type={"text"}
                className="form-control"
                placeholder="Ingrese celular"
                name="celular"
                value={contacto.celular}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div style={divStyles}>
              <label htmlFor="Comentario" style={labelStyles} className="form-label">
                Comentarios
              </label>
              <textarea
                styles="display: inline"
                type={"text"}
                className="form-control"
                placeholder="Déjenos un comentario"
                name="comentario"
                value={contacto.comentario}
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
