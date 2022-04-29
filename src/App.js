import Navbar from "./components/NavBar/NavBar";
import Container from "./components/Main/ItemListContainer";
import { useEffect } from "react";
function App() {
  return (
    <div>
      <Navbar />
      <Container/>
    </div>
    
  );
  const lentes = { id: "lente de Sol" ,marca : "rayban", color: "azul"};
  
  useEffect(() =>{
    const setLentes = new Promise((resolve, reject) =>{
      setTimeout(() =>{
      resolve (lentes);
    }, 3000);
    });
    setLentes
    .then((res) =>{
      
    })
  })

}

export default App;
