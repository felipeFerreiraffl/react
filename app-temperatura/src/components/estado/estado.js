import React from "react";
import "./styles.css"
import Api from "../../scripts/api-clima";

const EstadoCard = () => {
    return(
        <div className="local">
            <label className="local-titulo" htmlFor="nome-local">Clima-Tempo</label>
            <input className="local-input" type="text" placeholder="Digite uma cidade ou estado" id="nome-local"></input>
            <button className="local-botao" onClick={Api}>Buscar</button>
        </div>
    )
}

export default EstadoCard;