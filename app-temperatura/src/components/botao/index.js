import React from "react";
import "./styles.css"

function Botao(props) {
    let cont = 0;

    const contarCliques = () => {
        console.log(cont += 1);
    }

    return(
        <button onClick={contarCliques}>{props.texto}</button>
    )
}

export default Botao;