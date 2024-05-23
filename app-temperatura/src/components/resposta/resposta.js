import React, { useState } from "react";
import "./styles.css"

const Resposta = () => {
    const [stateNome, setStateNome] = useState("");
    const [stateTemp, setStateTemp] = useState("0 ºC");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${stateNome}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`;

    fetch(url)
    .then(resposta =>{
      // console.log(resposta)
      return resposta.json()
    })
      .then(dados =>{
        console.log(dados);

        setStateNome(dados.name);
        setStateTemp(dados.main.temp);
        
      })
      .catch(erro => {
        console.log(erro);
      })
    return(
        <div className="resp">
            <label className="resp-temp" htmlFor="local">Local</label>
            <output className="resp-out" id="local">{stateNome}</output>
            <label className="resp-temp" htmlFor="temperatura">Temperatura</label>
            <output className="resp-out" id="temperatura">{stateTemp}</output>
        </div>
    )
}

export default Resposta;