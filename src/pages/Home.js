import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loader from "../componentes/Loader";
import Inicio from "../componentes/Inicio";
import SobreNosotros from "../componentes/SobreNosotros";
import Footer from "../componentes/Footer";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8090/usuarios/listar");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8090/usuarios/eliminar/${id}`);
    loadUsers();
  };

  const divTitleStyles = {
    display:"flex",
    flexDirection:"row",
    padding:"12px",
    fontSize:"32px",
    borderRadius:"4px",
    border:"2px solid rgb(13, 110, 253)",
    marginBottom:"16px"
  }

  const btnStyles = {
    padding:"6px 12px",
    fontSize:"16px",
    borderRadius:"4px",
    backgroundColor:"rgb(13, 110, 253)",
    marginLeft:"32px",
    color:"white"
  }

  return (
    <div className="container">
      <div className="py-4">
        <Inicio/>
        <Footer/>
      </div>
    </div>
  );
}
