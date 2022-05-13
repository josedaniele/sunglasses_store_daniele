import React, { useState } from "react";

function ItemCount({lentes}) {
  
  
    const [count, setCount] = useState(1);
  const handleIncCount = (e) => {
    if (count < lentes.stock) {
      setCount(Number(count) + 1);
    }
  };
  const handleDecCount = (e) => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleOnAdd = (e) => {
    console.log("Usted a agregado",count ,"lentes");
  };

  return (
    <>
      <div className="col-md-4" style={{ margin: "20px" }}>
        <div className="input-group">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-danger"
              type="button"
              onClick={handleDecCount}
            >
              -
            </button>
          </div>
          <p
            style={{
              margin: "0px 10px",
              border: "solid green 1px",
              borderRadius: "10px",
              padding: "5px 20px",
            }}
          >
            {" "}
            {count}
          </p>
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-danger"
              type="button"
              onClick={handleIncCount}
            >
              +
            </button>
          </div>
          <div className="col-md-12 input-group-prepend" style={{ marginTop: "10px" }}>
            <button
              className="btn btn-outline-danger"
              type="button"
              onClick={handleOnAdd}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ItemCount;