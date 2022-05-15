import { useEffect, useState } from "react";
import { ItemList } from "../Items/ItemList";
import { producto } from "../Items/Producto";

function ItemListContainer() {
  const [lentes, setLentes] = useState([]);
  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(producto);
      }, 500);
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
    <div className="row">
      <ItemList lentes={lentes} />
    </div>
  );
}
export default ItemListContainer;
