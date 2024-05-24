import React, { useState } from "react";
import "./styles.css"

const Resposta = () => {
  const [stateNome, setStateNome] = useState("...");
  const [stateTemp, setStateTemp] = useState("0 ºC");
  const [stateDesc, setStateDesc] = useState("...");

    return(
        <div className="resp">
            <label className="resp-temp" htmlFor="local">Local</label>
            <output className="resp-out" id="local">{stateNome}</output>
            <label className="resp-temp" htmlFor="temperatura">Temperatura</label>
            <output className="resp-out" id="temperatura">{stateTemp}</output>
            <label className="resp-temp" htmlFor="descricao">Descrição</label>
            <output className="resp-out" id="descricao">{stateDesc}</output>
        </div>
    )
}

export default Resposta;