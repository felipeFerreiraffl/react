import './App.css';
import Temperatura from './components/temperatura';
import Botao from './components/botao';
import { useState } from 'react';

function App() {
  // Vetor com os dias da semana
  const diasSemana = ['Domingo', 'Segunda', 'Terça' , 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  // Renderização de componentes
  let [contEstado, setContEstado] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Botao texto="Buscar"></Botao>
        <button onClick={() => {setContEstado(contEstado += 1)}}>Estados</button>
        <h1>{contEstado}</h1>
        {
          // Parecido com foreach
          diasSemana.map((dia) => {
            return(<Temperatura diaDaSemana={dia} temperatura="20°" local="Diadema, SP"></Temperatura>)
          })
        }
      </header>
    </div>
  );
}

export default App;
