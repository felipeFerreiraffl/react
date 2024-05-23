import './App.css';
// import Temperatura from './components/temperatura';
import EstadoCard from './components/estado/estado';
import Resposta from './components/resposta/resposta';
// import { useState } from 'react';

function App() {
  // Vetor com os dias da semana
  // const diasSemana = ['Domingo', 'Segunda', 'Terça' , 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  return (
    <div className="App">       
      {/*{
          diasSemana.map((dia) => {
            return(<Temperatura diaDaSemana={dia} temperatura="20°" local="Diadema, SP"></Temperatura>)
          })
        } */}
      <div className='card'>
        <EstadoCard></EstadoCard>
        <Resposta></Resposta>
      </div>
    </div>
  );
}

export default App;
