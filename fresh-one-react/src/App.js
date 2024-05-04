import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Fresh-React Sample Shrisha is Singing <code>src/App.js</code> and saves the World.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Using Deploy option in Netlify and accessing files from Github without Build-Source
        </a>
      </header>
    </div>
  );
}

export default App;
