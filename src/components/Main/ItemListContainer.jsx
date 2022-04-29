import React from "react";
import Counter from "../Counter/Counter";

function Container(props) {
    return (
    <main>
    <h2 style={{backgroundColor : "green",color: "white",textAlign: "center"}}> {props.title} </h2>
    <Counter/>
    </main>
    );
    }
    Container.defaultProps ={
    title: 'Productos'

    }
    export default Container;