import React from "react";
import './styles.css'
import img from './frio.png'

function Temperatura(props) {
    return(
        <div className="card">
            <div className="card-corpo">
                <h2>{props.diaDaSemana}</h2>
                <h2 className="num">{props.temperatura}</h2>
                <p className="local">{props.local}</p>
            </div>
        </div>
    )   
}

export default Temperatura;
