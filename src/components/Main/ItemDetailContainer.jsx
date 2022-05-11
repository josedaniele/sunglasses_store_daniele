import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { producto } from '../Items/ItemList';
import ItemDetail from '../Items/ItemDetail';
import Charging from '../Charging';



function ItemDetailContainer() {
  
  const{id} = useParams();
  const [lente, setLente] = useState(null);

  const filter = producto.find((prod) => prod.id === Number(id));
  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(filter);
      }, 2000);
      
      promesa
      .then(
        (res) => {
          setLente(res);
        },
        (err) => {
          console.log("Error,producto no encontrado", err);
        }
      )
      .then(() => console.log(lente))
      .catch((err) => console.log(err));
    });


  }, []);
    return (
        <div>
    {lente ? <ItemDetail lente={lente}/> : <Charging/>}
    </div>
  )
}

export default ItemDetailContainer
