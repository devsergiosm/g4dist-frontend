
export default function Inicio() {

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
      <div className="py-4 d-flex flex-row justify-content-around">
        <img src="images/donation_box.png" alt="" />
        <img src="images/donate.png" alt="" />
      </div>
      <div className="py-4 d-flex flex-row justify-content-around">
          <img src="images/portada.png" className="img-fluid" alt="" />
        </div>

        
        <div className="py-4 d-flex justify-content-around">
            <div className="bg-warning px-3 py-4 d-flex justify-content-center" style={{width: '32%'}}>
                <img src="images/llamada.png" alt="" width="30px" />
                <span className="px-1"><b>LLamanos Ahora</b></span>
            </div>
            <div className="bg-success px-3 py-4 d-flex justify-content-center" style={{width: '32%'}}>
                <img src="images/recicla.png" alt="" width="30px" />
                <span className="px-1"><b>Reciclaje</b></span>
            </div>
            <div className="bg-primary px-3 py-4 d-flex justify-content-center" style={{width: '32%'}}>
                <img src="images/caja.png" alt=""  width="30px" />
                <span className="px-1"><b>Donar</b></span>
            </div>
         </div>

        <div className="py-4 px-2 bg-dark">
            <div className=" row ">
                <div className=" p-3 text-white col-7">
                    <h4 >SOBRE NOSOTROS</h4>
                    <p className="text-left" >
                        Tus amables donaciones se dirigirán a los diferentes programas de ayuda en las comunidades que apoyamos.
                    </p>
                    <p className="text-left" >
                        Nuestra  Asociación Traperos Solidarios Perú, somos una entidad preceptora de donaciones registrada, conformado por un grupo de personas solidarias, que tienen como propósito mejorar la calidad de vida de las familias, ancianos y niños de los distintos sectores de las ciudades de Lima.
                    </p>
                  </div>
                  <div className="col-5 d-flex justify-content-center">
                    <img src="images/sobre_nosotros.png" className="img-fluid" alt="" />
                  </div>
            </div>
        </div>
    </div>
  );
}
