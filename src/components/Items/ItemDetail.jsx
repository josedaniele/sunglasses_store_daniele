import React, { useState } from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({ lentes }) => {
  
  
const OnAdd =(event) =>{
    
    
  }
  return (
    <div>
    <h2 style={{ fontSize:"50px",fontWeight:"200"}}>{lentes.name}</h2>
    <img  src={lentes.img} alt="..." />
    <div>
      <h3>Descripcion:</h3>
      <div style={{margin: "10px 30rem 10px 5px"}}>
      <span>{lentes.description}</span>
      </div>
      <div style={{display:"flex" ,flexDirection:"column" , justifyContent:"center",textAlign:"center"}}>
      <h4 >
        Precio: <br />${lentes.price}
      </h4>
      <h5 >Stock Disponible: {lentes.stock}</h5>
      </div>
      <ItemCount lentes={lentes} handleOnAdd = {OnAdd}/>
    </div>
  </div>

  )
};

export default ItemDetail;
