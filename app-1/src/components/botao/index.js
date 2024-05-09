import './style.css';

// Criação de um componente
function Botao({desc}) {
    return (
        <div>
            <button className="Botao-button">
                {desc}
            </button>
        </div>
    )
}

export default Botao;