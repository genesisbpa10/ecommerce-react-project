import React from 'react'
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  return (
    <div className='itemList'>
      <h1>{props.greetings}</h1>
      <ItemCount />
    </div>
  );
};

export default ItemListContainer;
