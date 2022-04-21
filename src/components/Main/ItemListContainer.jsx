import React from "react";

function Container(props) {
    return (
    <div>
    <h2 style={{backgroundColor : "green",color: "white",textAlign: "center"}}> {props.title} </h2>
    </div>
    );
    }
    Container.defaultProps ={
    title: 'Productos'

    }
    export default Container;