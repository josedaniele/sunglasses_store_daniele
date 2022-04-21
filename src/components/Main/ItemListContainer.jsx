import React from "react";

function Container(props) {
    return (
    <main>
    <h2 style={{backgroundColor : "green",color: "white",textAlign: "center"}}> {props.title} </h2>
    </main>
    );
    }
    Container.defaultProps ={
    title: 'Productos'

    }
    export default Container;