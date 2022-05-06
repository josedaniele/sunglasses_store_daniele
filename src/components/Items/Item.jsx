import React from "react";




 export const Item = ({ lentes }) => {
  return (
    <>
      {lentes.length > 0 ? (
        lentes.map((lente, index ) => (
          <>
            <div className="card" style={{ display: "inline-flex", width:"20rem", border: "solid" }}>
              <img key={lente.id} src={lente.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 key={lente.id} className="card-title">{lente.name}</h5>
                <h6 key={index.toString}>Precio: <br/>${lente.price}</h6>
                <a href={`../Main/ItemDetail/${lente.id} `} className="btn btn-secondary btn-lg">Mas Detalles</a>
              </div>
            </div>
          </>
        ))
      ) : (
        <div style={{display:"flex", justifyContent: "center", alignItems:"center"}}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        </div>
      )}
    </>
  );
};

