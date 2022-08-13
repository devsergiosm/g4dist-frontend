

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loader from "../componentes/Loader";

const Articulos = () => {
    const [articles, setArticles] = useState([]);

    const { id } = useParams();
  
    useEffect(() => {
      loadArticles();
    }, []);
  
    const loadArticles = async () => {
      const result = await axios.get("https://sistemadonaciones.rj.r.appspot.com/articulos/listar");
      setArticles(result.data);
    };
  
    const deletearticle = async (id) => {
      await axios.delete(`https://sistemadonaciones.rj.r.appspot.com/articulos/eliminar/${id}`);
      loadArticles();
    };

    const divStyles = {
        // display:"flex",
        // flexDirection:"row",
        // padding:"12px",
        // fontSize:"32px",
        // borderRadius:"4px",
        // border:"2px solid rgb(81,132,164)",
        // marginBottom:"16px"
        backgroundColor:"#35B4DC"
      }

      const btnStyles = {
        padding:"6px 12px",
        fontSize:"16px",
        borderRadius:"4px",
        backgroundColor:"rgb(13, 110, 253)",
        marginLeft:"32px",
        color:"white"
      }

      const estadosArticulo = {
          1: "Bueno",
          2: "Regular",
          3: "Malo",
      }
    return ( 
        <>
            <header>
                <h2 className="text-center m-6" style={divStyles}>
                    Artículos
                    <Link className="btn" style={btnStyles} to="/">
                        Usuarios
                    </Link>
                    <Link className="btn" style={btnStyles} to="/transaccion">
                        Donaciones
                    </Link>
                    <Link className="btn" style={btnStyles} to="/articulos/addarticle">
                        Agregar Artículo
                    </Link>
                </h2>
            </header>
            <main>
                <table className="table table-dark  table-hover border shadow">
                    <thead>
                        <tr>
                        <th scope="col">N°</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map((article, index) => (
                        <tr key={index}>
                            <th scope="row" key={index}>
                            {index + 1}
                            </th>
                            <td>{article.tipo}</td>
                            <td>
                                {/* {article.imagen} */}
                                <img src={article.imagen} alt="Imagen de donacion" width="80" />
                            </td>
                            <td>{article.cantidad}</td>
                            <td>{estadosArticulo[article.estado]}</td>
                            <td>
                                <button
                                    className="btn btn-danger mx-2"
                                    onClick={() => deletearticle(article.id)}
                                    >
                                    Eliminar
                                </button>
                                <Link className="btn btn-success" to={`/editarticle/${article.id}`}>
                                    Editar
                                </Link>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </>
     );
}
 
export default Articulos;