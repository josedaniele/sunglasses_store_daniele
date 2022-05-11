import React from "react";
import { Link } from "react-router-dom";
import Charging from "../Charging";




 export const Item = ({ lentes }) => {
  return (
    <>
      {lentes.length > 0 ? (
        lentes.map((lente, index ) => (
          <>
            <div className="card" style={{ display: "inline-flex", width:"20rem", border: "solid" }}>
              <img key={lente.img} src={lente.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 key={lente.name} className="card-title">{lente.name}</h5>
                <h6 key={index.toString}>Precio: <br/>${lente.price}</h6>
                <Link key={lente.id} to={`/ItemDetailContainer/${lente.id}`} className="btn btn-secondary btn-lg">Mas Detalles</Link>
              </div>
            </div>
          </>
        ))
      ) : (
        <Charging/>
      )}
    </>
  );
};

