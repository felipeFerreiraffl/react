import './App.css';
import EstadoCard from './components/estado/estado';
import Resposta from './components/resposta/resposta';
import PrevisaoCard from './components/previsao/previsao';

function App() {

  return (
    <div className="App">       
      <div className='card'>
        <EstadoCard></EstadoCard>
        <Resposta></Resposta>
      </div>
      <PrevisaoCard></PrevisaoCard>
    </div>
  );
}

export default App;
