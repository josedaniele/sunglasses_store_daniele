import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {producto} from "../Items/Producto";
import ItemDetail from '../Items/ItemDetail';
import Charging from '../Charging';




function ItemDetailContainer() {
  
  const{id} = useParams();
  const [lentes, setLentes] = useState(null);

  const filter = producto.find((prod) => prod.id === Number(id));
  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(filter);
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
       .then(() => console.log(filter))
       .catch((err) => console.log(err));
       
 
     return () => {};


  }, []);
    return (
        <div>
    {lentes ? <ItemDetail lentes={lentes}/> : (<Charging/>)}
    </div>
  )
}

export default ItemDetailContainer
