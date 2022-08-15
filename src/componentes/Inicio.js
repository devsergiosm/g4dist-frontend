import SobreNosotros from "./SobreNosotros";

export default function Inicio() {

  
  const boxStyles = {
    cursor:"pointer",
    width:"32%"
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
        <div className="bg-warning px-3 py-4 d-flex justify-content-center" style={boxStyles}>
            <img src="images/telefono.png" alt="" width="30px" />
            <span className="px-1"><b>LLámanos Ahora</b></span>
        </div>
        <div className="bg-primary px-3 py-4 d-flex justify-content-center" style={boxStyles}>
            <img src="images/reciclaje.png" alt="" width="30px" />
            <span className="px-1"><b>Reciclaje</b></span>
        </div>
        <div className="bg-success px-3 py-4 d-flex justify-content-center" style={boxStyles}>
            <img src="images/donacion.png" alt=""  width="30px" />
            <span className="px-1"><b>Donar</b></span>
        </div>
      </div>
      <SobreNosotros/>
    </div>
  );
}