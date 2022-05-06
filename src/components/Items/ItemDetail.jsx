import React from "react";

function ItemDetail({ item }) {
  return (
    <>
      {item.length > 0 ? (
        item.map((lente, index) => (
          <>
            <div>
              <h2 key={index}>{lente.name}</h2>
              <img key={index} src={lente.img} alt="..." />
              <div>
                <span key={index}>{lente.description}</span>
                <h4 key={index.toString}>
                  Precio: <br />${lente.price}
                </h4>
                <h5 key={index.toString}>Stock Disponible: {lente.stock}</h5>
                
                  <a href="#" className="btn btn-secondary btn-lg">Comprar</a>
              </div>
            </div>
          </>
        ))
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemDetail;
