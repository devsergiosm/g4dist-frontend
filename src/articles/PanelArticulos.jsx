import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Articulos from "../pages/Articulos";
import AddArticle from "./AddArticle";

const PanelArticulos = ({setIdArticle = 0}) => {

  const containerStyles = {
    backgroundColor:"#B0D4F9"
  }

      return (
        <div className="row m-4">
          <div className="col-4 me-4 border rounded shadow"  style={containerStyles}>
            <AddArticle/>
          </div>
          <div className="col-7 border rounded shadow"  style={containerStyles}>
            <Articulos/>
          </div>
        </div>
      );
}
 
export default PanelArticulos;