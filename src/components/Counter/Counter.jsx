import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);
  let incCount =()=>{
    if(count<15)
    {
    setCount(Number(count)+1);
    }
  };
  let decCount = () => {
     if(count>1)
     {
      setCount(count - 1);
     }
  }

   return(
    <>
    <div className="col-md-4">
    <div class="input-group">
  <div class="input-group-prepend">
    <button class="btn btn-outline-danger" type="button" onClick={decCount}>-</button>
  </div>
  <p style={{margin: "0px 10px", border: "solid green 1px", borderRadius: "10px", padding:"5px 20px"}} > {count}</p>
  <div class="input-group-prepend">
    <button class="btn btn-outline-danger" type="button" onClick={incCount}>+</button>
  </div>
</div>
</div>
   </>
  );
}
export default Counter;
