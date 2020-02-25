import React from 'react';
import logo from './logo.svg';
import './App.css';
import hamburger from './icons8-menu-64.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <body className="App-body">
        <div className="nav">
          <img src={hamburger}></img>
          <div className="title">RUNNING APP</div>
        </div>
        <div className="middle"></div>
        <div className="foot"></div>

      </body>
    </div>
  );
}

export default App;
