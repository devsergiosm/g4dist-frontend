import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddArticle = ({setIdArticle = 0}) => {
    let navigate = useNavigate();

    const [article, setArticle] = useState({
        tipo: "",
        imagen: "",
        cantidad: "",
        estado: "",
        lugar:""
      });
    
      const { tipo, imagen,cantidad, estado, lugar } = article;
    
      const onInputChange = (e) => {
        setArticle({ ...article, [e.target.name]: e.target.value });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
        toast.success('Solicitud de donación registrado!', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        // await axios.post("https://sistemadonaciones.rj.r.appspot.com/articulos/guardar", article)
        //  .then(res=>setArticle(res.data.id));
        console.log(article)
        // localStorage.setItem('tipo',article.tipo)
        localStorage.setItem('tipo','Ropa')
        localStorage.setItem('imagen',article.imagen)
        localStorage.setItem('cantidad',article.cantidad)
        // localStorage.setItem('estado',article.estado)
        localStorage.setItem('estado','Regular')
        localStorage.setItem('lugar','Parque Huiracocha - SJL')

         navigate("/articulos/viewarticle/");
      };
    
    
      const divStyles = {
        display:"flex",
        flexDirection:"row",
        paddingBottom:"12px"
      }

      const titleStyles = {
        backgroundColor:"#35B4DC"
      }
    
      const labelStyles = {
        width:"128px",
        textAlign:"left"
      }
    
      const onClickEnvio = () =>{
        // 

      }
      return (
            // <div className="col-md-4 offset-md-3 border rounded shadow" style={containerStyles}>
            <>
      <h2 className="text-center m-6" style={titleStyles}>Registro de artículos</h2>
      
      <form onSubmit={(e) => onSubmit(e)}  className="p-3" >

        <div style={divStyles}>
          <label htmlFor="Tipo" style={labelStyles} className="form-label">
            Tipo
          </label>
          <select 
            styles="display: inline"
            type={"text"}
            className="form-control"
            placeholder="Seleccione tipo de artículo"
            required
            name="tipo"
            value={tipo}
            onChange={(e) => onInputChange(e)}
          >
            <option value="1">Ropa</option>
            <option value="3">Juguete</option>
          </select>
        </div>

        <div style={divStyles}>
          <label htmlFor="Imagen" style={labelStyles} className="form-label">
            Imagen
          </label>
          <input
            styles="display: inline"
            type={"text"}
            className="form-control"
            placeholder="Ingrese link de la imagen"
            name="imagen"
            value={imagen}
            onChange={(e) => onInputChange(e)}
            required
          />
        </div>
        
        <div style={divStyles}>
          <label htmlFor="Cantidad" style={labelStyles} className="form-label">
            Cantidad
          </label>
          <input
            styles="display: inline"
            type={"cantidad"}
            className="form-control"
            placeholder="Ingrese cantidad"
            name="cantidad"
            value={cantidad}
            onChange={(e) => onInputChange(e)}
            required
          />
        </div>

        <div style={divStyles}>
          <label htmlFor="Estado" style={labelStyles} className="form-label">
            Estado
          </label>
          <select 
            styles="display: inline"
            type={"text"}
            className="form-control"
            placeholder="Seleccione estado del artículo"
            name="estado"
            value={estado}
            onChange={(e) => onInputChange(e)}
          >
            <option value="1">Bueno</option>
            <option value="2" selected>Malo</option>
            <option value="3">Regular</option>
          </select>
        </div>

        <div style={divStyles}>
          <label htmlFor="Lugar" style={labelStyles} className="form-label">
            Lugar de Entrega
          </label>
          <select 
            styles="display: inline"
            type={"text"}
            className="form-control"
            placeholder="Seleccione estado del artículo"
            name="lugar"
            value={lugar}
            onChange={(e) => onInputChange(e)}
          >
            <option value="1">Lima Norte</option>
            <option value="2" selected>Lima Sur</option>
            <option value="3">Lima Este</option>
            <option value="4">Lima Oeste</option>
          </select>
        </div>

        <button type="submit" className="btn btn-danger mt-4">
          Enviar Donacion
        </button>
        <Link className="btn btn-outline-danger mx-2" to="/">
          Cancelar
        </Link>
      </form>
      <ToastContainer />
            </>

      );
}
 
export default AddArticle;