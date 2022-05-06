import {useParams, useState,useEffect} from 'react'

import { producto } from '../Items/ItemList';



function ItemDetailContainer() {
  
  const{id} = useParams();
  const [item, setItem] = useState(null);

  const filter = producto.find((prod) => prod.id === Number(id));
  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(filter);
      }, 2000);
    });

    promesa
      .then(
        (res) => {
          setItem(res);
        },
        (err) => {
          console.log("Error,producto no encontrado", err);
        }
      )
      .then(() => console.log(item))
      .catch((err) => console.log(err));
      

    return () => {};
  }, []);
    return (
        <div>
    <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer
