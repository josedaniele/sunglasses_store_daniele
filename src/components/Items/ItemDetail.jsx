import React from "react";

const ItemDetail = ({ lente }) => {
  return (
    <div>
      <h2 key={lente.id}>{lente.name}</h2>
      <img key={lente.id} src={lente.img} alt="..." />
      <div>
        <span key={lente.id}>{lente.description}</span>
        <h4 key={toString}>
          Precio: <br />${lente.price}
        </h4>
        <h5 key={toString}>Stock Disponible: {lente.stock}</h5>

        <a href="#" className="btn btn-secondary btn-lg">
          Comprar
        </a>
      </div>
    </div>
  );
};

export default ItemDetail;
