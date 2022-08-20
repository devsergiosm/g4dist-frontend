
const ViewArticle = () => {

    const viewStyles = {

    }

    const data = {
        tipo:localStorage.getItem('tipo'),
        imagen:localStorage.getItem('imagen'),
        cantidad:localStorage.getItem('cantidad'),
        estado:localStorage.getItem('estado'),
        username:localStorage.getItem('username'),
        lugar:localStorage.getItem('lugar'),
    }

    const containerStyles = {
        backgroundColor:"#B0D4F9",
        marginLeft:"400px"
      }

      const titleStyles = {
        backgroundColor:"#35B4DC"
      }

    const inputStyles = {
        borderRadius:"2px",
        border:"none",
        padding:"12px"
    }

    const r = Math.floor(Math.random()*1000);

    return ( 
        <div className="row m-4">
          <div className="col-4 me-4 border rounded shadow text-dark"  style={containerStyles}>
            <h2 className="text-center h4 m-6"  style={titleStyles}>Ticket de donacion # {r}</h2>
            <form action="" className="d-flex flex-column">
                <label htmlFor="" className="p-2 d-flex justify-content-between">
                    <span className="text-dark me-2">Usuario</span>
                    <input style={inputStyles} type="text" 
                    value={data.username} />
                </label>
                <label htmlFor="" className="p-2 d-flex justify-content-between">
                    <span className="text-dark me-2">Tipo</span>
                    <input style={inputStyles} type="text" 
                    value={data.tipo} />
                </label>
                <label htmlFor="" className="p-2 d-flex justify-content-between">
                    <span className="text-dark me-2">Cantidad</span>
                    <input style={inputStyles} type="text" 
                    value={data.cantidad} />
                </label>
                <label htmlFor="" className="p-2 d-flex justify-content-between">
                    <span className="text-dark me-2">Estado del artículo</span>
                    <input style={inputStyles} type="text" 
                    value={data.estado} />
                </label>
                <label htmlFor="" className="p-2 d-flex justify-content-between">
                    <span className="text-dark me-2">Imagen</span>
                    <img src={data.imagen} alt="" width='100' height='100'/>
                </label>
                <label htmlFor="" className="p-2 d-flex justify-content-between">
                    <span className="text-dark me-2">Lugar de entrega recomendado</span>
                    <input style={inputStyles} type="text" 
                    value={data.lugar} />
                </label>
                <label htmlFor="" className="p-2 d-flex justify-content-between">
                    <span className="text-dark me-2">Estado de la entrega</span>
                    <input style={inputStyles} type="text" 
                    value='En proceso' />
                </label>
            </form>
          </div>
        </div>
     );
}
 
export default ViewArticle;