import React, { useState } from "react";
import "./styles.css"

const PrevisaoCard = () => {
    const diasSemana = ['1','2','3','4','5'];
    const [local, setLocal] = useState('Local');
    const [dia, setDia] = useState('');
    const [temp, setTemp] = useState('');

    return (
        <div className="previsao">
            <h1 className="previsao-titulo">{local}</h1>
            {
                diasSemana.map((index) => {
                    return (
                        <div key={index} className="previsao-card">
                            <h2 className="previsao-dia">{dia}</h2>
                            <div className="previsao-info">
                                <h3 className="previsao-temp">{temp}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PrevisaoCard;