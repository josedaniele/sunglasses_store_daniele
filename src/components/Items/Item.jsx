import React from "react";
import { Link } from "react-router-dom";

const Item = ({ name1, img, price, id }) => {
  return (
    <div className="col-md-4">
      <div
        className="card"
        style={{ margin: "4rem", width: "20rem", border: "solid" }}
      >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name1}</h5>
          <h6>
            Precio: <br />${price}
          </h6>
          <Link
            to={`/ItemDetailContainer/${id}`}
            className="btn btn-secondary btn-lg"
          >
            Mas Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
