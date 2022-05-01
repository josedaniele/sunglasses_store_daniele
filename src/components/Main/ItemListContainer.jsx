import React, { useState } from "react";

function ItemListContainer(props) {
  const [count, setCount] = useState(props.init);
  let incCount = () => {
    if (count < props.stock) {
      setCount(Number(count) + 1);
    }
  };
  let decCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  let onAdd = () => {
    console.log(props.onAdd);
  };

  return (
    <>
      <div className="col-md-4" style={{ margin: "20px" }}>
        <div className="input-group">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-danger"
              type="button"
              onClick={decCount}
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
              onClick={incCount}
            >
              +
            </button>
          </div>
          <div className="col-md-12 input-group-prepend" style={{ marginTop: "10px" }}>
            <button
              className="btn btn-outline-danger"
              type="button"
              onClick={onAdd}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ItemListContainer;
