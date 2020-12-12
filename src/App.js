import logo from './logo.svg';
import './App.css';
import ThemeSwitcher from './First.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HEY! I'M ARANZA ORTEGA, JUNIOR FRONTEND DEVELOPER
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ThemeSwitcher/>
    </div>
  );
}

export default App;
