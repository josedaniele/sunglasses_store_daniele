import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {producto} from "../Items/Producto";
import { ItemList } from "../Items/ItemList";
import Charging from '../Charging';

function CategoriaContainer() {
  
    const{categoria} = useParams();
    const [lentes, setLentes] = useState(null);
  
    const filter = producto.find((prod) => prod.categoria===Number(categoria));
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
         .then(() => console.log(producto))
         .catch((err) => console.log(err));
         
   
       return () => {};
  
  
    }, []);
      return (
          <div>
      {lentes ? <ItemList lentes={lentes}/> : (<Charging/>)}
      </div>
    )
  }
  
  export default CategoriaContainer