import React, { Component } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

class CartWidget extends Component {
  render() {
    return <BsFillCartPlusFill style={{ color: "white", fontSize: "40px" }} />;
  }
}

export default CartWidget;
