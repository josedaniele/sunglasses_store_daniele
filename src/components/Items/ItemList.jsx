import { useEffect, useState } from "react";
import Item from "./Item";

function ItemList() {
  const [lentes, setLentes] = useState([]);

  const producto = [
    {
      id: 1,
      name: "Ray Ban",
      price: "500",
      stock: "10",
      img: "https://stylewatch.vtexassets.com/arquivos/ids/173136-500-auto?v=637270110605670000&width=500&height=auto&aspect=true",
    },
    {
      id: 2,
      name: "Rusty",
      price: "300",
      stock: "7",
      img: "https://stylewatch.vtexassets.com/arquivos/ids/210413-500-auto?v=637822799112230000&width=500&height=auto&aspect=true",
    },
    {
      id: 3,
      name: "Vulk",
      price: "700",
      stock: "3",
      img: "https://stylewatch.vtexassets.com/arquivos/ids/172245-500-auto?v=637254016919200000&width=500&height=auto&aspect=true",
    },
  ];

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
      .then(() => console.log(lentes))
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  return (
    <div>
      <Item lentes={lentes} />
    </div>
  );
}

export default ItemList;
