import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Teste de React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React-App
        </a>
        <h1>Flamengo</h1>
        <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png" className="App-logo" alt="flamengo" />
      </header>
    </div>
  );
}

export default App;
