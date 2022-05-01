import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Main/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer init={1} stock={15} onAdd={"Añadido al carrito"} />
    </div>
  );
}

export default App;
