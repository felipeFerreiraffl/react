import React, { useState } from "react";
import "./styles.css"
import { ApiClima } from "../../script/api-clima";

const EstadoCard = () => {
    return(
        <div className="local">
            <label className="local-titulo" htmlFor="nome-local">Clima-Tempo</label>
            <input className="local-input" type="text" placeholder="Digite uma cidade ou estado" id="nome-local"></input>
            <button className="local-botao" onClick={ApiClima}>Buscar</button>
        </div>
    )
}

export default EstadoCard;