import { useEffect, useState } from "react";
import { Item } from "../Items/Item";
import {producto} from"../Items/ItemList";



function ItemListContainer() {
  const [lentes, setLentes] = useState([]);
  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(producto);
      }, 2000);
    });

    promesa
      .then(
        (res) => {
          setLentes(res);
        },
        (err) => {
          console.log("Error,producto no encontrado", err);
        }
      )
      .then(() => console.log(producto))
      .catch((err) => console.log(err));
      

    return () => {};
  }, []);

  return (
    <div style={{display:"flex", justifyContent:"space-around",marginTop:"30px"}}>
      <Item lentes={lentes} />
      </div>
  );
}
export default ItemListContainer;
