import React from "react";

const Item = ({ lentes }) => {
  return (
    <>
      {lentes.length > 0 ? (
        lentes.map((lente, index) => (
          <>
            <div className="card" style={{ width: "18rem" }}>
              <img key={index} src={lente.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 key={index} className="card-title">{lente.name}</h5>
                <h6 key={index}>${lente.price}</h6>
                <a href="#" className="btn btn-primary">
                  Mas Detalles
                </a>
              </div>
            </div>
          </>
        ))
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
};

export default Item;
