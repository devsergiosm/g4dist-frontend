import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Encuesta() {

  const divStyles = {
    display:"flex",
    flexDirection:"row",
    paddingBottom:"12px"
  }

  const labelStyles = {
    width:"360px",
    textAlign:"left"
  }

  return (
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Encuesta</h2>

          <form>
            <div style={divStyles}>
              <label htmlFor="Email" style={labelStyles} className="form-label">
              ¿Con que frecuencia donas?
              </label>
              <select 
                styles="display: inline"
                className="form-control"
                placeholder="Seleccione estado del artículo"
                required
                name="estado"
              >
                <option value="1">Casi nunca</option>
                <option value="2" >Nunca</option>
                <option value="3">Regularmente</option>
                <option value="4">Frecuentemente</option>
                <option value="5" selected>Elija una opción</option>
              </select>
            </div>
            <div style={divStyles}>
              <label htmlFor="Email" style={labelStyles} className="form-label">
              ¿Qué tipo de articulo es más probable que dones?
              </label>
              <select 
                styles="display: inline"
                className="form-control"
                placeholder="Seleccione estado del artículo"
                required
                name="estado"
              >
                <option value="1">Ropa</option>
                <option value="2">Juguetes</option>
                <option value="3">Articulos electronicos</option>
                <option value="4">Otros</option>
                <option value="5" selected>Elija una opción</option>
              </select>
            </div>
            <div style={divStyles}>
              <label htmlFor="Email" style={labelStyles} className="form-label">
              ¿Conoces centro de donaciones?
              </label>
              <input
                styles="display: inline"
                type={"text"}
                className="form-control"
                placeholder="Dejanos un comentario"
                name="email"
                required
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
              />
            </div>
            <Link className="btn" to="/">
              <button type="submit" className="btn btn-success">
                Enviar
              </button>
            </Link>
          </form>
        </div>
  );
}
