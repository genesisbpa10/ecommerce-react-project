
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
 
  const onAdd = (amount) => {
    
    console.log(`Acabas de agregar ${amount} productos al carrito.`);
  };
  const onErase = () => {
    console.log(
      "Este botón funcionará para eliminar los productos del carrito."
    );
  };

  return (
    <div className="itemList">
      <h1>{props.greetings}</h1>
      <ItemCount stock={4} initial={1} onAdd={onAdd} onErase={onErase} />
      
    </div>
  );
};

export default ItemListContainer;
