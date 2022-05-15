import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import ItemDetailContainer from "../components/Main/ItemDetailContainer";
import ItemListContainer from "../components/Main/ItemListContainer";
import Error from "../components/Error";
import Contacto from "../components/Main/Contacto";
import CategoriaContainer from "../components/Main/CategoriaContainer";

const Ruta = () => {
  return (
      <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element= {<ItemListContainer/>}/> 
          <Route path="/Lentes/categoria/:categoria" element={<CategoriaContainer/>}/>
          <Route path="/ItemDetailContainer/:id" element={<ItemDetailContainer/>}/>
          <Route path="/Contacto" element= {<Contacto/>}/>
          <Route path="*" element={<Error/>}/> 
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default Ruta;
