import './App.css';
import img from './subzero.gif';
import Botao from './components/botao';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>❄ Sub-Zero ❄</h1>
        <img className='App-subzero' src={img} width={150} alt="subzero" />
        <form>
          <label>User: <input type='text' /></label>
          <label>Password: <input type='password' /></label>
        </form>
        {/* Utilização de componente */}
        <Botao desc='Confirmar'></Botao>
        <a>Esqueci a senha</a>
      <h1>Flamengo</h1>
        <img 
        src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png"
         className="Flamengo" 
         alt="flamengo" 
         />
      </header>
    </div>
  );
}

export default App;
