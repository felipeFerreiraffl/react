  import './App.css';
import img from './subzero.gif';
import Botao from './components/botao';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>❄ Sub-Zero ❄</h1>
        <img className='App-subzero' src={img} width={150} alt="subzero" />
        <form className='App-form'>
          <label>User: <input type='text' /></label>
          <label>Password: <input type='password' /></label>
        </form>
        {/* Utilização de componente */}
        <Botao desc='Confirmar'></Botao>
        <a href=''>Esqueci a senha</a>
      </header>
    </div>
  );
}

export default App;
