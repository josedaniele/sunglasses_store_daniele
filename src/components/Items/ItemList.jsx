import React from "react";
import Charging from "../Charging";
import Item from "./Item";

export const ItemList = ({ lentes }) => {
  return (
    <>
      {lentes.length > 0 ? (
        lentes.map((lente) => (
          <>
            <Item
              key ={lente.id}
              categoria ={lente.categoria}
              id={lente.id}
              name1={lente.name}
              description={lente.description}
              price={lente.price}
              stock={lente.stock}
              img={lente.img}
            />
          </>
        ))
      ) : (
        <Charging />
      )}
    </>
  );
};
